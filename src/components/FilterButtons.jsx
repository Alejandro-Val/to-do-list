function FilterButtons({showAllTasks, activeFilter, showActiveTasks, showCompletedTasks}) {
    return (
        <div className="flex gap-2 items-center justify-center">
            <button onClick={() => showAllTasks()} className={`hover:text-white cursor-pointer transition-all ease-in-out duration-300 text-sm ${activeFilter === "all" ? "text-blue-400" : "text-gray-400"}`}>
                All
            </button>
            <button onClick={() => showActiveTasks()} className={`hover:text-white cursor-pointer transition-all ease-in-out duration-300 text-sm ${activeFilter === "active" ? "text-blue-400" : "text-gray-400"}`}>
                Active
            </button>
            <button onClick={() => showCompletedTasks()} className={`hover:text-white cursor-pointer transition-all ease-in-out duration-300 text-sm ${activeFilter === "completed" ? "text-blue-400" : "text-gray-400"}`}>
                Completed
            </button>
        </div>
    )
}

export default FilterButtons
