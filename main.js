// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს string ტიპის მნიშვნელობას
// (წინადადებას), მასში ყოველ სიტყვას
// გადაწერს დიდი ასოთი და დააბრუნებს
// ახალ წინადადებას

function stringFunc(string) {
  const myString = string.split(" ");
  const mapMyString = myString.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  const newString = mapMyString.join(" ");
  return newString;
}

const firstString = "i capitalized all the words in my sentence";
const secondString = stringFunc(firstString);
console.log(secondString);

// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს მომხმარებლების მასივს და
// დააბრუნებს დალაგებულ მასივს
// მომხმარებლების ასაკის ზრდადობის
// მიხედვით
// ● მაგალითად, ჩავთვალოთ, რომ გვაქვს
// [{name: ‘Lasha’, age: 30}, {name: ‘Saba’, age:
// 20}]. ფუნქციამ უნდა დააბრუნოს [{name:
// ‘Saba’, age: 20}, {name: ‘Lasha’, age: 30}]
// ● შეგიძლია გამოიყენო sort() ფუნქცია

const users = [
  { name: "Lasha", age: 30 },
  { name: "Saba", age: 20 },
];
function sortUser(users) {
  return users.sort((a, b) => a.age - b.age);
}

const sortedUsers = sortUser(users);
console.log(sortedUsers);

// დაწერე ფუნქცია, რომელიც მიიღებს სამ
// პარამეტრს (string, valueToReplace,
// valueToReplaceWith), ჩაანაცვლებს
// "valueToReplace"-ს "valueToReplaceWith"
// მნიშვნელობით და დააბრუნებს ახალ stringს

function func(string, valueToReplace, valueToReplaceWith) {
  let mystring = "";
  let i = 0;
  while (i < string.length) {
    if (string.substring(i, i + valueToReplace.length) === valueToReplace) {
      mystring += valueToReplaceWith;
      i += valueToReplace.length;
    } else {
      mystring += string[i];
      i++;
    }
  }

  return mystring;
}

const string = "my name is dato";
const valueToReplace = "dato";
const valueToReplaceWith = "misho";

const mystring = func(string, valueToReplace, valueToReplaceWith);
console.log(mystring);
