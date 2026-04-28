// ASSIGNMENT 21-40

// 1. Write a program that takes two user inputs for first and  last name using prompt and 
// merge them in a new variable titled fullName. Greet the user using his full name.

// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = `${firstName} ${lastName}`;
// alert(`Hello ${fullName}!`);

// /////////////////////////////////////////////

// var fullName = `${firstName} ${lastName}`;
// ${} ke andar variables likhte hain
// "Ahmed" + "Raza" → "Ahmed Raza"

// Agar tum $ use karo, to:
// ✔ Backticks ` ` zaroor use karo
// `Hello ${name}` ✅
// ❌ Quotes " " ya ' ' ke sath ${} kaam nahi karega
// "Hello ${name}" ❌


////////// ________________________________________________________________________ //////////


// 2. Write a program to take a user input about his favorite mobile phone model. 
// Find and display the length of user input in your browser

// var mobileNum = prompt("Enter your mobile number");
// var length = mobileNum.length;
// alert("Your mobile number is: " + mobileNum);
// alert("Length of string: " + length);
// console.log("Your mobile number is: " + mobileNum);
// console.log("Length of string: " + length);

////////// ________________________________________________________________________ //////////


// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// var word = "Pakistani";
// var index = word.indexOf("n");
// alert("Index of 'n': " + index);
// console.log("Index of 'n': " + index);


////////// ________________________________________________________________________ //////////


// 4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser.

// var word = "Hello World";
// var lastIndex = word.lastIndexOf("l");
// alert("Last index of 'l': " + lastIndex);
// console.log("Last index of 'l': " + lastIndex);

////////// ________________________________________________________________________ //////////

// Write a program to find the second letter “l” in the
//  word “Hello World” and display the result in your browser.

// var word = "Hello World";
// var firstIndex = word.indexOf("l");        
// var secondIndex = word.indexOf("l", firstIndex + 1);  
// alert("Second index of 'l': " + secondIndex);
// console.log("Second index of 'l': " + secondIndex);


////////// ________________________________________________________________________ //////////

// Write a program to find the all letter “l” in the 
// word “Hello World” and display the result in your browser.

// var word = "Hello World";
// var indexes = [];
// for (var i = 0; i < word.length; i++) {
//     if (word[i] === "l") {
//         indexes.push(i);    }   }
// alert("Indexes of 'l': " + indexes);
// console.log("Indexes of 'l': " + indexes);

// ////////////////////////////////////////////

// String with index
// H  e  l  l  o     W  o  r  l  d
// 0  1  2  3  4  5  6  7  8  9 10

// "l" ke indexes:
// 2, 3, 9

// for (var i = 0; i < word.length; i++)
// Har character check hota hai

// if (word[i] === "l")
// Agar character "l" ho → uska index save karo

// indexes.push(i);
// 👉 Array mein sab indexes store ho jate hain

// alert("Indexes of 'l': " + indexes);
// Result: Indexes of 'l': 2,3,9

////////// ________________________________________________________________________ //////////

// // Write a program to find the all letter “l” in the 
// // word “Hello World” and display the result in your browser.

// var word = "Hello World";
// var indexes = [];
// var index = word.indexOf("l");
// while (index !== -1) {
//     indexes.push(index);
//     index = word.indexOf("l", index + 1);   }
// alert(indexes);
// console.log(indexes);
// // ////////////////////////////////////////////

// var indexes = [];
// // Ek empty array banaya
// // Ismein hum "l" ke saare indexes store karenge

// var index = word.indexOf("l");
// // Pehla "l" find kiya
// // Result: 2

// while (index !== -1)
// // Loop tab tak chalega jab tak "l" milta rahe
// // -1 ka matlab: letter nahi mila

// indexes.push(index);
// // Har milne wala index array mein store hota hai

// index = word.indexOf("l", index + 1);
// // Next "l" search hota hai
// // Pehle index + 1 se search start hoti hai

// Step	index	action
// // 1	 2	    first "l"
// // 2	 3	    second "l"
// // 3	 9	    third "l"
// // 4	-1	    stop


////////// ________________________________________________________________________ //////////


// 5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser.

// var word = "Pakistani";
// var char = word.charAt(3);
// alert("Character at 3rd index: " + char);
// console.log(char)

////////// ________________________________________________________________________ //////////


// 6. Repeat Q1 using string concat() method.

// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + " " + lastName;
// alert("Hello " + fullName + "!");
// console.log("Hello " + fullName + "!");


////////// ________________________________________________________________________ //////////

// 7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser.

// var city = "Hyderabad"
// var updateCity = city.replace("Hyder","Islam")
// console.log(updateCity)
// alert("After update: " + updateCity);

////////// ________________________________________________________________________ //////////


// // 8. Write a program to replace all “and” in the string with “&”. display the result in your browser. 
// // var message = “Ali and Sami are best friends. They play cricket and football together.”;

// var message = "Ali and Sami are best friends. They play cricket and football together.";

// // Replace all occurrences of "and" with "&"
// var updatedMessage = message.replace(/and/g, "&");

// // Display result in browser console
// console.log(updatedMessage);

// // If you want to show it on webpage:
// document.write(updatedMessage);

// /////////////////////////////////////////////////////////////////////////

// replace() is used to replace text in a string.
// /and/g is a regular expression:
// and → the word to find
// g → global flag (means replace all occurrences, not just first one)
// & is the replacement text.

////////// ________________________________________________________________________ //////////

// 9. Write a program that converts a string “472” to a number 472. 
// Display the values & types in your browser.

// var a ="472"
// console.log(typeof a)

// // update current variable
// var a = Number(a)

// // update new variable
// var b = Number(a)
// console.log(a)
// console.log(typeof a)
// console.log(b)
// console.log(typeof b)

////////// ________________________________________________________________________ //////////


// 10. Write a program that takes user input. Convert and show the input in capital letters.

// // Take input from user
// var userInput = prompt("Enter any text:");

// // Convert to uppercase
// var result = userInput.toUpperCase();

// // Display result
// document.write("Original Input: " + userInput + "<br>");
// document.write("Uppercase: " + result);


////////// ________________________________________________________________________ //////////


