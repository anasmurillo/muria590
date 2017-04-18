var stringName = ['ANA SOFIA'] //string name
  console.log( stringName );

var stringNumber = ['308'] //string number
  console.log( stringNumber);

var booleanValue= [true] //boolean value
  console.log( booleanValue  );


var arrayLetters= ['a', 'n', 'a'] //array letters of my name
  console.log( arrayLetters );

var arrayData=['ana', 2 , true] //array 3 different data types
 console.log(arrayData);

var twoStrings=['ANA  ' + 'MURILLO'] //add two strings name
console.log(twoStrings);

var oneH =(30 + 70) //oneHundred
console.log(oneH);


for ( var i = 0; i < arrayLetters.length; i++ ) {
  console.log( arrayLetters[0] + arrayLetters[2] );
}

var allStudentsHere = true;


for ( var i = 0; i < arrayLetters.length; i++ ) {
  console.log( arrayLetters[i]);
}

//Create a conditional statement that checks to see
//if the current time is between 7pm and 9:40pm.

var superword = 'supercalifragilisticexpialidocious'.length;
console.log('superword', superword);


var expression = 'ana'.length == 'murillo'.length;
console.log ('expression is ', expression);

for ( var i = 0; i < arrayLetters.length; i++ ) {
  console.log( arrayLetters[i]);
}

var date = new Date();
var day = date.getDay();
console.log( new Date);

//?8


var Array1 = ['tostadas', 'cookies', 'funghi porcini']
var Array2 = ['dog', 'fish', 'bear']
var Array3 = ['home', 'NYC', 'lugano']
var Array4 = ['pikachu', 'the pink one', 'the fire bird']

var ArrayOfArrays = [Array1, Array2, Array3, Array4]
console.log(ArrayOfArrays);


for ( var i = 0; i < ArrayOfArrays.length; i++ ) {
  console.log( ArrayOfArrays[i]);
}

for ( var firstArrayIndex = 0; firstArrayIndex < ArrayOfArrays.length; firstArrayIndex++ ) {
  console.log( ArrayOfArrays[firstArrayIndex] );

  for ( var secondArrayIndex = 0; secondArrayIndex < ArrayOfArrays[firstArrayIndex].length; secondArrayIndex++ ) {
    console.log( ArrayOfArrays[firstArrayIndex][secondArrayIndex] );
  }
}
