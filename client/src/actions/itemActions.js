import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, GET_SINGLE_ITEM} from './types';
import axios from 'axios';

// get items action sent to reducer
export const getItems = () => dispatch => {
  dispatch(setItemsLoading(console.log("items are loading...")));
    axios
      .get('/api/items')
      .then(res => dispatch({
      type: GET_ITEMS,
      payload: res.data
      })
    )
};

// get single project
export const getSingleItem = id => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get(`/api/items/${id}`)
    .then(res => dispatch({type: GET_SINGLE_ITEM, payload: res.data}))
    .catch(err => console.error("Can't get item", err))
};

// add new item sent to reducer
export const addItem = item => dispatch => {
  dispatch(setItemsLoading(console.log("items are loading...")))
  axios
  .post('/api/items', item)
  .then(res => 
    dispatch({ 
      type: ADD_ITEM,
      payload: res.data
    }))
};

// delete item by id request sent to reducer
export const deleteItem = id => dispatch => {
  axios.delete(`/api/items/${id}`).then(res =>
    dispatch({
      type: DELETE_ITEM,
      payload: id
    })
    )
};

// loading items graphic sent to reducer
export const setItemsLoading = item => {
  return {
    type: ITEMS_LOADING
  };
};