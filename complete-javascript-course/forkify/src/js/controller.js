const recipeContainer = document.querySelector(".recipe");
import "core-js";
import "regenerator-runtime";
import * as model from "./model";
import recipeView from "./views/recipeView";
import searchView from "./views/searchView";

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    recipeView.renderSpinner();

    const id = window.location.hash.slice(1);
    if (!id) return;

    await model.loadRecipe(id);

    recipeView.renderRecipe(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;

    await model.loadSearchResults(query);
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
