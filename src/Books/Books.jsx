import { useState } from "react";
import BooksSearch from "./BooksSearch";
import BooksSelect from "./BooksSelect";
import BooksList from "./BooksList";

export default function Books() {
  const booksList = [
    {
      id: crypto.randomUUID(),
      title: "JavaScript and Jquery",
      image: "js.png",
      author: "Jon Duckett",
      price: 250,
      publishyears:2021,
      isFavorite: true,
    },
    {
      id: crypto.randomUUID(),
      title: "Document Object Module",
      image: "dom.jpg",
      author: "Mr.Nabin",
      price: 400,
      publishyears:2023,
      isFavorite: true,
    },
    {
      id: crypto.randomUUID(),
      title: "Bristi Bilas",
      image: "bristy.jpg",
      author: "Humayun Ahmed",
      price: 400,
      publishyears:2000,
      isFavorite: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Bristi Bilas",
      image: "opekha.jpeg",
      author: "Humayun Ahmed",
      price: 550,
      publishyears:1997,
      isFavorite: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Ebar Bhinno Kichu Hok",
      image: "Ebar_Bhinno_Kichu_Hok.jpg",
      author: "Arif Azad",
      price: 600,
      publishyears:2020,
      isFavorite: true,
    },
    {
      id: crypto.randomUUID(),
      title: "Paradoxical Sajid",
      image: "Paradoxical-Sajid-1.jpg",
      author: "Arif Azad",
      price: 800,
      publishyears:2019,
      isFavorite: true,
    },
    {
      id: crypto.randomUUID(),
      title: "Gitanjali",
      image: "gitanjoli.jpg",
      author: "Rabindranath Tagore",
      price: 500,
      publishyears:1910,
      isFavorite: true,
    },
    {
      id: crypto.randomUUID(),
      title: "Chuti",
      image: "Chuti-Rabindranath_Tagore-ecdd1-137348.jpg",
      author: "Rabindranath Tagore",
      price: 400,
      publishyears:1990,
      isFavorite: true,
    },
  ];
  const [booksStore,setBooksStore]=useState(booksList)
  const [sortBy, setSortBy] = useState("");

  //*HandleSearch
  function handleSearch(searchItem){
    console.log("books search",searchItem)
    const filtered = booksStore.filter((book) =>
    book.title.toLowerCase().includes(searchItem.toLowerCase())
);

setBooksStore([...filtered]);
  }

  function handleFavourite(bookid){
    setBooksStore(booksStore.map((book) => {
      if (book.id === bookid) {
          return {...book, isFavorite: !book.isFavorite};
      } else {
          return book;
      }
  }))
  }

  function sortBooks(books, sortBy) {
    const sortedBooks = [...books];
    if (sortBy === "name_asc") {
      sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "name_desc") {
      sortedBooks.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortBy === "year_asc") {
      sortedBooks.sort((a, b) => a.publishyears - b.publishyears);
    } else if (sortBy === "year_desc") {
      sortedBooks.sort((a, b) => b.publishyears - a.publishyears);
    }
    return sortedBooks;
  }
  return (
    <main className="my-10 lg:my-14">
      <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
        <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
          <BooksSearch onSearch={handleSearch}/>
          <BooksSelect sortBy={sortBy} setSortBy={setSortBy}/>
        </div>
      </header>

      <BooksList  booksStore={sortBooks(booksStore, sortBy)} onFav={handleFavourite}/>

    </main>
  );
}
