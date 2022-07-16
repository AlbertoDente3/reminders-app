import React from 'react'
import toDo from '../models/toDo'

export default function ToDo(props: { toDo: toDo }) {
  const understandSign = (isCompleted: Boolean) => {
    if (isCompleted) return 'v'
    return 'x'
  }

  console.log(props.toDo)
  return (
    <div className="toDo-container">
      <span>{props.toDo.userId}</span>
      <span>{props.toDo.title}</span>
      <span>{understandSign(props.toDo.completed)}</span>
    </div>
  )
}
