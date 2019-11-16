import { useState, ChangeEvent } from 'react';

type Validator = (
  input: string
) => { isValid: boolean; errorMessages: string[] };

export const useField = (
  validator: Validator = () => ({ isValid: true, errorMessages: [''] })
) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const { isValid, errorMessages } = validator(e.target.value);
    setIsTouched(true);
    setError(isValid ? '' : errorMessages[0]);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { isValid, errorMessages } = validator(e.target.value);
    setValue(e.target.value as string);
    if (isTouched) {
      setError(isValid ? '' : errorMessages[0]);
    }
  };

  const handleSubmit = () => {
    const { isValid, errorMessages } = validator(value);
    setIsTouched(true);
    setError(isValid ? '' : errorMessages[0]);

    return { isValid, errorMessages };
  };

  return {
    value,
    error,
    isTouched,
    setValue,
    setError,
    setIsTouched,
    handleBlur,
    handleChange,
    handleSubmit,
  };
};
