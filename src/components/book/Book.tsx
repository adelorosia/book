import { NavLink } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";
import { displayBookById } from "../../feature/reducers/bookSlice";

const Book = () => {
  const { bookId } = useSelector((state: RootState) => state.books);
  const book = useSelector((state: RootState) =>
    displayBookById(state, bookId)
  );
  return (

      <div className="flex flex-col lg:flex-row items-center gap-8 w-full">
        <div className="w-1/2">
          <img className="w-72 rounded-lg" src={book.cover} alt="" />
        </div>
        <div className="flex flex-col gap-2 font-FONT_VIGA text-xl ">
          <p>Name: {book.title}</p>
          <p>Author: {book.author}</p>
          <p>
            Price: <span className="text-red-600">{book.amount} $</span>
          </p>
          <p>
            due: <span className="text-green-800">{book.due}</span>
          </p>
          <p>
            description: <span className="text-gray-600">{book.desc}</span>
          </p>
          <div className="flex gap-4">
            <AiOutlineLike />
            <FaRegComment />
          </div>
        </div>
      </div>

  );
};

export default Book;
