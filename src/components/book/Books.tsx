import { useDispatch, useSelector } from "react-redux";
import {
  displayAllBooks,
  setBookId,
} from "../../feature/reducers/bookSlice";
import { RootState } from "../../feature/store";

import { NavLink } from "react-router-dom";

const Books = () => {
  const books = useSelector(displayAllBooks);
  const dispatch = useDispatch();

  const { status } = useSelector((state: RootState) => state.books);

  const renderedBooks = () => {
    switch (status) {
      case "loading":
        return <div>Loading</div>;
      case "success":
        return (
          <div className="flex items-center gap-2 flex-wrap">
            {books.map((book, index) => (
              <div key={index} className="w-full  odd:bg-zinc-300 even:bg-zinc-100 rounded-lg overflow-hidden lg:w-2/5">
                <div className="flex items-center gap-2 w-full">
                  <div>
                    <img className="w-24" src={book.cover} alt="" />
                  </div>
                  <div className="flex flex-col gap-2 font-FONT_VIGA text-xl">
                    <p>Name: {book.title}</p>
                    <p>Author: {book.author}</p>
                    <p>
                      Price:{" "}
                      <span className="text-red-600">{book.amount} $</span>
                    </p>
                    <div className="">
                      <NavLink
                        className="text-green-600"
                        to={`/home/${book.title}`}
                      >
                        <button
                          className="text-green-600"
                          onClick={() => dispatch(setBookId(book._id))}
                        >
                          Show More
                        </button>
                      </NavLink>
                    </div>
                    <div className="flex gap-4"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case "failed":
        return <div>Error</div>;
    }
  };
  return <div className="container px-5 my-8">{renderedBooks()}</div>;
};

export default Books;
