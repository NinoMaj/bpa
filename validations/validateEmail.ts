export const validateEmail = (email: string) => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isEmailValid = emailRegex.test(String(email).toLowerCase());
  const errorMessages: string[] = [];

  if (!isEmailValid) {
    errorMessages.push('Please provide valid email address.');
  }
  return {
    isValid: isEmailValid,
    errorMessages: errorMessages,
  };
};
