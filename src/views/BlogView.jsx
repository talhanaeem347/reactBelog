import { useEffect, useState } from "react"
import FullBlog from "../components/FullBlog";
import ListPreview from "../components/ListPreview"
const BlogView = () => {
    const [blogs, setBlogs] = useState([]);
    const [blog, setBlog] = useState(null);
    const [show, setShow] = useState(false);
    const fetchBlogs = async () => {
        const res = await fetch('http://localhost:3000/blogs')
        const data = await res.json()
        setBlogs(data)
    }
    useEffect(() => {
        fetchBlogs();
    }, [])
    const printBlog = (id) => {
        let blog = blogs.find((blog) => blog.id === id)
        setBlog(blog)
        setShow(true)
    }
    const deleteBlog = async (id) => {
        let newBlogs = blogs.filter((blog) => blog.id !== id)
        let res = await fetch('http://localhost:3000/blogs/' + id, {
            method: 'DELETE'
        })
        setBlogs(newBlogs)
    }
    return (
        <div>
            {!blogs.length && <div className="h-screen flex justify-center items-center text-xl font-bold">Loading...</div>}
            <div
                className="flex flex-wrap justify-around border bg-gray-400 text-gray-900 w-full">
                {!show &&
                    blogs.map((blog) =><div key={blog.id} className="lg:w-1/3 md:w-1/3"> <ListPreview  blog={blog}  printBlog={printBlog} deleteBlog={deleteBlog} /></div>)
                }

                {
                    show && <FullBlog blog={blog} />
                }
            </div>
        </div>
    )

}
export default BlogView