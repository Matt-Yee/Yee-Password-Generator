const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener('click', writePassword);

function writePassword() {

  function generatePassword(length, lowercase, uppercase, numbers, symbols) {
    let allowedChars = "";
    if (lowercase) allowedChars += "abcdefghijklmnopqrstuvwxyz";
    if (uppercase) allowedChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbers) allowedChars += "0123456789";
    if (symbols) allowedChars += "~!@#$%^&*())_+,./;";

    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars[randomIndex];
    }
    return password;
  }

  let length; 
  do {
    const lengthInput = prompt('Enter a password length between 8 and 126:');
    length = parseInt(lengthInput);

    if (length < 8 || length > 126 || isNaN(length)) {
      alert('Please enter a valid password length between 8 and 126.');
    }
  } while (length < 8 || length > 126 || isNaN(length));

  const lowercaseInput = prompt('Allow lowercase? (yes or no):');
  const uppercaseInput = prompt('Allow uppercase? (yes or no):');
  const numbersInput = prompt('Allow numbers? (yes or no):');
  const symbolsInput = prompt('Allow symbols? (yes or no):');

  const lowercase = lowercaseInput.toLowerCase() === 'yes';
  const uppercase = uppercaseInput.toLowerCase() === 'yes';
  const numbers = numbersInput.toLowerCase() === 'yes';
  const symbols = symbolsInput.toLowerCase() === 'yes';

  console.log('Password Length:', length);
  console.log('Lowercase:', lowercase);
  console.log('Uppercase:', uppercase);
  console.log('Numbers:', numbers);
  console.log('Symbols:', symbols);

  const password = generatePassword(length, lowercase, uppercase, numbers, symbols);
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
};