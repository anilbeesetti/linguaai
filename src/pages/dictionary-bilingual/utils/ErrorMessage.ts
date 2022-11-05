export const getErrorMessage = (message: string) => {
  var errorMessage = "";

  if (message.includes("404")) {
    errorMessage =
      "The word you've entered isn't in the dictionary. Try again using the search bar above.";
  } else if (message.includes("4")) {
    errorMessage = "An error occured. Please try again after sometime.";
  } else if (message.includes("5")) {
    errorMessage =
      "An error occured in server. Please try again after sometime.";
  } else {
    errorMessage = message || "Unknown error. Please try agian after sometime.";
  }
  return errorMessage;
};
