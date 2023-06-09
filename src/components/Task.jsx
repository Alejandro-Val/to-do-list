function Task({tasks, hanldeSetCompleted, handleClearTask}) {
    return (
        <div>
            {tasks.map((task) => (
                <div key={task.id} className="flex w-full h-10 bg-gray-600 items-center justify-between px-3 py-2 rounded-md mb-1">
                    {
                        task.completed ? 
                            <div onClick={() => hanldeSetCompleted(task.id)} className="bg-green-700 rounded-full p-1 cursor-pointer">
                                <img src="src/icons/CheckIcon.svg" alt="Check Task Icon" className="w-5 h-auto" />
                            </div> :
                            <span onClick={() => hanldeSetCompleted(task.id)} className="border-solid border border-gray-400 rounded-full cursor-pointer p-3"></span>
                    }
                    <p className={`px-3 text-left w-80 ${task.completed && "line-through"}`}>
                        {task.title}
                    </p>
                    <img
                        src="src/icons/CloseIcon.svg"
                        alt="Close Task Icon"
                        className="w-5 h-auto cursor-pointer"
                        onClick={() => handleClearTask(task.id)}
                    />
                </div>
            ))}
        </div>
    )
}

export default Task



