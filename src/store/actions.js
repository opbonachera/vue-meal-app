import axiosClient from '../axiosClient';

export function setMealsByName({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`)
    .then(({ data }) => {
      commit('setMealsByName', data.meals)
    })
}

export function setMealsByLetter({ commit }, letter) {
  axiosClient.get(`search.php?f=${letter}`)
    .then(({ data }) => {
      console.log(data.meals)
      commit('setMealsByLetter', data.meals)
    })
}

export function setMealsByIngredient({ commit }, ing) {
  axiosClient.get(`filter.php?i=${ing}`)
    .then(({ data }) => {
      commit('setMealsByIngredient', data.meals)
    })
}