/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleBookMarks, handleMarkAsRead }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div>
            {
                blogs.map((blog) => <Blog
                    key={blog.id}
                    blog={blog}
                    handleBookMarks={handleBookMarks}
                    handleMarkAsRead={handleMarkAsRead}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;