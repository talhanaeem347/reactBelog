const ListPreview = ({ blog, deleteBlog, printBlog }) => {

    return (
        <div className="flex p-4 h-full w-full ">
            <div className="bg-white p-6 rounded-lg shadow-lg h-full ">
                <img src={blog.image} alt="Card Image" className="w-full h-32 object-cover rounded-lg" />
                <h3 className="mt-4 text-xl font-bold">{blog.author}</h3>
                <p className="mt-4 text-gray-600 lg:h-32 md:h-24  overflow-hidden ">{blog.blog}</p>
                <div className="flex justify-between items-center">
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400" onClick={()=>printBlog(blog.id)} >Learn More</button>
                    <button className="mt-4 bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-600" onClick={()=>deleteBlog(blog.id)} >X</button>
                </div>
            </div>
        </div>
    )
}
export default ListPreview;