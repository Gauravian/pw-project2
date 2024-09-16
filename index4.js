/*
4. Filtering and Capitalizing: Books Published After 2010 with Author Names.
Write a program that takes a list of books, including their authors and publication years as input. The program
should then filter out all books that were published before 2010 and create a new array with the remaining
books, but with their author names capitalized.

*/

let books = [
    { title: "The Hunger Games", author: "Suzanne Collins", year: 2008 },
    { title: "The Fault in Our Stars", author: "John Green", year: 2012 },
    { title: "The Girl on the Train", author: "Paula Hawkins", year: 2015 },
    { title: "Gone Girl", author: "Gillian Flynn", year: 2012 },
    { title: "Twilight", author: "Stephenie Meyer", year: 2005 }
];

// Function to capitalize author names
function capitalizeAuthorName(name) {
    return name.toUpperCase();
}

let recentBooks = books
    .filter(book => book.year >= 2010) // Filter books published after 2010
    .map(book => ({ ...book, author: capitalizeAuthorName(book.author) })); // Capitalize author names

console.log(recentBooks);

