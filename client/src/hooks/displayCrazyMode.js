import { useLocalStorage } from './useLocalStorage';
import { useState, useEffect } from 'react';

export const displayCrazyMode = () => {
  const [zaniness, setZaniness] = useLocalStorage('rainbow', false);
  // console.log(setZaniness);
  useEffect(() => {
    (zaniness === true)
      ? window.document.body.classList.add('zany-mode')
      : window.document.body.classList.remove('zany-mode');
  }, [zaniness]);

  return [zaniness, setZaniness];
};