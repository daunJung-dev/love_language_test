import { useState, useCallback } from "react";

export const useInputs = (initialValue) => {
  const [form, setForm] = useState(initialValue);
  const onChange = useCallback(
    (update) => {
      setForm({ ...form, update });
    },
    [form]
  );
  const onReset = useCallback(() => setForm(initialValue), [initialValue]);
  return [form, onChange, onReset];
};
