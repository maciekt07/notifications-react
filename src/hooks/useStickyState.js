import { useState, useEffect } from "react";

/**
A custom React hook that returns a stateful value and a function to update it, and persists the value in localStorage.
@param {any} defaultValue - The default value for the state.
@param {string} key - The key under which the value will be stored in localStorage.
@returns {[any, function]} - A tuple containing the current state value and a function to update it.
@example const [count, setCount] = useStickyState("count", 1)
*/
export function useStickyState(defaultValue, key) {
  const [value, setValue] = useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}
