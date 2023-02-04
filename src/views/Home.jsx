const Home = () => {

    return (
        <section>
            <section className="h-screen w-full flex flex-col items-center justify-center bg-[url('https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80')]">
                <h1 className="text-4xl font-bold text-gray-800 ">Welcome to Blogs</h1>
                <div className=" flex flex-col text-gray-300">
                    <h1 className="text-4xl font-bold my-4">Create your own story</h1>
                    {/* <h1 className="text-4xl font-bold my-4">Write What you Like</h1>
            <h1 className="text-4xl font-bold my-4">Write What you Love</h1> */}
                </div>
                <div className="flex justify-around w-2/3 text-white text-xl">
                    <button className="hover:border-b-4 px-2 py-1 mt-4">Create Blog</button>
                    <button className="hover:border-b-4 px-2 py-1 mt-4">View Blog</button>
                </div>
            </section>
            <section className="h-screen">
                <div className=" border border-black h-full">
                    <div className="flex relative h-full">
                        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://thedispatch.blob.core.windows.net/thedispatchimages/2022/04/1913623.jpeg" />
                        <div className="px-8 py-10 relative  w-full  flex flex-col justify-center items-center ">
                            <div className="h-1/3    ">
                                <h1 className="text-4xl font-bold text-gray-200 ">About Natural Beauty</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="h-screen">
                <div className=" border border-black h-full">
                    <div className="flex relative h-full">
                        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://i.pinimg.com/originals/53/f1/25/53f1252470d9f90a08d36dbd74217574.jpg" />
                        <div className="px-8 py-10 relative  w-full  flex flex-col justify-center items-center ">
                            <div className="h-1/3    ">
                                <h1 className="text-4xl font-bold text-gray-200 ">About Tecnology</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="h-screen">
                <div className=" border border-black h-full">
                    <div className="flex relative h-full">
                        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqXHdUTK2lcwCE6KhT18VdnkGllfyNRb8YQ&usqp=CAU" />
                        <div className="px-8 py-10 relative  w-full  flex flex-col justify-center items-center ">
                            <div className="h-1/3 flex flex-col items-center   ">
                                <h1 className="text-4xl font-bold text-gray-700 my-4 ">About Anything You</h1>
                                <h1 className="text-4xl font-bold text-gray-700 my-4"> Love, Like & Want to Share</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="h-screen w-full border-4 flex flex-col items-center justify-center px-8 ">
            <div className="h-1/3 w-full flex justify-center items-center  bg-[url('https://t4.ftcdn.net/jpg/04/41/59/09/360_F_441590967_3RrToA4APjnNIUFXTgm8YzAsb2TsoXbo.jpg')] bg-no-repeat ">
            <h1 className="text-4xl font-bold text-teal-400 my-4">About Tecnology</h1>
            <h1 className="text-4xl font-bold text-gray-400 my-4">Write What you Like</h1>
            <h1 className="text-4xl font-bold text-gray-400 my-4">Write What you Love</h1>
            </div>
            <div className="h-1/3 flex flex-col bg-[url('https://www.ox.ac.uk/sites/files/oxford/field/field_image_main/shutterstock_633332597%20%281%29.jpg')] ">
            <h1 className="text-4xl font-bold text-teal-400 my-4">Write about Nature</h1>
            <h1 className="text-4xl font-bold text-gray-400 my-4">Write What you Like</h1>
            <h1 className="text-4xl font-bold text-gray-400 my-4">Write What you Love</h1>
            </div>
        </section> */}
            {/* <section className="h-screen w-full flex flex-col items-center justify-center bg-[url('https://png.pngtree.com/background/20210714/original/pngtree-beautiful-cityscape-with-night-view-at-sunset-background-picture-image_1207012.jpg')] bg-no-repeat">
            <div className="h-2/3 flex flex-col ">
            <h1 className="text-4xl font-bold text-gray-400 my-4">Write What you think</h1>
            <h1 className="text-4xl font-bold text-gray-400 my-4">Write What you Like</h1>
            <h1 className="text-4xl font-bold text-gray-400 my-4">Write What you Love</h1>
            </div>
        </section> */}

        </section>
    );
}
export default Home;