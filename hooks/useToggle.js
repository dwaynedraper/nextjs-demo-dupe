import { useCallback, useState } from "react";

/**
 * useToggle is a custom hook that returns a boolean value and a function to toggle the value.
 * @param initialValue The initial value of the boolean.
 * @returns [boolean, () => void] - The first value is the boolean value, the second value is a function to toggle the boolean value.
 *
 * Example:
 * const [isDarkTheme, toggleDarkTheme] = useToggle(false);
 *
 */
export function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => setValue((value) => !value), []);
  return [value, toggle];
}
