import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// Slice
const slice = createSlice({
  name: 'news',
  initialState: {
    loading: false,
    data: [],
    searchQuery: '',
    filterDate: '',
  },
  reducers: {
    toggleLoading: (state) => {
      state.loading = !state.loading
    },
    setNews: (state, action) => {
      state.data = action.payload
    },
    setSearchKeyword: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export default slice.reducer
// Provide reducer functions to actions
const { toggleLoading, setNews, setSearchKeyword, setFilterDate, } = slice.actions

export const fetchNews = () => async dispatch => {
  dispatch(toggleLoading());
  try {
    const res = await axios.get('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json')
    dispatch(setNews(res.data.articles));
  } catch (e) {
    return console.error(e.message);
  } finally {
    dispatch(toggleLoading());
  }
}

export const setQuery = (data) => dispatch => dispatch(setSearchKeyword(data))


