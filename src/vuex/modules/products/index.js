import * as getters from './getters'
import * as actions from './actions'

import {
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  FETCH_PRODUCTS
} from './mutation-types'

const initialState = {
  all: []
}

const mutations = {
  [FETCH_PRODUCTS] (state, menu) {
    // assign the products that we got from our FETCH_PRODUCTS event to state.all
    state.all = menu
  },

  [CREATE_PRODUCT] (state, menu) {
    state.all.push(menu)
  },
  [UPDATE_PRODUCT] (state, menu) {
    const index = state.all.findIndex((p) => p.id === menu.id)

    if (index !== -1) {
      // We need to replace the array entirely so that vue can recognize
      // the change and re-render entirely.
      // See http://vuejs.org/guide/list.html#Caveats
      state.all.splice(index, 1, menu)
    }
  },

  [DELETE_PRODUCT] (state, menuId) {
    state.all = state.all.filter(p => p.id !== menuId)
  }
}
export default {
  state: { ...initialState },
  getters,
  actions,
  mutations
}
