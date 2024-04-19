
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Main = () => {

  const location = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('userType') == "Manager") {
      location('/manager')
    }
    else if (localStorage.getItem('userType') == "Worker") {
      location('worker')
    }
    else {
      location('/startup')
    }
  }, [])

  return (
    <>
    </>
  )
}

export default Main