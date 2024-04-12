import { useEffect, useRef } from 'react';

const RandomLetter = () => {
    const ref = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
      const canvas = ref.current;
      const context = canvas?.getContext('2d');
  
      if (!context || !canvas) {
        return;
      }
  
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
  
      handleResize(); 
  
      window.addEventListener('resize', handleResize);
  
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const nums = '0123456789';
  
      const alphabet = letters + nums;
  
      const fontSize = 16;
      const columns = canvas.width / fontSize;
  
      const rainDrops: number[] = Array.from({ length: columns }, () => 1);
  
      const draw = () => {
        context.fillStyle = 'rgba(55, 55, 55, 0.05)';
        context.fillRect(0, 0, canvas.width, canvas.height);
  
        context.fillStyle = '#ffffff8a';
        context.font = fontSize + 'px sans-serif';
  
        for (let i = 0; i < rainDrops.length; i++) {
          const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
          context.fillText(text, i * fontSize, rainDrops[i] * fontSize);
  
          if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
          }
          rainDrops[i]++;
        }
      };
  
      const intervalId = setInterval(draw, 60);
  
      return () => {
        window.removeEventListener('resize', handleResize);
        clearInterval(intervalId);
      };
    }, []);
  
    return <canvas ref={ref} className='absolute w-full h-full z-0 hidden sm:block' />;
  };
  
  export default RandomLetter;