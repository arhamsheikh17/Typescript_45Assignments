// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestList = ["Noushad Alam", "hammad babar", "Musab bin mohiuddin"];
guestList.forEach(function (person) {
    console.log("Dear " + person + ",\nYou are cordially invited to dinner. We would be honored to have your presence.\nSincerely,\nArham\n");
});
