const Rename = () => {
    const rename = (name) => {
        alert(`Hello from ${name}`)
    }
    return (
        <div>
            <h1>click button and see </h1>
            <div className="flex">
            <button onClick={()=>rename("Bilal")} className="px-4 py-1 flex border bg-gray-200 m-2 hover:bg-gray-400 ">Bilal</button>
            <button onClick={()=>rename("Talha")} className="px-4 py-1 flex border bg-gray-200 m-2 hover:bg-gray-400 ">Talha</button>
            </div>
        </div>
    )
}
export default Rename;