import * as React from "react";

function Logo(props) {
  return (
    <svg
      fill={"#d2691e"}
      xmlns="http://www.w3.org/2000/svg"
      width={333.333}
      height={333.333}
      viewBox="0 0 250 250"
      {...props}
    >
      <path d="M106 1.7C52.2 9.9 9.5 53 1.6 107.1c-2 13.4-2 22.4 0 35.8 5.8 39.9 31.1 75.2 66.7 93.3 16.5 8.3 39.1 13.8 56.7 13.8s40.2-5.5 56.7-13.8c35.6-18.1 60.9-53.4 66.7-93.3 2-13.4 2-22.4 0-35.8C238.4 38.6 174.3-8.8 106 1.7zm25.4 15.4c2.2 5.4 2 7.8-1 13.5-1.8 3.2-2.7 6.6-2.8 9.8-.2 5.7-1.7 6.9-4.6 3.4-3.7-4.4-3.7-8.5.1-15.7 2-3.9 3.4-8.1 3.4-10.5.2-5.5.3-5.6 1.9-5 .8.3 2.2 2.3 3 4.5zm-23 6.1c2 2.8 2 8.5.1 11.8-2 3.5-1.8 6.7.5 9 1.1 1.1 2 2.4 2 3 0 2.1-3.3.9-6.6-2.4-3.9-3.9-4.4-7.6-1.9-14.6.8-2.3 1.5-5.3 1.5-6.6 0-3 2.4-3.1 4.4-.2zm44.3 5.6c.5 3.9.3 4.4-4.6 9.4-2.8 2.9-5.7 6.2-6.4 7.2-2 2.7-3.7 1.1-3.7-3.4 0-3.1.9-4.8 4.5-9.1 2.9-3.4 4.5-6.2 4.5-7.9 0-1.5.3-3 .7-3.4 1.3-1.3 4.5 3.2 5 7.2zm-14.1 24.8c4.5.9 10.3 2.8 13 4.3 4.7 2.5 4.9 2.8 5.2 7.3.3 4.3.6 4.7 3.3 5.3 6.4 1.4 11.9 8.4 11.9 15.3 0 7.2-7.1 14.2-14.5 14.2-2.7 0-3.3.6-5.4 5.1-4.3 9-16.3 16.9-25.9 16.9-11.8 0-23.3-6.9-28.5-17.1-4.2-8.3-7.3-35.5-4.8-42.2 1.2-3 8.5-6 21.1-8.7 10.7-2.3 14.5-2.4 24.6-.4zm-57.8 54.8c3.7 1.9 7.6 4.1 8.7 5 1.8 1.3 1.9 1.6.4 3.1-1.4 1.5-2.3 1.2-10.7-3-9.4-4.8-10.8-5.8-9.7-7.5 1.1-1.8 4.4-1.1 11.3 2.4zm99.2-.5c0 2.5-20.5 13-22.1 11.4-2.1-2.1-.2-3.9 8.8-8.6 9.6-5.1 13.3-5.8 13.3-2.8zm-92.5 15c2.1.4 3 1.2 3 2.6 0 1.9-.7 2-12.3 2-9.2 0-12.7-.3-13.5-1.4-.9-1-.7-1.6.8-2.7 2-1.5 16.1-1.8 22-.5zm92.3 2.7c.6.2 1.2 1.3 1.2 2.4 0 1.8-.6 2-6.9 2-9.3 0-13.1-.8-13.1-3 0-.9.3-2 .7-2.3.6-.7 15.4 0 18.1.9zm-53.7 7.3c3.1 3.2 3.7 6.2 1.5 8-1.5 1.3-1.9.9-4.1-3.3-2.7-5.2-5.5-1.2-5.5 7.7v5.2l6.2-.5 6.3-.5.7-5.3c1.1-7.3 3.3-12 6.3-13.4 2.2-1 3-.8 5.3.9 3.5 2.6 5.1 8.8 2.9 11-2.1 2.1-3.3 1-4.1-3.8-.4-2.5-1.1-3.9-1.9-3.6-1.4.4-3.4 5.8-3.9 10.7-.3 3.4-.2 3.5 3.2 3.5 4.3.1 6.1 1.1 5.3 3-.3 1-2 1.5-4.8 1.5h-4.3l-.7 4.6c-.3 2.5-.3 9.7.1 16 .6 11 .6 11.4-1.4 11.4-1.1 0-2.3-.7-2.6-1.6-.3-.9-.6-7.8-.6-15.5V155h-12v3.7c.1 3.8 1.5 16.1 2.6 22 .5 2.5.2 3.4-1.1 3.9-.9.4-2 .3-2.5-.2-1-1-2.5-10.1-3.5-21.2-.7-7.1-.7-7.2-3.5-7.2-1.6 0-3.2-.5-3.5-1-1-1.6 1.5-4 4.1-4 2.2 0 2.4-.4 2.4-5.3 0-9.8 3.1-15.7 8.3-15.7 1 0 3.2 1.3 4.8 2.9zm-31.3 4.5c6.7 3.5 10 10 10.9 21.4.7 10.2-.8 15.5-5.8 20.5-3.7 3.8-4.2 3.9-9 3.5-5.6-.6-10.2-4-12.5-9.5-3-6.9-.8-23.1 3.5-25.7.6-.4 1.1-2.3 1.1-4.2 0-6.3 5.6-9.2 11.8-6zm70.1 6c3.1 1.6 5.1 5.4 5.1 9.5 0 4-1.6 4.9-9.4 5.7l-6.8.7.6 4.1c.9 5.6 4.6 11.8 7.9 13.4 6.8 3.3 12.3-2.9 13.8-15.5 1.2-9.6 2.3-12.6 6.1-15.8 3.4-2.9 5.5-3.1 10.3-1.1 4.3 1.8 6.7 6.4 6.3 11.9l-.3 4.2-8 1.2c-4.4.6-8.2 1.2-8.4 1.2-.2.1-.1 1.5.3 3.3 1.3 6.6 6.8 11.8 10.5 9.9 1.1-.6 2.3-2 2.6-3.2.8-2.4 4.8-2.3 5.3.2.4 2.4-4.4 7.7-7.8 8.4-3.8.8-9.4-1.8-12.1-5.7l-2.1-2.9-1.8 2.8c-4 6.6-10.8 9-16.7 5.9-9.5-4.9-14.1-20.7-9.2-31.6 3.3-7.5 7.8-9.6 13.8-6.6zm-94 2.2c3.3 2.7 4.1 6.1 1.7 7-.8.3-2.5-.6-3.9-2-3.4-3.4-5-3.3-9.3.7-6.1 5.5-5.7 15.9.7 19.2 4.2 2.2 6.4 1.8 9.3-1.6 2.2-2.6 2.9-2.9 4.1-1.9 2 1.7 1.9 2.4-1.1 5.9-4.7 5.7-13.6 5-19.2-1.4-5.6-6.2-5-16.8 1.1-23.4 5.6-5.8 11.6-6.8 16.6-2.5zm93.9 48c2.3.5 3.1 4.1 1.3 5.9-.6.6-2.8 4.3-5 8.3l-4 7.2 4.5 8.5c2.6 4.8 4.4 9.4 4.2 10.7l-.3 2.3-24.5.3c-13.5.2-26.5.4-29 .5-2.5.1-10 0-16.7-.1-11.6-.2-12.3-.3-12.3-2.2 0-2.5 3.1-8.8 7.3-14.9 3-4.4 3-4.5 1.2-7.5-6.2-10.7-8.6-15.8-8.1-17.1.4-1.1 2.5-1.5 8.8-1.6 4.6-.1 11.5-.5 15.3-.9 7-.7 53.1-.3 57.3.6zm-83.7 19.6c1.6 3 .3 6.7-2.8 7.4-3.5.9-5.7-.7-6.1-4.4-.6-5.4 6.4-7.8 8.9-3zm95.1-.7c1.7 3.7-.3 7.5-4 7.5-3.5 0-5.2-1.6-5.2-5s1.7-5 5.2-5c2.1 0 3.2.7 4 2.5z" />
      <path d="M130.7 61.7c-.3.5-.7 2.4-.9 4.3-.2 2.6.1 3.5 1.4 3.8 1.8.3 4.5-5.9 3.3-7.8-.7-1.2-3.2-1.3-3.8-.3zM106.1 65.9c-5.2.9-5.2 3.1.1 3.1h4.3l-.3 18.5-.3 18.5h-3.4c-2.4 0-3.5.5-3.5 1.5 0 1.2 1.7 1.5 9.5 1.5 7.5 0 9.5-.3 9.5-1.4 0-1.5-5.3-3.2-6.9-2.2-1.2.8-1.7-9.8-1.3-25l.3-11.3 3.7-.3c2.5-.2 3.7-.8 3.7-1.8 0-1.2-1.4-1.5-6-1.6-3.3-.1-7.5.1-9.4.5zM138.2 73.6c-3.5 2.4-2.9 7 1.8 13.3 4.3 5.7 5.6 12.1 2.4 12.1-1 0-1.4-.7-1.2-2.2.2-1.5-.3-2.4-1.4-2.6-1.5-.3-1.8.4-1.8 3.2 0 5.8 6.4 7.5 9.1 2.4 1.8-3.3.4-8.3-4.1-14.6-2.6-3.8-3.8-6.5-3.4-7.5.7-2 4.3-2.3 4.5-.5.1.7.2 2 .3 2.8 0 .8.8 1.5 1.6 1.5 2.4 0 2.4-5.1.1-7.4-2.5-2.5-4.9-2.7-7.9-.5z" />
      <path d="M117.5 74c-.8 1.3.3 3 2 3 1 0 1.5 2.7 2 10.7.8 14 .8 13.7 2.6 14.1 1.4.3 1.5-1.2 1.1-12.3l-.5-12.5h2.6c2.8 0 4.6-1.8 2.5-2.4-3.6-1.2-11.7-1.6-12.3-.6zM157 83.9c0 3.3-.3 6.6-.6 7.5-.8 2.1 3.4 2.2 6.4 0 3.1-2.2 3-7.7-.3-10.9-4.1-4.2-5.5-3.3-5.5 3.4zM88 142.8c0 2.6 4 6 7.8 6.8 3.6.7 3.8.4 1.7-3.6-2.5-4.8-9.5-7.1-9.5-3.2zM83.3 154.7c-1 2.5-1.4 5.8-1.1 10 .3 5.2.9 6.8 3.3 9.3 3.2 3.4 6.8 3.9 10.3 1.5 2.6-1.9 5.4-10.9 5-16.2-.3-3.7-.4-3.8-5.1-4.5-2.7-.3-5.9-1.4-7.2-2.2-3.3-2.2-3.4-2.1-5.2 2.1zM157.1 149.6c-3 3.9-2.7 4.8 1.7 4 2-.3 4.3-.6 5-.6 1.8 0 1.5-2.4-.6-4.3-2.5-2.3-3.7-2.1-6.1.9zM184.7 149.7c-.8 1-1.9 3-2.2 4.5-.6 2.5-.4 2.8 1.6 2.8 1.3 0 4.1-.3 6.2-.6 4.5-.8 5-3.3 1.1-6.3-3.3-2.6-4.6-2.6-6.7-.4zM98 197.2c-5.8.6-10.7 1.2-10.9 1.4-.3.3 3.3 7.1 7.4 13.9l1.8 3-5.2 7.9c-2.8 4.3-5.1 8.2-5.1 8.6 0 1.5 14.7 2 45.7 1.3l32.2-.6-2.6-5.1c-1.4-2.8-3.4-6.3-4.4-7.8-1.1-1.4-1.9-3.3-1.9-4.2 0-.9 2-5.2 4.5-9.7 2.5-4.5 4.4-8.4 4.2-8.6-1-.9-56.5-1-65.7-.1zm9.1 4.8c2.1 0 3.9.4 3.9 1 0 .5-1.2 1-2.6 1h-2.6l.3 11.5c.3 8.1.1 11.5-.7 11.5-1.5 0-2.4-5.7-2.4-15.1 0-6.9-.2-7.7-2.1-8.2-1.2-.3-1.8-1-1.4-1.7.4-.6 1.4-.9 2.2-.6.8.3 3.2.6 5.4.6zm8.7 1.7c-.2 1-1 1.8-1.8 1.8s-1.6-.8-1.8-1.8c-.2-1.2.3-1.7 1.8-1.7s2 .5 1.8 1.7zm8.7 2.3l4 4.1 3.1-3.7c1.8-2.3 3.5-3.4 4.2-3 1.7 1.1 1.7 22.9 0 22.4-.9-.3-1.5-3.5-1.8-9.2l-.5-8.8-2.4 3.2-2.3 3.2-4.4-4.3-4.4-4.3v10.6c0 9.4-.9 13.5-2.3 11.1-1-1.8.6-25.3 1.7-25.3.7 0 3 1.8 5.1 4zm25.3 4.8c1.5 2.3 1.5 2.5-.3 3.8-1 .8-3.2 1.4-4.7 1.4-3.8 0-4.7 2.6-1.9 5.3 1.8 1.8 2.4 2 4.1 1 2.7-1.7 4 .5 1.4 2.4-3.6 2.7-8.7-.1-10.1-5.6-2.2-8.9 6.8-15.5 11.5-8.3zm-35 6.7c-.4 12-2.3 12.4-2.3.5 0-9.2.1-10 1.6-10 .6 0 .9 3.8.7 9.5z" />
      <path d="M142.5 211.6c-2.1 2.1-1.7 2.4 2.5 1.5 3.4-.7 3.4-.8 1.3-1.9-1.8-1-2.5-.9-3.8.4z" />
    </svg>
  );
}

export default Logo;