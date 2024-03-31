const recipeContainer = document.querySelector(".recipe");
import "core-js";
import "regenerator-runtime";
import * as model from "./model";
import recipeView from "./views/recipeView";

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    recipeView.renderSpinner();

    const id = window.location.hash.slice(1);
    if (!id) return;

    await model.loadRecipe(id);

    console.log(recipeView);
    recipeView.renderRecipe(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();
