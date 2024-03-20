// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list
let guestPeople: string[] = ["Albert Einstein", "Ada Lovelace", "Leonardo da Vinci", "Marie Curie"];

console.log("Good news! We found a bigger dinner table.");

guestPeople.unshift("Isaac Newton"); // Adding to the beginning
guestPeople.splice(Math.floor(guestPeople.length / 2), 0, "Nikola Tesla"); // Adding to the middle
guestPeople.push("Stephen Hawking"); // Adding to the end

guestPeople.forEach(person => {
    console.log("Dear " + person + ",\nYou are cordially invited to dinner. We would be honored to have your presence.\n\nSincerely,\n Arham \n");
});
