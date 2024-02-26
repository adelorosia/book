import Books from "../components/book/Books";
import {  useSelector } from "react-redux";

import { RootState } from "../feature/store";
import Book from "../components/book/Book";

const BookPage = () => {
const {bookId}=useSelector((state:RootState)=>state.books)

    return (
        <div className="container px-5 mt-12">
           {
            bookId?<Book />:<Books />
           }
        </div>
    );
}

export default BookPage;