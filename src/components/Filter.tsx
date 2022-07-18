import React from 'react'
import classes from './Filter.module.scss'
import search from './../icons/search.png'
// props: { toDo: toDo }
interface FilterProps {
  onFilterByCompleted: () => void
  onFilterByUserId: (id: number) => void
}
export default function Filter({ onFilterByCompleted, onFilterByUserId }: FilterProps) {
  return (
    <div className={classes['filter-wrapper']}>
      <div>filters</div>
      <div className="search-filter">
        <div>
          <img src={search} alt="" />
        </div>
        <input type="text" />
      </div>

      <div className="toggle-filter">
        <div className="label">completed</div>
        <div onClick={() => onFilterByCompleted()}>swithc</div>
      </div>

      <div className="user-id-filter">
        <div className="label">User id</div>
        <select name="pets" id="pet-select">
          <option value="" disabled selected hidden></option>
          <option value="dog">Dog</option>
        </select>
      </div>

      <div className="reset-filter-link">reset filters</div>
    </div>
  )
}
