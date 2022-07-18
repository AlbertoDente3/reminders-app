import React from 'react'
import toDo from '../models/toDo'
import ToDo from './ToDo'
import classes from './ToDoList.module.scss'
import labels from '../labels/all.json'
interface ToDoListProps {
  items: toDo[]
  onToDoStateChange: (toDo: toDo) => void
}
export default function ToDoList({ items, onToDoStateChange }: ToDoListProps) {
  return (
    <div className={classes['list-wrapper']}>
      <div className={classes['list-header']}>
        {labels.columnNames.map((columnName, index) => (
          <div key={index}> {columnName} </div>
        ))}
      </div>
      <div className={classes['list-container']}>
        {items.map((item) => (
          <ToDo key={item.id} toDo={item} onToDoStateChange={onToDoStateChange} />
        ))}
      </div>
    </div>
  )
}
