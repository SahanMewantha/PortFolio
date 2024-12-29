"use client";

import React, { useState, useEffect } from "react";

const HackerText = ({ text, interval = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    let currentIndex = 0;

    const randomChar = () => {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
      return chars[Math.floor(Math.random() * chars.length)];
    };

    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prev) =>
          text
            .split("")
            .map((char, idx) =>
              idx <= currentIndex ? text[idx] : randomChar()
            )
            .join("")
        );
        currentIndex++;
      } else {
        setCompleted(true);
        clearInterval(intervalId);
      }
    }, interval);

    return () => clearInterval(intervalId);
  }, [text, interval]);

  return (
    <span className="hacker-text">
      {completed ? text : displayedText}
    </span>
  );
};

export default HackerText;
