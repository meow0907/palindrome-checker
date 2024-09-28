const check = document.querySelector("#check-btn");
const text = document.querySelector("#text-input");
const rslt = document.querySelector("#result");

check.addEventListener("click", () => {
  const checkInput = () => {
    if (text.value.trim() === "") {
      alert("Please input a value");
    } else {
      checkPalindrome();
    }
  };

  checkInput();
});

const checkPalindrome = () => {
  let inputText = text.value.trim();

  // Remove spaces and convert to lowercase
  let cleanedText = inputText.toLowerCase().replace(/\s+/g, "");

  // Debugging: Log the cleaned text to check its value
  console.log("Cleaned text: ", cleanedText);

  // Reverse the cleaned text
  let reversedText = cleanedText.split("").reverse().join("");

  if (cleanedText === reversedText) {
    rslt.innerHTML = `<p>It's a palindrome!</p>`;
  } else {
    rslt.innerHTML = `<p>It's not a palindrome!</p>`;
  }
};
