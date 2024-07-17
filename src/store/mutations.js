export function setMealsByName(state, meals) {
  state.mealsByName = meals || []
}
export function setMealsByLetter(state, meals) {
  state.mealsByLetter = meals || []
}
export function setMealsByIngredient(state, meals) {
  state.mealsByIngredient = meals || []
}
// export function setIngredient(state, ingredient) {
//   state.ingredient = ingredient
// }