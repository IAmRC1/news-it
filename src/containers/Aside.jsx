import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setQuery } from '../slices/newsSlice'

const Aside = () => {
  const dispatch = useDispatch()

  const [q, setQ] = useState('')
  const handleReset = () => {
    setQ('')
  }
  const handleSearch = () => dispatch(setQuery(q))

  return (
    <>
      <div className="card mb-4">
        <div className="card-header">Search</div>
          <div className="card-body">
            <form noValidate>
              <div className="input-group">
                <input 
                  type="text"
                  className="form-control" 
                  placeholder="Search by title..." 
                  aria-label="Search by title..." 
                  aria-describedby="button-search" 
                  value={q}
                  onChange={e => setQ(e.target.value)}
                />
                {q !== '' && (
                  <button type="button" className="btn btn-outline-danger" onClick={handleReset}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                      <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
                    </svg>
                  </button>
                )}
                <button type="button" className="btn btn-primary" onClick={handleSearch}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      <div className="card mb-4">
        <div className="card-header">About me</div>
        <div className="card-body">You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!</div>
      </div>
    </>
  )
}

export default Aside
