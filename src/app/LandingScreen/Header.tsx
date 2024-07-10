"use client"
import { useEffect, useState } from "react";
import styles from './landing.module.css';

export default function Header({ words }: any) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    setDisplayedText(words[currentWordIndex]);

    const updateText = () => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    };

    const intervalId = setInterval(updateText, 6500);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setDisplayedText(words[currentWordIndex]);
  }, [currentWordIndex]);


  return (
    <h1 key={displayedText} className={`${styles.headerText} text-xl h-[30px] text-[#b8b8b8]`}>{displayedText}</h1>
  )
};

/* 
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
        }, 6000);
      }
    }, 400);

    return () => clearInterval(intervalId);
  }, [currentWordIndex, displayedText, words]);


  return (
    <div className="flex flex-row">
      {displayedText.split('').map((letter, i) => (
        <div key={i} className='text-[#fff]'>{letter === ' ' ? '\u00A0' : letter}</div>
      ))}
    </div>
  )
*/