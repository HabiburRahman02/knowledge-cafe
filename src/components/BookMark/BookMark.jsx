/* eslint-disable react/prop-types */

const BookMark = ({ bookMark }) => {
    const { title } = bookMark;
    return (
        <div className="bg-white p-4 rounded-lg">
            <h2 className="text-2xl">{title}</h2>
        </div>
    );
};

export default BookMark;