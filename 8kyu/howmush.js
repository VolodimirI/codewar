// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"

// function howMuchILoveYou(nbPetals) {
//     let phrase = {    
//       0: "not at all",
//       1: "I love you",
//       2: "a little",
//       3: "a lot",
//       4: "passionately",
//       5: "madly"
//     }
//     return phrase[nbPetals%6]
//   }

function howMuchILoveYou(nbPetals) {
  switch ((nbPetals + 6) % 6) {
    case 1:
      return "I love you";
      break;
    case 2:
      return "a little";
      break;
    case 3:
      return "a lot";
      break;
    case 4:
      return "passionately";
      break;
    case 5:
      return "madly";
      break;
    case 0:
      return "not at all";
      break;

    default:
        return "no numbers";
  }
}
console.log(howMuchILoveYou("[eq]"));
