import PropTypes from 'prop-types';

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
                <div>
                    sdfg
                </div>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.array.isRequired
}
export default Blog;