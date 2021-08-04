import React, { useState, useEffect, } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Aside from './Aside'
// import Pagination from './Pagination'
import NewsCard from '../components/atoms/NewsCard'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { fetchNews } from '../slices/newsSlice'
import Pagination from './Pagination'
import PageSize from '../components/molecules/PageSize'

const Main = () => {

  const dispatch = useDispatch()
  const loading = useSelector(state => state.news.loading)
  const news = useSelector(state => state.news.data)
  const q = useSelector(state => state.news.searchQuery)

  useEffect(() => {
    dispatch(fetchNews())
  }, []);

  const totalCount = news.length
  const [perPage, setPerPage] = useState(10)
  const pageCount = Math.ceil(totalCount/ perPage)

  const [currentPage, setCurrentPage] = useState(1);
  const [firstPageIndex, setFirstPageIndex] = useState(0);
  const [lastPageIndex, setLastPageIndex] = useState(perPage);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-9">
          <div className="row">
            {loading && (
              <div className="d-flex align-items-center">
                <strong>Loading...</strong>
                <div className="spinner-border ms-auto text-primary" role="status" aria-hidden="true"></div>
              </div>
            )}
            <ResponsiveMasonry columnsCountBreakPoints={{576: 1, 767: 2, 992: 3}}>
              <Masonry 
                columnsCount={3}
                gutter={16}
              >
                {news
                  .slice(firstPageIndex, lastPageIndex)
                  .filter(article => q === '' ? article : article.title.toLowerCase().includes(q.toLowerCase()))
                  .map((article, i) => <NewsCard key={i} article={article} />)
                }
              </Masonry>
            </ResponsiveMasonry>
          </div>
          <hr className="mt-3 mb-0" />
          <div className="d-flex align-items-center justify-content-between">
            <PageSize 
              width={25}
              pageSizeOptions={[5, 10, 25, 50]}
              perPage={perPage}
              setPerPage={setPerPage}
            />
            <Pagination
              pageCount={pageCount}
              perPage={perPage}
              currentPage={currentPage}
              firstPageIndex={firstPageIndex}
              setCurrentPage={setCurrentPage}
              setFirstPageIndex={setFirstPageIndex}
              setLastPageIndex={setLastPageIndex}
            />
          </div>
        </div>
        <div className="col-lg-3">
            <Aside />
        </div>
      </div>
    </div>
  )
}

export default Main
