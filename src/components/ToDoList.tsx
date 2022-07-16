import React from 'react'
import toDo from '../models/toDo'
import ToDo from './ToDo'
interface ToDoListProps {
  items: toDo[]
}
export default function ToDoList({ items }: ToDoListProps) {
  return (
    <div className="list-wrapper">
      {items.map((item) => (
        <ToDo toDo={item} />
      ))}
    </div>
  )
}
