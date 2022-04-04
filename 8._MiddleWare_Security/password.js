import bcrypt from "bcrypt";
const saltRounds = 12;
const plainttextPassword = "12345"; // it will come from the client. // if I change the password it will be false.
const hashedPassword = "$2b$12$Ap.Q4J5ngP0U3ZyR2WnlDOw1RArmrTt5VEiycYefvLjY8ypzQjO3W"; // has for 12345 password


// async function loginRouter() {
//     const isSame = await bcrypt.compare(plainttextPassword, hashedPassword);
//     console.log(isSame);
// }

// async function signupRouter() {
//     const hasedPassword = await bcrypt.hash(plainttextPassword, saltRounds);
//     console.log(hasedPassword);
// }

const isSame = await bcrypt.compare(plaintextPassword, hashedPassword);
console.log(isSame);


const resultingHashedPassword = await bcrypt.hash(plaintextPassword, saltRounds);
console.log(resultingHashedPassword);

loginRouter();
signupRouter();


console.log(bcrypt);

// combine all this with session in backend????