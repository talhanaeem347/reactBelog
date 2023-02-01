const navBar = () => {
    return (
        <section className="fixed h-12 bg-gray-600 w-full flex items-center ">
        <div className="flex justify-between w-full px-4 py-2 border h-full ">
            <div className="text-rad-500 border h-full w-20 flex items-center justify-center  "><h1>Logo</h1></div>
            <nav>
                <a href="#home" className="text-white hover:border-b p-2  m-1 border-  ">Home</a>
                <a href="#blog" className="text-white hover:border-b p-2  m-1 border-  ">Belog</a>
                <a href="#new" className="text-white hover:border-b p-2  m-1 border-   ">New</a>
            </nav>
            <button className="border px-5">contact</button>

        </div>
        </section>
    );
};
export default navBar;