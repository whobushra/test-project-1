import React, {useEffect, useState} from 'react'

function App() {
  const [data, setData] = useState([])
  const [arr, setArr] = useState([])
  const [show, setShow] = useState(false)
  const [currPage, setCurrPage] = useState(1)
  const [recordPerPage, setRecordPerPage] = useState(10)
  const npage = Math.ceil(data.length / recordPerPage)
  

  function prePage() {
    if(currPage !== 1){
      setCurrPage(currPage - 1)
    }
  }

  function nextPage() {
    if(currPage !== npage){
      setCurrPage(currPage + 1)
    }
  }

  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos").then((result)=> {
    result.json().then((resp) => {
      setData(resp)
      setArr(resp.slice(0,recordPerPage))
      setShow(true)
    })
  })
  },[])
  useEffect(()=>{
    const lastIndex = currPage * recordPerPage
    const firstIndex = lastIndex - recordPerPage
    const records = Array.isArray(data) && data.length > 0 ? data.slice(firstIndex, lastIndex) : []
    setArr(records)
  },[currPage, recordPerPage])



  return (
    <div>
      
        {show===false? <h1 style={{textAlign: 'center', color:'#316fc1'}}>Loading...</h1>:
        
         <table>
          <tr>
            <td>Title</td>
          </tr>
          {
            arr.map((content,i)=>
            <tr key={i}>
                <td>{content.title}</td>
            </tr>
            )
          }
        </table>
        }
        <select value={recordPerPage} onChange={e=>setRecordPerPage(e.target.value)}>
          <option>5</option>
          <option>10</option>
          <option>15</option>
          <option>20</option>
          <option>25</option>
        </select>
        <nav>
          <ul className='pagination'>
          {currPage !== 1 && (
            <li className='pageItem'>
              <a href="#" className='page-link' onClick={prePage}>Prev</a>
            </li> )}
            {currPage !== npage && (
              <li className='pageItem'>
              <a href="#" className='page-link' onClick={nextPage}>Next</a>
            </li>
            )}
          </ul>
        </nav>
    </div>
  );
}
export default App