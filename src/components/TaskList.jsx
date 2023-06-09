import Task from "./Task"

function TaskList({tasks, hanldeSetCompleted, handleClearTask}) {
    return (
        <div className="flex flex-col mt-7 rounded-md w-full">
            <Task tasks={tasks} hanldeSetCompleted={hanldeSetCompleted} handleClearTask={handleClearTask} />
        </div>
    )
}

export default TaskList
