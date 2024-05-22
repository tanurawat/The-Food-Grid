import { useEffect, useState } from "react";

const User = ({ name, location }) => {
  const [Count] = useState(0);
  const [Count2] = useState(1);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("I am set interval inside useEffect");
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });
  return (
    <div className="user-card">
      <p>Count = {Count}</p>
      <p>Count2 = {Count2}</p>
      <h1>Name: {name}</h1>
      <h2>Location: {location}</h2>
      <h2>Mail: akshay@gmail.com</h2>
    </div>
  );
};

export default User;
