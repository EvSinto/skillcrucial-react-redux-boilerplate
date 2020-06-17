import React, { useState, useEffect } from 'react'
import { Route, Switch, useParams } from 'react-router-dom'
import axios from 'axios'
import Head from './head'
import Header from './header'
import Main from './main'
import RepoList from './repo-list'
import Description from './description'
// import DummyView from './dummy-view'

const Home = () => {
  const { username, repositoryName } = useParams()
  const url = `https://api.github.com/users/${username}/repos`
  const url2 = `https://raw.githubusercontent.com/${username}/${repositoryName}/master/README.md`

  const [repoList, setRepoList] = useState([])

  useEffect(() => {
    if (typeof username !== 'undefined') {
      axios.get(url).then((it) => {
        setRepoList(it.data.map((repo) => repo.name))
      })
    }
  }, [url, username])

  const [readme, setReadme] = useState('')

  useEffect(() => {
    if (typeof username !== 'undefined' && typeof repositoryName !== 'undefined') {
      axios.get(url2).then((item) => {
        setReadme(item.data)
      })
    }
  }, [url2, username, repositoryName])

  return (
    <div>
      <Head title="Home" />
      <Header title="Header" />
      <Switch>
        <Route exact path="/" component={() => <Main />} />
        <Route exact path="/:username" component={() => <RepoList repos={repoList} />} />
        <Route exact path="/:username/:repositoryName" component={() => <Description readme={readme} />} />
      </Switch>
    </div>
  )
}

Home.propTypes = {}

export default Home