// // 11. Write a program that takes user input. Convert and show the input in title case.

// // Take input from user
// var userInput = prompt("Enter any text:");
// // Convert to Title Case
// var titleCase = userInput
//   .toLowerCase()
//   .split(" ")
//   .map(function(word) {
//     return word.charAt(0).toUpperCase() + word.slice(1);  } )
//   .join(" ");

// // Display result
// document.write("Original Input: " + userInput + "<br>");
// document.write("Title Case: " + titleCase);

// ///////////////////////////////////////////////////////////////

// toLowerCase() → sab letters small kar deta hai
// split(" ") → sentence ko words me todta hai
// map() → har word par apply hota hai
// charAt(0).toUpperCase() → first letter capital
// join(" ") → words ko wapas sentence banata hai

////////// ________________________________________________________________________ //////////


// 12. Write a program that converts the variable num to string. var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36;

// // Convert number to string
// var str = num.toString();

// // Remove dot
// var result = str.replace(".", "");

// // Display in browser
// document.write("Original Number: " + num + "<br>");
// document.write("After removing dot: " + result);

// /////////////////////////////////////////////////////////

// toString() → number ko string me convert karta hai
// replace(".", "") → dot (.) ko remove karta hai

// Agar multiple dots hotay, to regex /\./g use karte

////////// ________________________________________________________________________ //////////


// // 13. Write a program to take user input and store username in a variable. If the username contains any 
// // special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
// // Note: // ASCII code of ! is 33 // ASCII code of , is 44 // ASCII code of . is 46 // ASCII code of @ is 64

// // Take input from user
// var username = prompt("Enter your username:");

// // Flag to track validity
// var isValid = true;

// // Loop through each character
// for (var i = 0; i < username.length; i++) {
//     var charCode = username.charCodeAt(i);

//     // Check ASCII codes:
//     // @ = 64, . = 46, , = 44, ! = 33
//     if (charCode === 64 || charCode === 46 || charCode === 44 || charCode === 33) {
//         isValid = false;
//         break;    } }

// // Display result
// if (isValid) {
//     document.write("Valid Username: " + username);
// } else {
//     alert("Please enter a valid username ( @ . , ! not allowed)");  }

// prompt() → user se input leta hai
// charCodeAt(i) → har character ka ASCII code deta hai
// Codes used:
// // @ → 64  // . → 46  // , → 44  // ! → 33
// Agar in me se koi mil jaye → username invalid

// Input: best@123 → ❌ Invalid
// Input: best123 → ✅ Valid

////////// ________________________________________________________________________ //////////

// // 13. Write a program to take user input and store username in a variable. If the username contains any 
// // special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
// // Note: // ASCII code of ! is 33 // ASCII code of , is 44 // ASCII code of . is 46 // ASCII code of @ is 64

// // Take input from user
// var username = prompt("Enter your username:");

// // Check for invalid characters
// if (
//     username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
//     alert("Please enter a valid username (no @ . , ! allowed)");
// } else {
//     document.write("Valid Username: " + username);
// }

// ///////////////////////////////////////////////////////////////////////////////////

// includes() check karta hai ke string me koi character maujood hai ya nahi
// Agar @ . , ! me se koi bhi mil jaye → ❌ invalid
// warna → ✅ valid

// 👉 includes() = “kya yeh character is string me hai?”


////////// ________________________________________________________________________ //////////


// 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in anarray. After searching, 
// prompt the user whether the givenitem is found in the list or not.
// Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, 
// program should inform about its availability.

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// // Take input from user
// var userInput = prompt("Welcome! What do you want to order?");

// // Convert input to lowercase for case-insensitive search
// var searchItem = userInput.toLowerCase();

// // Flag to track if item is found
// var found = false;

// // Loop through array
// for (var i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === searchItem) {
//         found = true;
//         break;
//     }
// }

// // Show result
// if (found) { document.write(userInput + " is available in our bakery."); }
// else { document.write("We are sorry. " + userInput + " is not available in our bakery."); }

// //////////////////////////////////////////////////////////////////////////////////////////////////////

// toLowerCase() → case-insensitive banata hai
// loop → array me search karta hai
// comparison → match milne par result show karta hai

////////// ________________________________________________________________________ //////////

// 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in anarray. After searching, 
// prompt the user whether the givenitem is found in the list or not.
// Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, 
// program should inform about its availability.

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// // Take input
// var userInput = prompt("Welcome! What do you want to order?");

// // Convert to lowercase
// var searchItem = userInput.toLowerCase();

// // Check using includes
// if   (A.includes(searchItem)) 
//     {    document.write(userInput + " is available in our bakery.");    } 
//     else {    document.write("We are sorry. " + userInput + " is not available in our bakery.");    }

// ///////////////////////////////////////////////////////////////////////////////////////////////////////

// toLowerCase() → input ko same format me laata hai
// includes() → check karta hai ke item array me hai ya nahi

////////// ________________________________________________________________________ //////////

// 15. Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers// b. It should not start with a number// c. It must at least 6 characters long
// If the password does not meet above requirements, prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

// // Take password input
// var password = prompt("Enter your password:");

// // Validation flags
// var hasLetter = false;
// var hasNumber = false;
// var isValid = true;

// // Rule (c): at least 6 characters
// if (password.length < 6) {    isValid = false;    }

// // Rule (b): should not start with a number
// var firstCharCode = password.charCodeAt(0);
// if (firstCharCode >= 48 && firstCharCode <= 57) {    isValid = false;    }

// // Loop to check alphabets and numbers
// for (var i = 0; i < password.length; i++) {    var code = password.charCodeAt(i);

//     // Check numbers (0-9)
//     if (code >= 48 && code <= 57) {        hasNumber = true;    }
//     // Check uppercase (A-Z)
//     if (code >= 65 && code <= 90) {        hasLetter = true;    }
//     // Check lowercase (a-z)
//     if (code >= 97 && code <= 122) {        hasLetter = true;    }      }

// // Rule (a): must contain alphabets and numbers
// if (!hasLetter || !hasNumber) {    isValid = false;     }

// // Final output
// if (isValid) {    document.write("Valid Password ✔️");} 
//     else {    alert("Invalid Password ❌ Please enter a valid password.");}

