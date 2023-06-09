import { useState } from "react"

function Input({addTask}) {
    const [title, setTitle] = useState("")

    const handleAddTask = () => {
        addTask(title)
        setTitle("")
    }

    return (
        <div className="mt-6 flex gap-2">
            <input
                type="text"
                placeholder="Enter task"
                className="px-3 py-1 rounded-md text-gray-600 outline-none"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button className="bg-cyan-600 px-3 py-1 rounded-md" onClick={handleAddTask}>
                Add Task
            </button>
        </div>
    )
}

export default Input