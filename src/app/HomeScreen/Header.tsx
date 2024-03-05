"use client"

import { useEffect, useState } from "react";

export default function Header({ words }: any) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentWord = words[currentWordIndex];
      setDisplayedText((prevText) => {
        const nextChar = currentWord[prevText.length];
        return prevText + (nextChar || '');
      });

      if (currentWord.length === displayedText.length) {
        clearInterval(intervalId);
        setTimeout(() => {
          setDisplayedText('');
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000);
      }
    }, 200);

    return () => clearInterval(intervalId);
  }, [currentWordIndex, displayedText, words]);


  return (
    <div className="flex flex-row">
      {displayedText.split('').map((letter, i) => (
        <div key={i} className='animate-letter-fall text-5xl md:text-6xl text-[#fffffff5]'> {letter}</div>
      ))}
    </div>
  )
};