import React from 'react'
import Context from "./Context"
import { useState } from 'react'

const State = (props) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [queryData,setQueryData] = useState("")
    const [bookmarkedData,setBookmarkedData] = useState([])

  return (
    <Context.Provider value={{isAuthenticated, setIsAuthenticated,queryData,setQueryData,setBookmarkedData,bookmarkedData}}>
        {props.children}
    </Context.Provider>
  )
}

export default State