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
  async nuxtServerInit({ commit }) {
    await commit('SET_PHOTO', process.env.profilePic)
  }
}

export const getters = {
  photo: state => {
    return state.photo
  }
}
