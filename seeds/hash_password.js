const bcrypt = require('bcrypt');

const passwordInput = process.argv[2];
// if (!passwordInput) {
//   console.log("Must provide a password string or stringified array of passwords as third argument.")
//   return;
// }

// Copy an array of passwords here if you don't want to pass a stringified version as an argument
let passwordArray = ["billy123","tammy123","freddy123"];

async function hashSinglePassword(passwordStr) {
  const hashedPassword = await bcrypt.hash(passwordStr, 12);
  
  const compareSuccess = await bcrypt.compare(passwordStr, hashedPassword);
  
  if (compareSuccess) {
    console.log("Password successfully hashed")
    console.log(hashedPassword);
  } else {
    console.log("Something went wrong, hashed password does not compare successfully with provided password");
    return;
  };
}

async function hashPasswordArray(passwordArr) {
  console.log("Input Password : Hashed Output");
  console.log("------------------------------");

  for (const [index, password] of passwordArr.entries()) {
    try {
      const hashedPassword = await bcrypt.hash(password, 12);
  
      console.log(password + " : " + hashedPassword);
    } catch(err) {
      console.log(err);
      console.log("An error occurred while hashing one of your passwords, please check the format of the password at index " + index)
      return;
    }
  };
}

async function checkInput() {
    if ( passwordArray.length > 0 ) { return hashPasswordArray(passwordArray) }
  // If string starts with a [ and ends with a ], try to parse as array
  if (passwordInput.charAt(0) === "[" && passwordInput.charAt(passwordInput.length - 1) === "]") {
    try {
      passwordArray = JSON.parse(passwordInput);
    } catch(err) {
      console.log(err);
      console.log("Attempt to parse input as array unsuccessful. Please check array formatting.")
      return;
    }
  }

  // If passwordArray has contents, hash those instead of passwordInput
  passwordArray.length > 0 ?
    hashPasswordArray(passwordArray)
  : hashSinglePassword(passwordInput);
};

checkInput();