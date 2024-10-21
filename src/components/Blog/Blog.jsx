import PropTypes from 'prop-types';
import { CiBookmarkRemove } from "react-icons/ci";

const Blog = ({ blog }) => {
    const { cover_img, author_img, author_name, published_date, reading_time, title, hashtags } = blog
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
                    <CiBookmarkRemove className='text-2xl text-green-500 cursor-pointer'></CiBookmarkRemove>
                </div>
            </div>
            <h2 className='text-3xl font-semibold'>{title}</h2>
            <p className='text-gray-500 flex gap-6'>
                {
                    hashtags.map((hash, i) => <p key={i}>{hash}</p>)
                }
            </p>
            <a className='text-blue-600 underline' href="">Mark As Read</a>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.array.isRequired
}
export default Blog;