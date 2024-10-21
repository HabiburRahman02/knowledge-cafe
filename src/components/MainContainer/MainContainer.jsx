import { useState } from "react";
import Blogs from "../Blogs/Blogs";
import BookMarks from "../BookMarks/BookMarks";

const MainContainer = () => {
    const [bookMarks, setBookMarks] = useState([]);

    const handleBookMarks = blog => {
        const newBookMarks = [...bookMarks, blog];
        setBookMarks(newBookMarks);
        console.log(blog);
    }

    return (
        <div className="md:flex justify-between gap-6 my-6">
            <div className="md:w-2/3">
                <Blogs handleBookMarks={handleBookMarks}></Blogs>
            </div>
            <div className="md:w-1/3">
                <BookMarks bookMarks={bookMarks}></BookMarks>
            </div>
        </div>
    );
};

export default MainContainer;