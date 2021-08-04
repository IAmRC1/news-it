import React from 'react'

const PageSize = ({ pageSizeOptions, perPage, setPerPage, width }) => {
  return (
    <select 
      className={`form-select w-${width}`} 
      aria-label="per page count" 
      value={perPage} 
      onChange={e => setPerPage(e.target.value)}
    >
      <option disabled>Per Page</option>
      {pageSizeOptions.map((value, i) => (
        <option key={i} value={value}>{value}</option>
      ))}
    </select>
  )
}

export default PageSize
