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

  const handleFilterByCompleted = () => {
    const list = todoList.filter((todo) => todo.completed === true)
    setTodoList(list)
  }

  const handleFilterByUserId = (id: number) => {
    const list = todoList.filter((todo) => todo.userId === id)
    setTodoList(list)
  }

  return (
    <div className={classes['app-container']}>
      <Filter onFilterByCompleted={handleFilterByCompleted} onFilterByUserId={handleFilterByUserId} />
      <ToDoList items={todoList} />
    </div>
  )
}
