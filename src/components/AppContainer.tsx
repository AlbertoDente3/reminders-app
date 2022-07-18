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

  const handleFilterByWord = (word: string) => {
    console.log(word)

    let flag = false
    const textInput = word
    let index = 0
    const arrayOfSentences = todoList.map((item: toDo) => {
      return item.title
    })

    for (let i = 0; i <= arrayOfSentences.length - 1; i++) {
      if (textInput.includes(arrayOfSentences[i])) {
        flag = true
        index = i
      }
    }
    if (flag) {
      setTodoList([todoList[index]])
    }
  }

  const handleFilterByUserId = (id: number) => {
    const list = todoList.filter((todo) => todo.userId === id)
    setTodoList(list)
  }

  const handleReset = () => {
    loadToDoList()
  }

  const handleChangeState = (toDo: toDo): void => {
    const list = [...todoList]
    const index = list.indexOf(toDo)

    list[index].completed = !list[index].completed
    setTodoList(list)
  }

  return (
    <div className={classes['app-container']}>
      <Filter items={todoList} onFilterByCompleted={handleFilterByCompleted} onFilterByUserId={handleFilterByUserId} onFilterByWord={(word) => handleFilterByWord(word)} onResetFilter={handleReset} />
      <ToDoList items={todoList} onToDoStateChange={(toDo: toDo) => handleChangeState(toDo)} />
    </div>
  )
}
