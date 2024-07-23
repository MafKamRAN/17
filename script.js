function checkVowels() {
  let text = document.getElementById("InputText").value;
  let vowelCount = 0;
  text = text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    let char = text.charAt(i);
    if (isVowel(char)) {
      vowelCount++;
    }
  }
  let result = document.getElementById("result");
  result.textContent = "Total Vowels: " + vowelCount;
}
function isVowel(char) {
  let vowel = ["a", "e", "i", "o", "u"];
  return vowel.includes(char.toLowerCase());
}
