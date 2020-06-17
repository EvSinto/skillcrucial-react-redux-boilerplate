import React, { useState } from 'react'
import { history } from '../redux'

const Search = () => {
  const [value, setValue] = useState('')
  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onClick = () => {
    history.push(`/${value}`)
  }
  return (
    <div>
      <div className="flex items-start justify-center h-screen">
        <div className="bg-gray-300 text-black font-bold rounded-lg border shadow-sm p-10">
          <input type="text" id="input-field" className="mr-5 bg-gray-100 focus:bg-white" placeholder="Set username"
            value={value}
            onChange={onChange} />
          <button type="button" id="search-button" className="bg-red-400 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4"
            onClick={onClick}>
            <p className="font-semibold text-xs">Search</p>
          </button>
        </div>
      </div>
    </div>
  )
}

Search.propTypes = {}

export default React.memo(Search)
