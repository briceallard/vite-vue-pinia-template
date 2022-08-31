// Return true if the value provided is a valid email address
export const isEmail = (value: string) => {
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(value);
};

// Return true if the value provided is a valid password
export const isPassword = (value: string) => {
  let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(value);
};

// return true if value is a letter or number
export const isAlphaNumeric = (value: string) => {
  let alphaNumericRegex = /^[a-zA-Z0-9]+$/;
  return alphaNumericRegex.test(value);
};
