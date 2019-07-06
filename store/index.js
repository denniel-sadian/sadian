import axios from 'axios'

export const state = () => ({
  photo: ''
})

export const mutations = {
  SET_PHOTO(state, photo) {
    state.photo = photo
  }
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getPhoto')
  },
  async getPhoto({ commit }) {
    await axios.get('https://denniel.herokuapp.com/extras/api/photo/').then(res => {
      commit('SET_PHOTO', res.data)
    })
  }
}

export const getters = {
  photo: state => {
    return state.photo
  }
}
