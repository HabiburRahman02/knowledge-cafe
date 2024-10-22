import PropTypes from 'prop-types';
import { CiBookmarkRemove } from "react-icons/ci";

const Blog = ({ blog, handleBookMarks, handleMarkAsRead }) => {
    const { id, cover_img, author_img, author_name, published_date, reading_time, title, hashtags } = blog
    return (
        <div className='mb-10 space-y-6'>
            <img className='rounded-2xl w-full h-1/2' src={cover_img} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex gap-6 items-center'>
                    <img className='w-12 h-12 object-cover rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl font-semibold'>{author_name}</h3>
                        <p>{published_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <p>0{reading_time} min read</p>
                    <CiBookmarkRemove
                        onClick={() => handleBookMarks(blog)}
                        className='text-2xl text-green-500 cursor-pointer'></CiBookmarkRemove>
                </div>
            </div>
            <h2 className='text-3xl font-semibold'>{title}</h2>
            <div className='text-gray-500 flex gap-6'>
                {
                    hashtags.map((hash, i) => <p key={i}>{hash}</p>)
                }
            </div>
            <span
                onClick={() => handleMarkAsRead(reading_time, id)}
                className='text-blue-600 underline cursor-pointer' href="">Mark As Read</span>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookMarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}
export default Blog;