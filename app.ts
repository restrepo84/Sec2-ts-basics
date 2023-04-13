// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Steve",
//   age: 30,
//   hobbies: ["Sports", "Cooking", "Basketball"],
//   role: [2, "author"],
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Steve",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
  role: Role.ADMIN,
};

// person.role.push("admin");
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log("is author");
}
