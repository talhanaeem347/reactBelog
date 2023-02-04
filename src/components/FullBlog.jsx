const fullBlog = ({ blog }) => {

    return (
        <section className="h-screen">
            <div className=" border border-black h-full">
                <div className="flex relative h-full">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1495216875107-c6c043eb703f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJhY2slMjBncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" />
                    <div className="px-8 py-10 relative  w-full  flex flex-col justify-center items-center ">
                        <div className="h-screen  ">
                            <div className="h-40 w-full">
                                <img src={blog.image} alt="image" className="object-cover object-center h-40 w-screen" />
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
                    </div>
                </div>
            </div>
        </section >
    );
}
export default fullBlog;