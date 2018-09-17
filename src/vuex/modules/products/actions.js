import uuid from 'uuid'

// import axios from 'axios'
import axios from 'axios'

import {
  DELETE_PRODUCT,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  FETCH_PRODUCTS
} from './mutation-types'

export function fetchProducts ({commit}) {
  return axios.get(`/todo/`)
    .then((response) => { commit(FETCH_PRODUCTS, response.data) })
}

/* export function createProduct ({ commit }, menu) {
  return axios.post(`http://localhost:51736/api/todo/`, menu)
} */
export function createProduct ({ commit }, menu) {
  return axios.post(`/todo`, menu)
    .then((response) => commit(CREATE_PRODUCT, response.data))
}

export function updateProduct ({ commit }, menu) {
  return axios.put(`/todo/${menu.id}`, {menu})
    .then((response) => commit(UPDATE_PRODUCT, response.data))
}

export function deleteProduct ({ commit }, menuId) {
  return axios.delete(`/todo/${menuId}`)
    .then((response) => commit(DELETE_PRODUCT, menuId))
}
export function saveProduct ({ commit, state }, menu) {
  const index = state.all.findIndex((p) => p.id === menu.id)
  // update product if it exists or create it if it doesn't
  if (index !== -1) {
    return commit(UPDATE_PRODUCT, menu)
  } else {
    menu.id = uuid.v4()
    console.log(menu)
    return commit(CREATE_PRODUCT, menu)
  }
}
