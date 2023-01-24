import { useState } from "react";
import { useToggle } from "@/hooks/useToggle";

/**
 * useformState captures the state of a controlled component and updates the state.
 * NOTE: This only works for flat objects. Nested objects have not been implemented.
 * @param initialState An object that represents the initial state of the form.
 * @returns [object, (event: React.ChangeEvent<HTMLInputElement>) => void] - The first value is the state of the form, the second value is a function to update the state of the form.
 *
 * Example:
 * const [formState, handleChange] = useFormState({ name: "", email: "" , address: ""});
 *
 */
export function useFormState(initialState) {
  const [formState, setFormState] = useState(initialState);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return [formState, handleChange];
}
