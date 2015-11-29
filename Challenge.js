An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram( "Dermatoglyphics" ) == true
isIsogram( "aba" ) == false
isIsogram( "moOse" ) == false // -- ignore letter case
Start with:

//once the string goes inside test to see if the
//letters are the same
//if letters are the same return false
//

function isIsogram(str){
   if(str.charAt('') === charAt('')){
    for (i=0; i < str.length; i++){
    	 return str.split().charAt();
    }
}else {
	return false
}

console.assert( isIsogram("Dermatoglyphics") );
console.assert( isIsogram("isogram") );
console.assert( isIsogram("aba") === false );
console.assert( isIsogram("moOse") === false );
console.assert( isIsogram("isIsogram") === false );
console.assert( isIsogram("") );