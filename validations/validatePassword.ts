export const validatePassword = (password: string) => {
  const isLengthValid = password.length >= 6;
  const errorMessages: string[] = [];

  if (!isLengthValid) {
    errorMessages.push('Password should have at least 6 characters.');
  }
  return {
    isValid: isLengthValid,
    errorMessages: errorMessages,
  };
};
