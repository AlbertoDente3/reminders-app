import React from 'react'
import toDo from '../models/toDo'
import ToDo from './ToDo'
import classes from './ToDoList.module.scss'
import labels from '../labels/all.json'
interface ToDoListProps {
  items: toDo[]
}
export default function ToDoList({ items }: ToDoListProps) {
  return (
    <div className={classes['list-wrapper']}>
      <div className={classes['list-header']}>
        {labels.columnNames.map((columnName) => (
          <div> {columnName} </div>
        ))}
      </div>
      <div className={classes['list-container']}>
        {items.map((item) => (
          <ToDo toDo={item} />
        ))}
      </div>
    </div>
  )
}
