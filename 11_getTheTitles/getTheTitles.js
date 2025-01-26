const getTheTitles = function(books) {

    const mappedBooks = books.map(book => book.title);
    return mappedBooks;

    };

    const books = [
        {
            title: "Book1",
            author: "Secret1"
        },
        {
            title: "Book2",
            author: "Secret2"
        }
    ];

    getTheTitles(books);
    

// Do not edit below this line
module.exports = getTheTitles;
