import React from 'react'
import toDo from '../models/toDo'
import classes from './ToDo.module.scss'
import close from './../icons/close.svg'
import done from './../icons/done.svg'

interface ToDoProps {
  toDo: toDo
  onToDoStateChange: (toDo: toDo) => void
}

export default function ToDo({ toDo, onToDoStateChange }: ToDoProps) {
  const understandSign = (isCompleted: Boolean) => {
    if (isCompleted) return <img src={done} alt="todo-completed" />
    return <img src={close} alt="todo-not-completed" />
  }

  return (
    <div className={classes['to-do-container']}>
      <span>{toDo.userId}</span>
      <span>{toDo.title}</span>
      <span onClick={() => onToDoStateChange(toDo)}>{understandSign(toDo.completed)}</span>
    </div>
  )
}
