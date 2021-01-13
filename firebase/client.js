import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBT2qj2rWaffbw_s2Jg_oCE8m9_S_K4Ffw",
  authDomain: "devter-f8b98.firebaseapp.com",
  projectId: "devter-f8b98",
  storageBucket: "devter-f8b98.appspot.com",
  messagingSenderId: "231337594232",
  appId: "1:231337594232:web:6c6e623dbf174959048c8d",
  measurementId: "G-5RH0X5KYC6",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL, uid } = user;

  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid,
  };
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null;

    onChange(normalizedUser);
  });
};

export const loginWithFacebook = () => {
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(facebookProvider);
};

export const addCoffee = ({ avatar, userName, content, userId, img }) => {
  return db.collection("coffees").add({
    avatar,
    userName,
    userId,
    content,
    img,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0,
  });
};

const mapCoffesFromFirebaseToCoffeeObject = (doc) => {
  const data = doc.data();
  const id = doc.id;
  const { createdAt } = data;

  return {
    ...data,
    id,
    createdAt: +createdAt.toDate(),
  };
};

export const listenLatestCoffees = (callback) => {
  return db
    .collection("coffees")
    .orderBy("createdAt", "desc")
    .limit(20)
    .onSnapshot(({ docs }) => {
      const newCoffees = docs.map(mapCoffesFromFirebaseToCoffeeObject);
      callback(newCoffees);
    });
};

export const uploadImage = (file) => {
  const ref = firebase.storage().ref(`images/${file.name}`);
  const task = ref.put(file);
  return task;
};
