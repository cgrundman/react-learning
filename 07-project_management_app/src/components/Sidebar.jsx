import { useState } from "react";

export default function Sidebar() {
    const [buttonActive, setButtonActive ] = useState(false);

    function handleClick() {
        setButtonActive(!buttonActive)
        console.log(buttonActive)
    }

    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <div>
                <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">+ Add Project</button>
            </div>
            <ul className="mt-8">
                <li><button onClick={handleClick} className="w-full px-4 py-2 text-stone-400 hover:text-stone-200 hover:bg-stone-800">Project 1</button></li>
            </ul>
        </aside>
    );
}