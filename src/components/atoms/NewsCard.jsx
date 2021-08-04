import React from 'react'
import moment from 'moment'

const NewsCard = ({ article }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={article?.urlToImage ?? "https://dummyimage.com/600x400/dee2e6/6c757d.jpg"} alt={article?.description} />
      <div className="card-body">
        <div className="d-flex justify-content-between mb-2">
          <div className="small text-muted">{moment(article?.publishedAt).format('DD MMMM YYYY')}</div>
          <div className="small">{article?.author?.toUpperCase() ?? "N/A"}</div>
        </div>
        <h2 className="card-title h4">{article?.title}</h2>
        <p className="card-text">{article?.description}</p>
        <a className="btn btn-primary" href={article?.url}>Read more →</a>
      </div>
    </div>
  )
}

export default NewsCard
