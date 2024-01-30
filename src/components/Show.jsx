import React from 'react'

export const Show = ({data, loading}) => {
    if(loading) {
        return <h2>Loading...</h2>
    }
  return (
    <>
    <ul className="list-group mb-4">
        {data.map(bbb =>(
          <li key={bbb.id} className='list-group-item' >
            {bbb.title}
          </li>
        ))}
    </ul>
    </>
  )
}
