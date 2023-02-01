import { useState } from "react";

const ListPreview = () => {
    const [blogs, setBelog] = useState([
        { title: "Welcome", body: "Welcome you to came on my project", author: "Talha", id: 1 },
        { title: "My new website", body: "lorem ipsum...", author: "mario", id: 2 },
        { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 3 },
        { title: "Web dev top tips", body: "lorem ipsum...", author: "mario", id: 4 },
    ]);

    return (
        <div className="flex flex-col justify-around border bg-gray-400 text-white p-4 w-full">
            {
                blogs.map((blog) => {
                    return (
                        <div key={blog.id} className="flex flex-col justify-around">
                            <h2 className="text-xl font-bold italic m-2 text-center">{blog.title}</h2>
                            <p>Written by: {blog.author}</p>
                        </div>
                    );
                })
            }

        </div>
    );
}
export default ListPreview;