const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Get me the list of CDI book titles
bookList = []
books.map(book => bookList.push(book.title))
console.log(bookList)


// Have all the books been borrowed at least once?
let booksRented = 0
books.map(book => {
  if (book.rented < 1)
  {
    booksRented++
  }
});
if (booksRented === 0)
{
  console.log("les livres ont tous été emprunté au moins une fois !");
} else {
  console.log("les livres n'ont pas tous deja été emprunté !");
}


// What is the most borrowed book?
const pickHighest = arr => {
  const res = {
     title: '',
     rented: -Infinity
  };
  arr.map(el => {
     const { title, rented } = el;
     if(rented > res.rented){
        res.title = title;
        res.rented = rented;
     };
  });
  return res;
};
console.log(pickHighest(books));


// What is the least borrowed book?
function compare( a, b ) {
  if ( a.rented < b.rented ){
    return -1;
  }
  if ( a.rented > b.rented ){
    return 1;
  }
  return 0;
}

console.log("Le livre le moins emprunté : " + books.sort( compare )[0].title);


// Deletes book with ID 133712
const myArray = books.filter(obj => {
  return obj.id !== 133712;
});

console.log(myArray)