///////////////////////////////////////////////////////////////////////////////////////////

// At least 6 characters → password.length >= 6
// ✔ Must NOT start with number → first char check
// ✔ Must contain letters AND numbers → ASCII checking

////////// ________________________________________________________________________ //////////


// 15. Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers// b. It should not start with a number// c. It must at least 6 characters long
// If the password does not meet above requirements, prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

// var password = prompt("Enter your password:");

// // Regex explanation:
// // ^[a-zA-Z]      -> must start with a letter
// // (?=.*[0-9])    -> must contain at least one number
// // (?=.*[a-zA-Z])  -> must contain at least one letter
// // .{6,}           -> minimum 6 characters

// var pattern = /^[a-zA-Z](?=.*[0-9])(?=.*[a-zA-Z]).{5,}$/;

// if (pattern.test(password)) {    document.write("Valid Password ✔️");} 
//     else {    alert("Invalid Password ❌ Please enter a valid password.");    }

// ///////////////////////////////////////////////////////////////////////////////////////
// ^   ^[a-zA-Z]   👉 Matlab: string yahin se start honi chahiye
//      [a-zA-Z]    👉 Matlab: pehla character letter hona chahiye (A-Z ya a-z)

// (?=.*[0-9])     👉 Matlab: password ke andar kam az kam 1 number zaroor ho
//     ✔ "Ali123"     ❌ "AliABC" (number nahi hai)       
//     .* ka matlab: "kisi bhi jagah ho sakta hai"

// (?=.*[a-zA-Z])  👉 Matlab: kam az kam 1 letter zaroor ho

// .{5,}   👉 Matlab: baqi characters total milakar kam az kam 6 hon
// // Breakdown:
// . = koi bhi character
// {5,} = 5 ya zyada (kyun? pehla letter already count ho chuka hai)

// $       👉 Matlab: string yahin end honi chahiye
// // Password must be:
// ✔ Letter se start ho   ✔ Andar letters + numbers hon  ✔ Kam az kam 6 characters ho   ✔ Proper end tak match kare

// “Letter se start + number zaroor + 6 chars minimum”

////////// ________________________________________________________________________ //////////

// 16. Write a program to convert the following string to an array using string split method.
// var university = “University of Karachi”; Display the elements of array in your browser.

// var university = "University of Karachi";

// // Convert string to array (split each character)
// var arr = university.split("");

// // Display each element in browser
// for (var i=0; i < arr.length; i++)
// { document.write(arr[i]+ "<br>");
// console.log(arr[i]);
// alert(arr[i])}

// ////////////////////////////////////////////////////////////////////////

// split("") → string ko har character alag array element bana deta hai
// for loop → array ke har element ko display karta hai
// <br> → next line me show karta hai

// can spilit according to words

// university.split(" ")

// ["University", "of", "Karachi"]

////////// ________________________________________________________________________ //////////

// 17. Write a program to display the last character of a user input.

// // Take input from user
// var userInput = prompt("Enter any text:");

// // Get last character
// var lastChar = userInput.charAt(userInput.length - 1);

// // Display result
// document.write("User Input: " + userInput + "<br>");
// document.write("Last Character: " + lastChar);

// ////////////////////////////////////////////////////////////////////////

// charAt() → returns character at that position
// userInput.length → total characters count
// length - 1 → last index

// Last character = string length - 1 index

////////// ________________________________________________________________________ //////////


// 18. You have a string “The quick brown fox jumps over the lazy dog”. 
// Write a program to count number of occurrences of word “the” in given string

// var text = "The quick brown fox jumps over the lazy dog";

// // Convert string to lowercase for case-insensitive search
// var lowerText = text.toLowerCase();

// // Split string into words
// var words = lowerText.split(" ");

// var count = 0;

// // Count occurrences of "the"
// for (var i = 0; i < words.length; i++) { if (words[i] === "the") { count++; } }

// // Display result
// document.write("Text: " + text + "<br>");
// document.write("Number of occurrences of 'the': " + count);

// console.log("Text: " + text + "<br>")
// ////////////////////////////////////////////////////////////////////////////////////
// Concept:
// toLowerCase() → case-insensitive bana deta hai
// split(" ") → sentence ko words me todta hai
// loop → har word check karta hai
// match mile → counter +1


////////// ________________________________________________________________________ //////////

// 18. You have a string “The quick brown fox jumps over the lazy dog”. 
// Write a program to count number of occurrences of word “the” in given string

// var text = "The quick brown fox jumps over the lazy dog";
// var count = (text.match(/the/gi) || []).length;
// console.log("Number of occurrences of 'the':", count);

// Explanation:
//  * /the/gi
    //  *    the → word to search
    //  *    g → global (all matches)
    //  *    i → case-insensitive (The, THE, the all same)
//  *  match() → matches all occurrences
//  *  || [] → agar match na mile to error na aaye
//  *  .length → total count

////////// ________________________________________________________________________ //////////

// 18. You have a string “The quick brown fox jumps over the lazy dog”. 
// Write a program to count number of occurrences of word “the” in given string


// var text = "The quick brown fox jumps over the lazy dog so the mounth the the the the";
// console.log((text.toLowerCase().split("the").length - 1));

/////////////////////////////////////////////////////////////

// ext.toLowerCase()
//     case-insensitive search ho jati hai
// .split("the")
//      it break the string on the basis of "the"
// String:
//     the quick brown fox jumps over the lazy dog
// After split:
//     ["", " quick brown fox jumps over ", " lazy dog"]
// .length
//     now it count how much array parts
// Example:
// ["", " ... ", " ... "] → length = 3
// Actual "the" ki count nikalne ke liye hum 1 minus karte hain
// Rule:
// Occurrences = splits - 1
// Final Logic:
// "the" count = total splits - 1

// Jab bhi "the" milta hai:

// string toot jati hai
// extra pieces ban jate hain
// isliye splits hamesha count se 1 zyada hotay hain

////////// ________________________________________________________________________ //////////

// ASSIGNMENT 26-30

// // 1. Write a program that takes a positive integer from user & display the following in your browser.
// // a. number

