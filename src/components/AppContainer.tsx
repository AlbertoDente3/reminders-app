import React, { useEffect, useState } from 'react'
import ToDoList from './ToDoList'
import toDo from '../models/toDo'
import ToDoService from '../services/toDo'
import Filter from './Filter'

export default function AppContainer() {
  const [todoList, setTodoList] = useState<toDo[]>([])

  useEffect(() => {
    loadToDoList()
  }, [])

  const loadToDoList = async () => {
    const toDoList = await ToDoService.getToDoList()
    console.log(toDoList)

    setTodoList(toDoList)
  }

  return (
    <div>
      <Filter />
      <ToDoList items={todoList} />
    </div>
  )
}
