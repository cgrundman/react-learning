import { useRef } from 'react';

import Input from "./Input.jsx"

export default function NewProjectModal({ onAdd, onCancel }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }

    function handleCancel() {
        onCancel()
    }

    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button 
                        className="text-stone-800 hover:text-stone-950"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                </li>
                <li>
                    <button 
                        className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </li>
            </menu>
            <div>
                <Input type='text' ref={title} label='Title'/>
                <Input ref={description} label='Description' isTextArea/>
                <Input type='date' ref={dueDate} label='Due Date'/>
            </div>
        </div>
    )
}