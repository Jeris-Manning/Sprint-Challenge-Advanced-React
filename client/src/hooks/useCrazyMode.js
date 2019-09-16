import { useLocalStorage } from './useLocalStorage';
import { useState, useEffect } from 'react';

export const useCrazyMode = () => {
  const [crazy, setCrazy] = useLocalStorage('rainbow', false);
  // console.log(setCrazy);
  useEffect(() => {
    (crazy === true)
      ? window.document.body.classList.add('crazy-mode')
      : window.document.body.classList.remove('crazy-mode');
  }, [crazy]);

  return [crazy, setCrazy];
};