import Blogs from "../Blogs/Blogs";
import BookMarks from "../BookMarks/BookMarks";

const MainContainer = () => {
    return (
        <div className="flex justify-between">
            <Blogs className="w-2/3"></Blogs>
            <BookMarks className="w-1/3"></BookMarks>
        </div>
    );
};

export default MainContainer;