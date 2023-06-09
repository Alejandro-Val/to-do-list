import FilterButtons from "./FilterButtons"
import ItemsLeft from "./ItemsLeft"

function Filters({total, handleClearCompleted, showAllTasks, showActiveTasks, showCompletedTasks, activeFilter}) {
    return (
        <div className="w-full px-3 py-2 flex items-center justify-between">
            <ItemsLeft total={total} />
            <FilterButtons
                activeFilter={activeFilter}
                showAllTasks={showAllTasks}
                showActiveTasks={showActiveTasks}
                showCompletedTasks={showCompletedTasks}
            />
            <button onClick={() => handleClearCompleted()} className="text-gray-400  text-sm cursor-pointer hover:text-white transition-all duration-300 ease-in-out">
                Clear completed
            </button>
        </div>
    )
}

export default Filters
