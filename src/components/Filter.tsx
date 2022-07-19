import React, { useEffect, useState } from 'react'
import classes from './Filter.module.scss'
import search from './../icons/search.png'
import toDo from '../models/toDo'
import labels from '../labels/all.json'
// props: { toDo: toDo }
interface FilterProps {
  onFilterByCompleted: (state: boolean) => void
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

  const [wordToSearch, setWordToSearch] = useState('')
  const [switchState, setSwitchState] = useState(false)

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // No longer need to cast to any - hooray for react!
    onFilterByUserId(Number(e.target.value))
  }

  const onClickOnFilterByCompleted = () => {
    setSwitchState(!switchState)
    onFilterByCompleted(switchState)
  }

  return (
    <div className={classes['filter-wrapper']}>
      <div>filters</div>
      <div className={classes['search-filter']}>
        <div onClick={() => onFilterByWord(wordToSearch)} className={classes['search-icon-container']}>
          <img src={search} alt="" />
        </div>
        <input type="text" onChange={(e) => setWordToSearch(e.target.value)} placeholder={labels['eng'].search} />
      </div>

      <div className="toggle-filter">
        <div className="label">completed</div>
        <button onClick={() => onClickOnFilterByCompleted()}>switch</button>
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
