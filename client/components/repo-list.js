import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Head from './head'

const Repolist = (props) => {
  const { username } = useParams()
  return (
    <div>
      <Head title="Home" />
      <div className="flex flex-col items-center justify-center w-full h-auto">
        <div className="flex flex-col items-center justify-center w-6/12 h-auto">
          <ul>
            {props.repos.map((repo, index) => (
              <li
                className="w-full rounded bg-gray-300 shadow-sm m-1 p-2 hover:bg-gray-400"
                key={repo.name}>
                <div className="mr-1 w-6 h-6 flex items-center justify-center rounded-full bg-gray-400 text-gray-700 shadow-sm">
                  {index + 1}
                </div>
                <div className="text-gray-700 inline-block" key={repo}>
                  <Link to={`/${username}/${repo}`}>{repo}</Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

Repolist.propTypes = {}

export default React.memo(Repolist)
