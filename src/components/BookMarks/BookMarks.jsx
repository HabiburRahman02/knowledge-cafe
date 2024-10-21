import PropTypes from "prop-types";

const BookMarks = ({ bookMarks }) => {
    return (
        <div>
            <h1 className="text-2xl">Bookmarks: {bookMarks.length}</h1>
        </div>
    );
};

BookMarks.propTypes = {
    bookMarks: PropTypes.array.isRequired
};
export default BookMarks;