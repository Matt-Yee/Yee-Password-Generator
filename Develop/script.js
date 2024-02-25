// Assignment Code
let generateBtn = document.querySelector("#generate");

generateBtn.addEventListener('click', () => {
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
});



// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button


