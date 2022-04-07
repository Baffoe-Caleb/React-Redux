import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const JokeDetails = () => {

  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.chucknorris.io/jokes/${id}`)
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <>
      {data && (<h3>{data.value}</h3>)}
    </>
  )

}

export default JokeDetails