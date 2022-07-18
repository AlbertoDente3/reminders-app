import React, { useEffect, useState } from 'react'
import classes from './Filter.module.scss'
import search from './../icons/search.png'
import toDo from '../models/toDo'
// props: { toDo: toDo }
interface FilterProps {
  onFilterByCompleted: () => void
  onFilterByUserId: (id: number) => void

  onFilterByWord: (word: string) => void

  onResetFilter: () => void
  items: toDo[]
}

export default function Filter({ onFilterByCompleted, onFilterByUserId, onFilterByWord, onResetFilter, items }: FilterProps) {
  const getSingleUserId = (todoList: toDo[]): number[] => {
    const list: number[] = []
    todoList.forEach((todo) => {
      if (!list.includes(todo.userId)) {
        list.push(todo.userId)
      }
    })

    return list
  }

  useEffect(() => {
    // console.log('eccomi')
  }, [])

  const [wordToSearch, setwordToSearch] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // No longer need to cast to any - hooray for react!
    onFilterByUserId(Number(e.target.value))
  }

  return (
    <div className={classes['filter-wrapper']}>
      <div>filters</div>
      <div className="search-filter">
        <div onClick={() => onFilterByWord(wordToSearch)}>
          <img src={search} alt="" />
        </div>
        <input type="text" onChange={(e) => setwordToSearch(e.target.value)} />
      </div>

      <div className="toggle-filter">
        <div className="label">completed</div>
        <div onClick={() => onFilterByCompleted()}>switch</div>
      </div>

      <select onChange={(e) => onChange(e)} name="userId" id="userId-select">
        <option value=""></option>
        {getSingleUserId(items).map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>

      <div onClick={() => onResetFilter()} className="reset-filter-link">
        reset filters
      </div>
    </div>
  )
}
