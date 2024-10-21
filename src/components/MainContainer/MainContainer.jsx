import Blogs from "../Blogs/Blogs";
import BookMarks from "../BookMarks/BookMarks";

const MainContainer = () => {
    return (
        <div className="md:flex justify-between gap-6 my-6">
            <div className="md:w-2/3">
                <Blogs ></Blogs>
            </div>
            <div className="md:w-1/3">
                <BookMarks></BookMarks>
            </div>
        </div>
    );
};

export default MainContainer;