// var num = prompt("Enter a positive number:");
// console.log(num)
// // Convert input to number type
// num = Number(num);
// console.log(num)
// document.write("Number: " + num + "<br>");

// ///////////////////////////////////////////////////////////////

// // b. round off value of the number
// var num = prompt("Enter a positive number:");
// console.log(num)
// // Convert input to number type
// num = Number(num);
// var round = Math.round(num);
// console.log(round);
// document.write("Round off value: " + Math.round(num) + "<br>");
// document.write("Round off value: " + round + "<br>");

// // Math.round()
// //  Nearest integer par round karta hai
// //      4.4 → 4
// //      4.6 → 5

// ////////////////////////////////////////////////////////////////

// // c. floor value of the number
// var num = prompt("Enter a positive number:");
// console.log(num)
// // Convert input to number type
// num = Number(num);
// var floor = Math.floor(num)
// console.log(floor)
// document.write("Floor value: " + Math.floor(num) + "<br>");
// document.write("Round off value: " + floor + "<br>");

// // Math.floor()
// //     Hamesha neeche wali value deta hai
// //         4.9 → 4
// //         4.1 → 4

// ////////////////////////////////////////////////////////////////

// // d. ceil value of the number
// var num = prompt("Enter a positive number:");
// console.log(num)
// // Convert input to number type
// num = Number(num);
// var ceil = Math.floor(num)
// console.log(ceil)
// document.write("Ceil value: " + Math.ceil(num) + "<br>");
// document.write("Ceil value: " + ceil + "<br>");
// // Math.ceil()
// //     Hamesha upar wali value deta hai
// //         4.1 → 5
// //         4.9 → 5

// ////////// ________________________________________________________________________ //////////

// // 2. Write a program that takes a negative floating point number from user & display the following in your browser.
// // a. number

// var num = prompt("Enter a negative floating point number:");
// console.log(num)
// // Convert input to number type
// num = Number(num);
// console.log(num)
// document.write("Number: " + num + "<br>");

// ////////////////////////////////////////////////////////////////

// // b. round off value of the negative floating point number

// var num = prompt("Enter a negative floating point number:");
// console.log(num)
// // Convert input to number type
// num = Number(num);
// var round = Math.round(num);
// console.log(round);
// document.write("Round off value: " + Math.round(num) + "<br>");
// document.write("Round off value: " + round + "<br>");
// // Math.round()
// //     Nearest integer:
// //         -4.4 → -4
// //         -4.6 → -5

// ////////////////////////////////////////////////////////////////

// // c. floor value of the negative floating point number

// var num = prompt("Enter a negative floating point number:");
// console.log(num)
// // Convert input to number type
// num = Number(num);
// var floor = Math.floor(num)
// console.log(floor)
// document.write("Floor value: " + Math.floor(num) + "<br>");
// document.write("Floor value: " + floor + "<br>");
// // Math.floor()
// //     Always down (more negative):
// //         -4.1 → -5
// //         -4.9 → -5

// ////////////////////////////////////////////////////////////////

// // d. ceil value of the negative floating point number

// var num = prompt("Enter a negative floating point number:");
// console.log(num)
// // Convert input to number type
// num = Number(num);
// var ceil = Math.floor(num)
// console.log(ceil)
// document.write("Ceil value: " + Math.ceil(num) + "<br>");
// document.write("Ceil value: " + ceil + "<br>");
// // Math.ceil()
// //     Always up (towards zero):
// //         -4.9 → -4
// //         -4.1 → -4

////////// ________________________________________________________________________ //////////

// // 3. Write a program that displays the absolute value of a number.
// // E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var num = prompt("Enter a number:");

// // Convert input to number
// num = Number(num);

// // Get absolute value
// var result = Math.abs(num);

// // Display result
// document.write("Number: " + num + "<br>");
// document.write("Absolute value: " + result);

// console.log("Number:", num);
// console.log("Absolute value:", result);
// ////////////////////////////////////////////////////////////
// // Math.abs()
//     // Ye function number ka positive version return karta hai
//     // Absolute value = hamesha positive number
//     // Sign (+ / -) ignore kar deta hai

// ////////// ________________________________________________________________________ //////////

// // 4. Write a program that simulates a dice using random() method of JS Math class. 
// // Display the value of dice in your browser.:

// // Generate random number between 1 and 6
// var diceValue = Math.floor(Math.random() * 6) + 1;

// // Display result in browser
// document.write(" Dice Value: " + diceValue);
// console.log(" Dice Value: " + diceValue);
// // ////////////////////////////////////////////////////////////

// // Math.random()
//         Generates a random number between 0 and 1

// // Math.random() * 6
//     Now range becomes:  0 to 5.999...

// // Math.floor()
//     Decimal remove karke integer bana deta hai: 0 to 5

// // + 1
//     Range shift ho jati hai:
//     1 to 6 (like real dice )


// ////////// ________________________________________________________________________ //////////

// // 4. Write a program that simulates a dice using random() method of JS Math class. 
// // Display the value of dice in your browser.:

// // Generate random number between 1 and 6
// var diceValue = Math.ceil(Math.random() * 6) ;

// // Display result in browser
// document.write(" Dice Value: " + diceValue);
// console.log(" Dice Value: " + diceValue);
// // ////////////////////////////////////////////////////////////

// // // Math.random()
// //         Generates a random number between 0 and 1

// // // Math.random() * 6
// //     Now range becomes:  0 to 5.999...

// // // Math.ceil()
// //     Decimal remove karke integer bana deta hai: 1 to 6

// ////////// ________________________________________________________________________ //////////

// // 5. Write a program that simulates a coin toss using random() method of JS Math class. 
// // Display the value of coin in your browser

// // Generate random number (0 or 1)
// var coin = Math.floor(Math.random() * 2);

// // Assign result
// if (coin === 0) {    document.write("🪙 Coin Toss Result: Heads");  } 
//     else {    document.write("🪙 Coin Toss Result: Tails");     }

// if (coin === 0) {    console.log("🪙 Coin Toss Result: Heads");  } 
//     else {    console.log("🪙 Coin Toss Result: Tails");     }

// ////////////////////////////////////////////////////////////

