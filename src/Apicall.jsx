import React, { useEffect, useState } from 'react'

export default function Apicall() {
    const [data,setData] = useState([]);
    const api = "https://jsonplaceholder.typicode.com/users"

    useEffect(() => {
        fetch(api)
          .then((res) => res.json())
          .then((jsdata) => {
            setData(jsdata)
          })
    },[])
  return (
    <div className='container'>  
      <div className="grid">
        {data.map((c) => (
            <div className="card" key={c.id}>
                <h3>Name : {c.name}</h3>
                <h4>Email : {c.email}</h4>
                <h4>Phone : {c.phone}</h4>
                <h4>City : {c.address.city}</h4>
            </div>
        ))}
      </div>
    </div>
  )
}



/* 
address
company
email
id
name
phone
username
website
 */