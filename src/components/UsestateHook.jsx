import { useState } from "react";
const UsestateHook = () => {
    const [name, setName] = useState("Talha");
    let reName = "";
    const updateName = (newname) => {
        reName = newname;

    };
    return (
        <div className="flex flex-col justify-evenly bg-blue-400  px-4 py-1 border-2 w-full h-full">
            <h1 className="text-lx font-semibold text-center">{name}</h1>
            <input type="text" onChange={(e) => updateName(e.target.value)} placeholder="Enter your name" className="border" />
            <button onClick={() => setName(reName)} className="border bg-gray-200 hover:bg-gray-400">update</button>
        </div>
    );
};
export default UsestateHook;