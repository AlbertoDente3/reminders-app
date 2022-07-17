import React, { useEffect, useState } from 'react'
import ToDoList from './ToDoList'
import toDo from '../models/toDo'
import ToDoService from '../services/toDo'
import Filter from './Filter'
import classes from './AppContainer.module.scss'

export default function AppContainer() {
  const [todoList, setTodoList] = useState<toDo[]>([])

  useEffect(() => {
    loadToDoList()
  }, [])

  const loadToDoList = async () => {
    const toDoList = await ToDoService.getToDoList()
    setTodoList(toDoList)
  }

  return (
    <div className={classes['app-container']}>
      <Filter />
      <ToDoList items={todoList} />
    </div>
  )
}