// // Math.random()
//     Random number generates between 0 and 1

// // Math.random() * 2
//     Range becomes:  0 to 1.999...

// // Math.floor()
//     Converts into:  0 or 1

// // Result Mapping:
//     0 → Heads 🪙
//     1 → Tails 🪙

// // Coin Toss Result: Heads    or    Coin Toss Result: Tails

// // Coin formula =
//     Math.floor(Math.random() * 2)
//     0 = Heads, 1 = Tails

// ////////// ________________________________________________________________________ //////////

// // 5. Write a program that simulates a coin toss using random() method of JS Math class. 
// // Display the value of coin in your browser

// // Generate random number (0 or 1)
// var coin = Math.ceil(Math.random() * 2) - 1;

// // Assign result
// if (coin === 0) {    document.write("🪙 Coin Toss Result: Heads");  } 
//     else {    document.write("🪙 Coin Toss Result: Tails");     }

// if (coin === 0) {    console.log("🪙 Coin Toss Result: Heads");  } 
//     else {    console.log("🪙 Coin Toss Result: Tails");     }

// // ////////////////////////////////////////////////////////////
// Math.random() → 0 to 1 (decimal)
// *2 → 0 to 2
// Math.ceil() → 1 ya 2
// -1 → 0 ya 1
//     So final output sahi hai (0 = Heads, 1 = Tails)

// ////////// ________________________________________________________________________ //////////

// // 6. Write a program that shows a random number between 1 and 100 in your browser.

// // Generate random number between 1 and 6
// var score = Math.floor(Math.random() * 100) + 1;

// // Display result in browser
// document.write(" score: " + score);
// console.log(" score: " + score);
// // ////////////////////////////////////////////////////////////

// // // Math.random()
// //         Generates a random number between 0 and 100

// // // Math.random() * 100
// //     Now range becomes:  0 to 99.999...

// // // Math.floor()
// //     Decimal remove karke integer bana deta hai: 0 to 99

// // // + 1
// //     Range shift ho jati hai:
// //     1 to 100 (like real dice )

// ////////// ________________________________________________________________________ //////////

// // 6. Write a program that shows a random number between 1 and 100 in your browser.

// // Generate random number between 1 and 6
// var score = Math.ceil(Math.random() * 100) ;

// // Display result in browser
// document.write(" score: " + score);
// console.log(" score: " + score);
// // ////////////////////////////////////////////////////////////

// // // Math.random()
// //         Generates a random number between 1 and 100

// // // Math.random() * 100
// //     Now range becomes:  1 to 100

// // // Math.ceil()
// //     Decimal remove karke integer bana deta hai: 1 to 100

// ////////// ________________________________________________________________________ //////////

// // 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. 
// // Possible user inputs can be:
// // a. 50
// // b. 50kgs
// // c. 50.2kgs
// // d. 50.2kilograms

// var userInput = prompt("Enter your weight (e.g. 50, 50kgs, 50.2kgs, 50.2kilograms):");

// // Remove all non-numeric and non-dot characters
// var weight = parseFloat(userInput);

// document.write("Your weight is: " + weight + " kg");
// console.log("Your weight is: " + weight + " kg");

// // // ////////////////////////////////////////////////////////////

// // parseFloat():
//     //  *    Yeh automatically:
//     //  *    numbers read karta hai
//     //  *    decimal support karta hai
//     //  *    text ignore kar deta hai

// ////////// ________________________________________________________________________ //////////

// // 8. Write a program that stores a random secret number from 1 to 10 in a variable. 
// // Ask the user to input a number between 1 and 10. 
// // If the user input equals the secret number, congratulate the user.

// // Secret number (1 to 10)
// var secretNumber = Math.floor(Math.random() * 10) + 1;
// console.log(secretNumber)
// // Ask user for input
// var userInput = prompt("Guess a number between 1 and 10:");
// console.log(userInput)
// // Convert input to number
// var userNumber = parseInt(userInput);

// // Check condition
// if (userNumber === secretNumber) {
//     alert("🎉 Congratulations! You guessed it right!");
//     console.log("Correct Guess!");
// } else {
//     alert("❌ Wrong guess! Try again.\nSecret number was: " + secretNumber);
//     console.log("Wrong Guess. Secret was:", secretNumber);
// }
//  // ////////////////////////////////////////////////////////////

// // // Math.floor(Math.random() * 10) + 1;
// //     Generates random number between 1 and 10

// // // parseInt()
// //     Input ko string se number me convert karta hai

// // // Condition:
// //     Match → 🎉 Congratulations
// //     Not match → ❌ Wrong guess

// ////////// ________________________________________________________________________ //////////

// ASSIGNMENT 31-34

// // 1. Write a program that displays current date and time in your browser.

// // Get current date & time
// let now = new Date();

// // Display in console
// console.log("Current Date & Time:", now);
// document.write("Current Date & Time:", now)

// ////////// ________________________________________________________________________ //////////

// // 2. Write a program that alerts the current month in words. For example December.

// // Get current date
// var now = new Date();

// // Get month index (0–11)
// var monthIndex = now.getMonth();

// // Array of month names
// var months = [
//     "January", "February", "March", "April",
//     "May", "June", "July", "August",
//     "September", "October", "November", "December"
// ];

// // Get month name
// var currentMonth = months[monthIndex];

// // Show alert
// document.write("Current Month: " + currentMonth);
// console.log("Current Month: " + currentMonth);
// alert("Current Month: " + currentMonth);

// ////////////////////////////////////////////////////////////////////

// // getMonth()
// //     *   0 = January
// //     *   1 = February
// //     *   11 = December
// //     *   Is liye array use kiya hai convert karne ke liye words me

// ////////// ________________________________________________________________________ //////////

// // 3. Write a program that alerts the first 3 letters of the current day, 
// // for example if today is Sunday then alert will show Sun.

// // Get current date
// var now = new Date();

// // Get month index (0–11)
// var daysIndex = now.getDay();

// // Array of Days names
// var days = [ "Sun","Mon","Tues","Wed","Thurs","Fri","Sat" ];

// // get day name
// var today = days[daysIndex];

