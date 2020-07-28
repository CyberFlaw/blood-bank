import React from "react";

export default function Quote() {
  let index = 0;

  const quotes = [
    "Just 1 donation can save up to 3 lives",
    "Whole blood is the most common type of donation",
    "Blood from one donation can be divided into two components: red blood cells and plasma",
    "Donating whole blood takes only about 10-15 minutes",
  ];

  index = Math.floor(Math.random() * 4);

  return (
    <div>
      <p style={{ color: "white", fontSize: 18 }}>{quotes[index]}</p>
    </div>
  );
}
