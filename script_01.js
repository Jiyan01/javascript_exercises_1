const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


// Output an array that contains only the first and last names of the entrepreneurs
const firstLast = []

entrepreneurs.map(entrepreneurs => firstLast.push(entrepreneurs.first + " " + entrepreneurs.last))
console.log(firstLast);



// const newArray = entrepreneurs.map(function(item) { 
//   delete item.year; 
//   return item; 
// });
// console.log(newArray)


// For each entrepreneur, replace the date of birth with the age of the entrepreneur that he would have today.
const currentYear = new Date().getFullYear()
entrepreneurs.map(entrepreneur => {
  entrepreneur.age = currentYear - entrepreneur.year;
  delete entrepreneur.year
});
console.log(entrepreneurs)


// The first and last keys lack readability, replace them with firstName and lastName
const newArrayOfObj = entrepreneurs.map(
  ({
  first: firstName,
  last: lastName,
  ...rest
}) => ({
  firstName,
  lastName,
  ...rest
}));


console.log(newArrayOfObj);


// Filter in this list entrepreneurs who were born in the 70s only
const age70 = []
entrepreneurs.filter(entrepreneur => 
  { if(entrepreneur.age < currentYear - 1969 && entrepreneur.age > currentYear-1980)
  { age70.push(entrepreneur);
  }})

console.log(age70);