// // Show
// document.write("today: " + today);
// console.log("today: " + today);
// alert("today: " + today);

// ////////////////////////////////////////////////////////////////

// // // getday()
// //     *   0 = Sunday
// //     *   1 = Mondayy
// //     *   6 = Saturday
// //     *   Is liye array use kiya hai convert karne ke liye words me

// ////////// ________________________________________________________________________ //////////

// // 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

// // Get current date
// var today = new Date();

// // Get day (0–6)
// var day = today.getDay();

// // 0 = Sunday, 6 = Saturday
// if (day === 0 || day === 6) {  document.write("It's Fun day "); console.log("It's Fun day "); alert("It's Fun day ");  } 
//     else {  document.write("It's a working day "); console.log("It's a working day "); alert("It's a working day "); }

// ////////////////////////////////////////////////////////////////
// // Concept 
//     //  *   getDay()
//         //  *   0 = Sunday
//         //  *   1 = Monday
//         //  *   2 = Tuesday
//         //  *   3 = Wednesday
//         //  *   4 = Thursday
//         //  *   5 = Friday
//         //  *   6 = Saturday

// //  * Logic:
//     //   *    day === 0 → Sunday
//     //   *    day === 6 → Saturday
//     //   *    Dono cases me Fun day

// ////////// ________________________________________________________________________ //////////

// // 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month 
// // else shows “Last days of the month”.

// // Get current date
// var today = new Date();

// // Get day of month (1–31)
// var date = today.getDate();

// // Check condition
// if (date < 16) { console.log("First fifteen days of the month"); 
//     document.write("First fifteen days of the month"); alert("First fifteen days of the month");   }
//      else { console.log("Last fifteen days of the month");
//         document.write("Last fifteen days of the month"); alert("Last fifteen days of the month"); }

// ////////////////////////////////////////////////////////////////
// // Concept samajh lo:
//     //  *    getDate()
//         //  *    Month ka day return karta hai (1 se 31 tak)

// // Logic:
//     //  *    date < 16 → 1–15 → First fifteen days
//     //  *    date >= 16 → 16–31 → Last days

// ////////// ________________________________________________________________________ //////////

// // 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that 
// // hasn't been declared beforehand. Use any variable you like to represent the Date object.

// // Create Date object
// var now = new Date();

// // Get milliseconds since Jan 1, 1970
// millisecondsSince1970 = now.getTime(); // variable NOT declared beforehand

// // Convert milliseconds to minutes
// var minutesSince1970 = millisecondsSince1970 / (1000 * 60);

// // Display result
// console.log("Minutes since Jan 1, 1970:", minutesSince1970);

// // ////////////////////////////////////////////////////////////////
// // Concept samajh lo:
//     // *    getTime()
//     // *    Returns milliseconds since: Jan 1, 1970 (midnight)

// ////////// ________________________________________________________________________ //////////

// // 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that 
// // hasn't been declared beforehand. Use any variable you like to represent the Date object.

// var now = new Date();
// var minutesSince1970 = now.getTime() / (1000 * 60);

// console.log("Minutes since Jan 1, 1970:", minutesSince1970);

// ////////// ________________________________________________________________________ //////////

// // 6. Convert minutes since Jan 1, 1970 to years, moths, days, hours, and seconds

// // Current date
// var now = new Date();

// // Epoch date (Jan 1, 1970)
// var estsblish = new Date(0);

// // Difference in milliseconds
// var diff = now - estsblish;

// // Convert step by step
// var seconds = Math.floor(diff / 1000);
// var minutes = Math.floor(seconds / 60);
// var hours = Math.floor(minutes / 60);
// var days = Math.floor(hours / 24);

// // Approx conversions
// var years = Math.floor(days / 365);
// var months = Math.floor((days % 365) / 30);

// // Remaining values
// var remainingDays = days % 30;
// var remainingHours = hours % 24;
// var remainingMinutes = minutes % 60;
// var remainingSeconds = seconds % 60;

// // Output
// console.log("Years:", years);
// console.log("Months:", months);
// console.log("Days:", remainingDays);
// console.log("Hours:", remainingHours);
// console.log("Minutes:", remainingMinutes);
// console.log("Seconds:", remainingSeconds);

// // ////////////////////////////////////////////////////////////////
// // Important concept:
//     // Months & Years issue:
//         //  *   Har month 30 days ka nahi hota
//         //  *   Leap year (366 days) bhi hota hai
//     // Is liye:
//         //  *   years = days / 365 → approximate
//         //  *   months = days / 30 → approximate

// ////////// ________________________________________________________________________ //////////

// // 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

// // Get current date
// var now = new Date();

// // Get current hour (0–23)
// var hour = now.getHours();

// // Check AM or PM
// if (hour < 12) { document.write("Its AM"); console.log("Its AM"); alert("Its AM");    } 
//     else { document.write("Its PM"); console.log("Its PM");   alert("Its PM");  }

//  ////////////////////////////////////////////////////////////////
// // Concept samajh lo:
//     //  *   getHours()
//         //  *   0 → 12 AM (midnight)
//         //  *   11 → 11 AM
//         //  *   12 → 12 PM (noon)
//         //  *   23 → 11 PM

// // Logic:
//     //  *   hour < 12 → AM
//     //  *   hour >= 12 → PM

// ////////// ________________________________________________________________________ //////////

// // 8. Write a program that creates a Date object for the last day of the last month of 2020 and 
// // assigns it to variable named laterDate.

// // Create Date object for last day of last month of 2020
// var laterDate = new Date(2020, 11, 31);

// // Display result
// console.log(laterDate);

// //  ////////////////////////////////////////////////////////////////

// // Concept :
//     //  *   JavaScript Date months:
//         //  *   Months 0 se start hote hain
//         //  *   0 = January
//         //  *   11 = December

//     //  *   Breakdown:
//         //  *   new Date(2020, 11, 31)

//     //  *   Means:
//         //  *   Year = 2020
//         //  *   Month = December (11)
//         //  *   Day = 31

// ////////// ________________________________________________________________________ //////////

// 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// // Current date
// var today = new Date();

// // 1st Ramadan date (June 18, 2015)
// var Ramadan = new Date("June 18, 2015");

