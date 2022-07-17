import React from 'react'
import toDo from '../models/toDo'
import classes from './ToDo.module.scss'
import close from './../icons/close.svg'
import done from './../icons/done.svg'

export default function ToDo(props: { toDo: toDo }) {
  const understandSign = (isCompleted: Boolean) => {
    if (isCompleted) return <img src={done} alt="todo-completed" />
    return <img src={close} alt="todo-not-completed" />
  }

  console.log(props.toDo)
  return (
    <div className={classes['to-do-container']}>
      <span>{props.toDo.userId}</span>
      <span>{props.toDo.title}</span>
      <span>{understandSign(props.toDo.completed)}</span>
    </div>
  )
}
