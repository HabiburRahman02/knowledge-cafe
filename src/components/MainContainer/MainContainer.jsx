import { useState } from "react";
import Blogs from "../Blogs/Blogs";
import BookMarks from "../BookMarks/BookMarks";

const MainContainer = () => {
    const [bookMarks, setBookMarks] = useState([]);
    const [readingTime, setReadingTime] = useState(0);

    const handleBookMarks = blog => {
        const newBookMarks = [...bookMarks, blog];
        setBookMarks(newBookMarks);
    }

    const handleMarkAsRead = (time, id) => {
        setReadingTime(readingTime + time)
        const remaining = bookMarks.filter(bookMark => bookMark.id !== id);
        setBookMarks(remaining)
    }

    return (
        <div className="md:flex justify-between gap-6 my-6">
            <div className="md:w-2/3">
                <Blogs handleBookMarks={handleBookMarks}
                    handleMarkAsRead={handleMarkAsRead}
                ></Blogs>
            </div>
            <div className="md:w-1/3">
                <BookMarks bookMarks={bookMarks}
                    readingTime={readingTime}
                ></BookMarks>
            </div>
        </div>
    );
};

export default MainContainer;