// // Difference in milliseconds
// var diff = today - Ramadan;

// // Convert to days
// var daysPast = Math.floor(diff / (1000 * 60 * 60 * 24));

// // result
// document.write(daysPast + " days have passed since 1st Ramadan (2015)"); 
// console.log(daysPast + " days have passed since 1st Ramadan (2015)"); 
// alert(daysPast + " days have passed since 1st Ramadan (2015)");

  ////////////////////////////////////////////////////////////////

// Concept :
    //  *    Step 1: Dates banaye
        //  *   ramadanStart = fixed date (18 June 2015)
        //  *   today = current date

    // *    Step 2: Difference nikala
        //  *    today - ramadanStart
        //  *    result = millisecon  ds  *    

    // *    Step 3: Convert to days
        //  *   1000 ms = 1 sec  
        //  *   60 sec = 1 min  
        //  *   60 min = 1 hour  
        //  *   24 hours = 1 day 


// ////////// ________________________________________________________________________ //////////

// // 9. Create a date object of the starting date of this Ramadan and get the number of 
// // years, months, days, hours, minutes & seconds past since 1st Ramadan?

// // 1st Ramadan date (June 18, 2015)
// var targetTime = new Date("June 18, 2015");

// // Current date
// var today = new Date();

// // Difference in milliseconds
// var diff = today - targetTime;

// // Convert into time units
// var Year    = Math.floor((diff / (1000 * 60 * 60 * 24 * 365)));
// var months  = Math.floor((diff / (1000 * 60 * 60 * 24 * 30)) % 12);
// var days    = Math.floor((diff / (1000 * 60 * 60 * 24)) % 30);
// var hours   = Math.floor((diff / (1000 * 60 * 60)) % 24);
// var minutes = Math.floor((diff / (1000 * 60)) % 60);
// var seconds = Math.floor((diff / (1000)) % 60);

// // Display result
// console.log("Year:", Year);
// console.log("Months:", months);
// console.log("Days:", days);
// console.log("Hours:", hours);
// console.log("Minutes:", minutes);
// console.log("Seconds:", seconds);

// ////////////////////////////////////////////////////////////////
// // Concept :
//     //  *   Step 1:
//         //  *   
//         // today - targetTime  --->>  gives milliseconds difference

//     //  *   Step 2 conversions:
//         //  *    1000 ms = 1 second
//         //  *    60 sec  = 1 minute
//         //  *    60 min  = 1 hour
//         //  *    24 hours= 1 day
//         //  *    30 day  = 1 month
//         //  *    12 day  = 1 year

// ////////// ________________________________________________________________________ //////////

// // 9. Create a date object of the starting date of this Ramadan and get the number of 
// // years, months, days, hours, minutes & seconds past since 1st Ramadan?
// // Note: 1st Ramadan was on June 18, 2015

// // Start date
// var targetTime = new Date("June 18, 2015");
// // Current date
// var today = new Date();
// // Years
// var years = today.getFullYear() - targetTime.getFullYear();
// // Months
// var months = today.getMonth() - targetTime.getMonth();
// // Days
// var days = today.getDate() - targetTime.getDate();
// // Hours
// var hours = today.getHours() - targetTime.getHours();
// // Minutes
// var minutes = today.getMinutes() - targetTime.getMinutes();
// // seconds
// var seconds = today.getSeconds() - targetTime.getSeconds();


// // Fix negative values
// if (days < 0) {    months--;    days += 30; }

// if (months < 0) {    years--;    months += 12;  }

// // Hours, minutes, seconds (current difference)
// var diff = today - targetTime;

// var hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
// var minutes = Math.floor((diff / (1000 * 60)) % 60);
// var seconds = Math.floor((diff / 1000) % 60);

// // Output
// console.log("Years:", years);
// console.log("Months:", months);
// console.log("Days:", days);
// console.log("Hours:", hours);
// console.log("Minutes:", minutes);
// console.log("Seconds:", seconds);



// ////////// ________________________________________________________________________ //////////

// // 10. Write a program that displays in your browser the seconds that elapsed between the reference date and the 
// // beginning of 2015.

// // Reference date (current date/time)
// var referenceDate = new Date();

// // Start of 2015
// var start2015 = new Date("January 1, 2015");

// // Difference in milliseconds
// var diff = referenceDate - start2015;

// // Convert milliseconds to seconds
// var secondsElapsed = Math.floor(diff / 1000);

// // Display in browser
// document.write("Seconds elapsed since Jan 1, 2015: " + secondsElapsed);

// // ////////////////////////////////////////////////////////////////

// // Concept :
//     //  *   Step 1:
//         //  *   referenceDate - start2015
//         //  *   gives difference in milliseconds

//     //  *   Step 2:
//         //  *   milliseconds / 1000 = seconds

//     //  *   Output example:
//         //  *   Seconds elapsed since Jan 1, 2015: 350000000+

//         //  *   (Exact number current date par depend karega)

// ////////// ________________________________________________________________________ //////////

// // 11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and 
// // finally display the date object in your browser.

// // Create Date object (current date & time)
// var now = new Date();

// // Extract current hours
// var hours = now.getHours();

// // Add 1 hour
// now.setHours(hours + 1);

// // Display updated date object
// console.log("Updated Date & Time:", now);

// // ////////////////////////////////////////////////////////////////
// // Concept :
//     //  *   Step 1:
//         //  *   new Date()
//         //  *   current date & time create karta hai

//     //  *   Step 2:
//         //  *   getHours()
//         //  *   current hour extract karta hai

//     //  *   Step 3:
//         //  *   setHours(hours + 1)
//         //  *   time ko 1 hour ahead move karta hai

//     //  *   Output example:
//         //  *   Mon Apr 27 2026 15:30:00 GMT+0500
//         //  *   (agar pehle 14:30 tha, to +1 hour ho jayega)

// ////////// ________________________________________________________________________ //////////

// 12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

// Create current date object
var now = new Date();

// Copy date and go 100 years back
var pastDate = new Date(now);

// Set year 100 years back
pastDate.setFullYear(now.getFullYear() - 100);

// Show in alert box
alert("Date 100 years back: " + pastDate);

