const fullBlog = ({blog}) => {

    return (
        <div className="h-screen ">
            <div className="h-40 w-full">
                <img src={blog.image} alt="image" className="object-cover object-center h-40 w-screen"/>
            </div>
            <div className="px-8  ">
                <h1 className="text-3xl font-bold text-gray-800 mt-4">Title Here</h1>
                <p className="text-gray-600 mt-2 ">Author: <span className="font-semibold italic"> {blog.author}</span></p>
                <p className="text-gray-600 mt-2 pl-4">Date: {blog.blog}</p>
            </div>
            <div className="px-8 mt-4 flex justify-between">
                <button className="dorder px-2 border">back</button>
                <button className="dorder px-2 border">create</button>
            </div>
        </div>
    );
}
export default fullBlog;