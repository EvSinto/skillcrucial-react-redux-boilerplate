import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
  const { username, repositoryName } = useParams()

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-gray-400 shadow p-6 mb-5">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img className="fill-current h-12 w-12 mr-2" width="84" height="84" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg" alt="logo" src="https://cdn.svgporn.com/logos/github-octocat.svg" />
          <span className="font-semibold text-xl tracking-tight">Git Browser</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          {username && (
            <div className="text-md text-white lg:flex-grow" id="repository-name">
              @ { repositoryName || username}
            </div>
          )}
          {username && (
            <div id="go-back" className="inline-block text-sm px-4 py-2 m-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
              <Link to="/">Go Back</Link>
            </div>
          )}
          {repositoryName && (<div id="go-repository-list" className="inline-block text-sm px-4 py-2 m-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
            <Link to={`/${username}`}>Go To Repository List</Link>
          </div>)}
        </div>
      </nav>
    </div>
  )
}

Header.propTypes = {}

export default React.memo(Header)