// ////////////////////////////////////////////////////////////////
// Explanation:
    //  *   Step 1:
        //  *   new Date()
        //  *   current date create karta hai

    //  *   Step 2:
        //  *   setFullYear()
        //  *   year ko directly change karta hai

    //  *   Step 3:
        //  *   getFullYear() - 100
        //  *   100 years subtract karta hai

// ////////// ________________________________________________________________________ //////////

// // 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.

// // Ask user for age
// var age = prompt("Enter your age:");

// // Convert input to number
// age = parseInt(age);

// // Get current year
// var currentYear = new Date().getFullYear();

// // Calculate birth year
// var birthYear = currentYear - age;

// // Show result in browser
// document.write("🎂 Your Birth Year is: " + birthYear);
// console.log("Birth Year:", birthYear);


// // ////////////////////////////////////////////////////////////////
// // Concept :
//     //  *   Step 1:
//         //  *   getFullYear()

//         //  *   current year (e.g. 2026)

//     //  *   Step 2:
//         //  *   birthYear = currentYear - age
//         //  *   birth year calculate hota hai

//     //  *   Example:
//         //  *   Agar user age = 20
//         //  *   Output:
//         //  *   Your Birth Year is: 2006

// ////////// ________________________________________________________________________ //////////

// // 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.

// var age = parseInt(prompt("Enter your age:"));

// if (!isNaN(age)) {
//     var birthYear = new Date().getFullYear() - age;
//     document.write("🎂 Your Birth Year is: " + birthYear);
// } else {
//     document.write("❌ Please enter a valid number");
// }

// ////////////////////////////////////////////////////////////////////
// // Concept :
//     //  *   User input:
//         //  *   prompt("Enter your age:")
//         //  *   user se age leta hai

//     //  *   Number conversion:
//         //  *   parseInt(age)
//         //  *   input ko number me convert karta hai

//     //  *   Validation:
//         //  *   !isNaN(age)
//         //  *   check karta hai ke value valid number hai ya nahi

//     //  *   Birth year calculation:
//         //  *   new Date().getFullYear() - age
//         //  *   current year se age minus karke birth year nikalta hai

//     //  *   Example:
//         //  *   Agar user input de: 20
//     //  *   Output:
//         //  *   Your Birth Year is: 2006


// ////////// ________________________________________________________________________ //////////

// // 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.

// var age = parseInt(prompt("Enter your age:"));

// if (!isNaN(age) && age > 0) {
//     var birthYear = new Date().getFullYear() - age;
//     document.write("🎂 Your Birth Year is: " + birthYear);
// } else {
//     document.write("❌ Please enter a valid positive number");
// }

// ////////////////////////////////////////////////////////////////////
// // Explaination
//     //  *   var age = parseInt(prompt("Enter your age:"));
//         //  *    User se age input leta hai
//         //  *    parseInt input ko string say number may convert karta hy

//     //  *    if (!isNaN(age) && age > 0)
//         //  *    Check karta hai:
//         //  *    value number hai ✔
//         //  *    positive hai ✔

//     //  *   var birthYear = new Date().getFullYear() - age;
//         //  *   Current year - age = bir    th year

//     //  *   Example
//         //  *   Input:  20
//         //  *   Output: Your Birth Year is: 2006

// ////////// ________________________________________________________________________ //////////

// // 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.

// var ageInput = prompt("Enter your age:");
// var age = Number(ageInput);

// if (ageInput !== null && ageInput.trim() !== "" && !isNaN(age) && age > 0) {
//     var birthYear = new Date().getFullYear() - age;
//     document.write(`🎂 Your Birth Year is: ${birthYear}`);
// } else {
//     document.write("❌ Please enter a valid positive number");
// }

////////////////////////////////////////////////////////////////////
// Yeh version 👍 clean, robust, aur best practice ke qareeb hai. Tumne:

// Number() use kiya ✔ (strict parsing)
// trim() use kiya ✔ (empty input handle)
// null check ✔
// validation ✔

// Sab sahi direction me hai.

// 🧠 Bas 2 chhoti improvements aur:
// 1️⃣ Integer check (optional but better)

// Agar user 20.5 likhe to kya allow karna hai?

// Agar sirf integer age chahiye:

// Number.isInteger(age)
// 2️⃣ Realistic age range (optional pro touch)
// age > 0 && age < 120

// ////////// ________________________________________________________________________ //////////

// 14. Write a program to generate your K-Electric bill in yourbrowser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

// a. Customer Name
var customerName = "Fayyan Hussain";
// b. Current Month
var month = "April";
// c. Number of units
var units = 235;
// d. Charges per unit
var chargesPerUnit = 55;
// e. Net Amount Payable (within Due Date)
var netAmount = units * chargesPerUnit;
// f. Late Payment Surcharge
var lateSurcharge = 1750;
// g. Gross Amount Payable (after Due Date)
var grossAmount = netAmount + lateSurcharge;
// Display in browser
document.write("<h2>K-Electric Bill</h2>");
document.write("Customer Name: " + customerName + "<br>");
document.write("Month: " + month + "<br>");
document.write("Number of Units: " + units + "<br>");
document.write("Charges per Unit: " + chargesPerUnit.toFixed(2) + "<br><br>");

document.write("Net Amount Payable (within Due Date): " + netAmount.toFixed(2) + "<br>");
document.write("Late Payment Surcharge: " + lateSurcharge.toFixed(2) + "<br>");
document.write("Gross Amount Payable (after Due Date): " + grossAmount.toFixed(2));

/////////////////////////////////////////////////////////////////////////////

Concept samajh lo:
📌 Formula:
Net Amount = units * chargesPerUnit
Gross Amount = netAmount + lateSurcharge
📌 toFixed(2)

👉 decimal ko 2 digits tak round karta hai
Example:

55 → 55.00
12925 → 12925.00
📌 Output Example:
K-Electric Bill

Customer Name: Fayyan Hussain
Month: April
Number of Units: 235
Charges per Unit: 55.00

Net Amount Payable: 6560.00
Late Payment Surcharge: 350.00
Gross Amount Payable: 6910.00


// // ////////// ________________________________________________________________________ //////////
