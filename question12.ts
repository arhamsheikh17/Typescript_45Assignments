// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let greetingstoPerson: string[] = ["Micheal", "franklin", "Travvor", "John", "Shareen"];
let messageWithEach : string = "Welcome to Governor House IT initiative ";
for (let i = 0; i < greetingstoPerson.length; i++) {
    console.log(messageWithEach + greetingstoPerson[i]);
}
