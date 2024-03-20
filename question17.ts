// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list
let guest_List: string[] = ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Ada Lovelace", "Leonardo da Vinci", "Marie Curie", "Stephen Hawking"];

// Informing about the limited space for dinner
console.log("Unfortunately, the new dinner table won’t arrive in time, and we can only invite two people for dinner.");

// Removing guests from the list until only two names remain
while (guest_List.length > 2) {
    let removedGuest = guest_List.pop();
    console.log("Sorry, " + removedGuest + ", we can't invite you to dinner.");
}

// Printing invitation messages to the two remaining guests
guest_List.forEach(person => {
    console.log("Dear " + person + ",\nYou are still cordially invited to dinner. We would be honored to have your presence.\n\nSincerely,\n[Your Name]");
});

// Removing the last two names from the list
guest_List.pop();
guest_List.pop();

// Printing to make sure the list is empty
console.log("Remaining guests list:", guest_List);
