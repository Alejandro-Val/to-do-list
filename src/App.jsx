import { useEffect, useState } from "react"
import Filters from "./components/Filters"
import Input from "./components/Input"
import TaskList from "./components/TaskList"

function App() {
    const [tasks, setTasks] = useState([])
    const [activeFilter, setActiveFilter] = useState("all")
    const [filteredTasks, setFilteredTasks] = useState(tasks)

  const addTask = (title) => {
      const lastId = tasks.length > 0 ? tasks[tasks.length - 1].id : 1

      const newTask = {
          id: lastId + 1,
          title,
          completed: false
      }

      const tasksList = [...tasks]
      tasksList.push(newTask)
      setTasks(tasksList)
  }

  const hanldeSetCompleted = (id) => {
    const updatedList = tasks.map(task => {
      if(task.id === id){
        return {...task, completed: !task.completed}
      }
      return task
    })

    setTasks(updatedList)
  }

  const handleClearTask = (id) => {
    const updatedList = tasks.filter(task => task.id !== id)
    setTasks(updatedList)
  }

  const showAllTasks = () => {
    setActiveFilter("all")
  }

  const showActiveTasks = () => {
    setActiveFilter("active")
  }

  const showCompletedTasks = () => {
    setActiveFilter("completed")
  }

  const handleClearCompleted = () => {
    const updatedList = tasks.filter(task => !task.completed)
    setTasks(updatedList)
  }
  
  useEffect(() => {
    if(activeFilter === "all"){
      setFilteredTasks(tasks)
    }else if(activeFilter === "active"){
      const activeTasks = tasks.filter(task => task.completed === false)
      setFilteredTasks(activeTasks)
    } else if(activeFilter === "completed"){
      const completedTasks = tasks.filter(task => task.completed)
      setFilteredTasks(completedTasks)
    }

  }, [activeFilter, tasks])

  return (
    <div className="bg-gray-900 min-h-screen h-full text-white flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-sm items-center">
        <h1 className="text-3xl font-bold">
          To-Do List
        </h1>
        <Input addTask={addTask} />
        <TaskList
          tasks={filteredTasks}
          hanldeSetCompleted={hanldeSetCompleted}
          handleClearTask={handleClearTask}
        />
        <Filters
          activeFilter={activeFilter}
          total={tasks.length}
          showAllTasks={showAllTasks}
          showActiveTasks={showActiveTasks}
          showCompletedTasks={showCompletedTasks}
          handleClearCompleted={handleClearCompleted}
        />
      </div>
    </div>
  )
}

export default App
