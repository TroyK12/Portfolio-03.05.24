"use client"
import { useEffect, useState } from "react";

const timeOfDay = () => {
  const currentHour = new Date().getHours();

  if (currentHour >= 0 && currentHour < 12) {
    return 'Good Morning';
  } else if (currentHour >= 12 && currentHour < 18) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }
}

export default function Greeting() {
    const greeting = timeOfDay()
    const [displayedText, setDisplayedText] = useState('');
    const [typingIndex, setTypingIndex] = useState(0);

  
    useEffect(() => {
      if (greeting) {
        const intervalId = setInterval(() => {
          if (typingIndex < greeting.length) {
            setDisplayedText((prevText) => prevText + greeting[typingIndex]);
            setTypingIndex((prevIndex) => prevIndex + 1);
          } else if (displayedText) {
            clearInterval(intervalId);
          }
        }, 250);
  
        return () => clearInterval(intervalId);
      }
    }, [greeting, typingIndex]); 
  
    return (<>{displayedText}</>)
}