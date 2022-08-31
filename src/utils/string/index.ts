// Return true if the value provided is a alphanumeric string
export const isAlphaNumeric = (value: string) => {
  let code, i, len;

  for (i = 0, len = value.length; i < len; i++) {
    code = value.charCodeAt(i);
    if (
      !(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123) // lower alpha (a-z)
    ) {
      return false;
    }
  }
  return true;
};

// Return true if the value provided is a alphanumeric string
export const isSingleAlphaNumeric = (value: string) => {
  let code;

  code = value.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return false;
  }

  return true;
};
