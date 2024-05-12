// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string)
{
	for (i = 0; i < string.length; i++){
        if (string.at(i) == '5') {string = string.replaceAll("5","S")}
        if (string.at(i) == '0') {string = string.replaceAll("0","O")}
        if (string.at(i) == '1') {string = string.replaceAll("1","I")}
    }
    return string
}

console.log(correct("L0ND0N")); //LONDON
console.log(correct("DUBL1N")); //DUBLIN
console.log(correct("51NGAP0RE")); //SINGAPORE
console.log(correct("BUDAPE5T")); //BUDAPEST
console.log(correct("PAR15")); //PARIS