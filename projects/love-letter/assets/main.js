console.log('hello world')

var SpringBreak = [
'skiing while there was a storm',
'eating pizza',
'hanging out with my family'
];

for ( var i = 0; i < SpringBreak.length; i++ ) {
  console.log( SpringBreak[i] + ' was fun ' );
}

console.log(13 * (3+2) + 1)
console.log(1 * 66)
console.log(132/2)
console.log(34 + 32)
console.log(6 * 11)
console.log(3 * 22)

var groupOne = ['Ana', 'Gaurika', 'Moon'];
var groupTwo = ['Victoria', 'Liz', 'Jissaura'];
var groupThree = ['Kyle', 'Carol', 'Fish'];

var allStudentsHere=[
  'Carol Chong',
  'Gaurika Milan Dalal',
  'Vitoria Feitosa Di Iulio',
  'Nafisa Afrin Iqbal',
  'Moonnyung Jo',
  'Ana Sofia Murillo',
  'Jissaura Taveras Hernandez',
  'Elizabeth Tsai',
  'Kyle Yu',
];

var allStudentsHere = false;

var studentsMissing =['Gyuri Nam'];

var studentsMissing = true;

var arrayOfArrays =[
groupOne,
groupTwo,
groupThree];

for ( var index1 = 0; i < arrayOfArrays.length; i++ ) {
  console.log( 'this group is number ' + (i + 1 ));
  console.log( 'The students in this group are');


  for (var index2 = 0; index2.length <arrayOfArrays[index1]; index2++){
      console.log(arrayOfArrays[index1][index2]);
  }
  }


