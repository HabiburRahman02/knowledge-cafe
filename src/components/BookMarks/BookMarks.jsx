import PropTypes from "prop-types";
import BookMark from "../BookMark/BookMark";

const BookMarks = ({ bookMarks, readingTime }) => {
    return (
        <div className="bg-gray-100 rounded-2xl p-8">
            <div>
                <h1 className="text-2xl font-semibold mb-4">Reading Time: {readingTime}</h1>
            </div>
            <h1 className="text-2xl font-semibold mb-4">Bookmarks: {bookMarks.length}</h1>
            <div className="space-y-4">
                {
                    bookMarks.map((bookMark, i) => <BookMark
                        key={i}
                        bookMark={bookMark}
                    ></BookMark>)
                }
            </div>
        </div>
    );
};

BookMarks.propTypes = {
    bookMarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
};
export default BookMarks;