import { useState, useEffect, useDebugValue } from 'react';

export default function usePersistantState(key, initial) {
  const [state, setState] = useState(getItem(key) || initial);

  useEffect(() => {
    setItem(key, state);
  }, [state]);

  // Show a label in DevTools next to this Hook
  // e.g. "UseCustomHook: {}"
  useDebugValue(state, () => `${state}😅`);
  return [state, setState];
}

const getItem = (key) => JSON.parse(localStorage.getItem(key));
const setItem = (key, state) => localStorage.setItem(key, JSON.stringify(state));
