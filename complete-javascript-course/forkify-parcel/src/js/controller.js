import icons from "url:../img/icons.svg";
const recipeContainer = document.querySelector(".recipe");
import "core-js/stable";
import "regenerator-runtime/runtime";
import * as model from "./model";
import recipeView from "./views/recipeView";
import searchView from "./views/searchView";
import resultView from "./views/resultView";
import paginationView from "./views/paginationView";

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    recipeView.renderSpinner();

    const id = window.location.hash.slice(1);
    if (!id) return;

    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultView.renderSpinner();

    const query = searchView.getQuery();
    if (!query) return;

    await model.loadSearchResults(query);

    resultView.render(model.getSearchResultsPage(1));

    paginationView.render(model.state.search);
  } catch (err) {
    console.error(err);
  }
};

const controlPagination = function (goToPage) {
  resultView.render(model.getSearchResultsPage(goToPage));

  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  model.updateServings(newServings);

  recipeView.render(model.state.recipe);
};

///////////////////////////////////////////////////////////////

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};
init();