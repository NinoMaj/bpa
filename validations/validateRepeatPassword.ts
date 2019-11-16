export const validateRepeatPassword = (password: string) => (
  repeatPassword: string
) => {
  const isRepeatPasswordSameAsPassword = password === repeatPassword;
  const errorMessages: string[] = [];

  if (!isRepeatPasswordSameAsPassword) {
    errorMessages.push(`Passwords don't match.`);
  }
  return {
    isValid: isRepeatPasswordSameAsPassword,
    errorMessages: errorMessages,
  };
};
