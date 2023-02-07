import "./App.css";
import React, { useState } from "react";

export default function App() {
  const [food, setFood] = useState([
    "Biriani",
    "Beef curry",
    "Mutton curry",
    "Hilsha Fish",
    "Koi fish",
  ]);

  //    button এ onclick এর মাদ্ধমে যে function কল করেছি সে function এর paramiter হিসাবে টার্গেটেড এলিমেন্ট কে পাঠাচ্ছি।

  // উপরের function এ সেটাকে রিসিভ করছি।  একই function এর ভিতরে filter মেথড এর মাদ্ধমে সবগুলো এলিমেন্ট এ প্রবেশ করছি।

  // এবার ক্লিক করা এলিমেন্ট বাদে (!== elem ) array এর বাকি আলেমেন্টগুলো  জমা হবে  variable এর মধ্যে।

  // এবার সেই নিউ লিস্ট কে setFood(useState ) এর মাদ্ধমে পাঠিয়ে দিচ্ছি  নতুন লিস্ট হিসাবে।

  // অর্থাৎ এবার ক্লিক করলে ক্লিক করে এলিমেন্ট বাদে বাকি এলিমেন্ট গুলো রয়ে যাবে

  const removeIteam = (elem) => {
    const accessToAllArryElements = food.filter(
      (allElemFromArray) => allElemFromArray !== elem
    );
    setFood(accessToAllArryElements);
  };

  return (
    <div>
      <h1>List of my favourite food</h1>
      {food.map((elem, index) => (
        <div key={index}>
          <h4>
            {elem} {<button onClick={() => removeIteam(elem)}>Delete</button>}
          </h4>
        </div>
      ))}
    </div>
  );
}
