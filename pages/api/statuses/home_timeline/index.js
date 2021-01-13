const timeline = [
  {
    id: "0",
    avatar:
      "https://pbs.twimg.com/profile_images/1279167287220744194/EwZ-t3CY_400x400.jpg",
    username: "omariosoulto",
    message:
      "Oi beninas, no tutorial de hoje como fazer o Macbook funcionar no calor que tá fazendo em SP",
  },
  {
    id: "1",
    avatar:
      "https://pbs.twimg.com/profile_images/1092489365329272832/KgCGr9im_400x400.jpg",
    username: "dconline",
    message: "Twitter suspende conta de Donald Trump permanentemente",
  },
  {
    id: "2",
    avatar:
      "https://pbs.twimg.com/profile_images/1083714591752941568/Q7LnIANs_400x400.jpg",
    username: "midudev",
    message:
      "¿Quieres aprender y dominar Javascript y no sabes qué libros deberías leer?",
  },
  {
    id: "3",
    avatar:
      "https://pbs.twimg.com/profile_images/1279167287220744194/EwZ-t3CY_400x400.jpg",
    username: "omariosoulto",
    message:
      "Oi beninas, no tutorial de hoje como fazer o Macbook funcionar no calor que tá fazendo em SP",
  },
  {
    id: "4",
    avatar:
      "https://pbs.twimg.com/profile_images/1092489365329272832/KgCGr9im_400x400.jpg",
    username: "dconline",
    message: "Twitter suspende conta de Donald Trump permanentemente",
  },
  {
    id: "5",
    avatar:
      "https://pbs.twimg.com/profile_images/1083714591752941568/Q7LnIANs_400x400.jpg",
    username: "midudev",
    message:
      "¿Quieres aprender y dominar Javascript y no sabes qué libros deberías leer?",
  },
  {
    id: "6",
    avatar:
      "https://pbs.twimg.com/profile_images/1279167287220744194/EwZ-t3CY_400x400.jpg",
    username: "omariosoulto",
    message:
      "Oi beninas, no tutorial de hoje como fazer o Macbook funcionar no calor que tá fazendo em SP",
  },
  {
    id: "7",
    avatar:
      "https://pbs.twimg.com/profile_images/1092489365329272832/KgCGr9im_400x400.jpg",
    username: "dconline",
    message: "Twitter suspende conta de Donald Trump permanentemente",
  },
  {
    id: "8",
    avatar:
      "https://pbs.twimg.com/profile_images/1083714591752941568/Q7LnIANs_400x400.jpg",
    username: "midudev",
    message:
      "¿Quieres aprender y dominar Javascript y no sabes qué libros deberías leer?",
  },
  {
    id: "9",
    avatar:
      "https://pbs.twimg.com/profile_images/1279167287220744194/EwZ-t3CY_400x400.jpg",
    username: "omariosoulto",
    message:
      "Oi beninas, no tutorial de hoje como fazer o Macbook funcionar no calor que tá fazendo em SP",
  },
  {
    id: "10",
    avatar:
      "https://pbs.twimg.com/profile_images/1092489365329272832/KgCGr9im_400x400.jpg",
    username: "dconline",
    message: "Twitter suspende conta de Donald Trump permanentemente",
  },
  {
    id: "11",
    avatar:
      "https://pbs.twimg.com/profile_images/1083714591752941568/Q7LnIANs_400x400.jpg",
    username: "midudev",
    message:
      "¿Quieres aprender y dominar Javascript y no sabes qué libros deberías leer?",
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader("content-type", "application/json");
  res.send(JSON.stringify(timeline));
};
