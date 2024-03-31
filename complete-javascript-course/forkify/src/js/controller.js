const recipeContainer = document.querySelector(".recipe");
import "core-js";
import "regenerator-runtime";
import * as model from "./model";
import recipeView from "./views/recipeView";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

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
    alert("err");
  }
};

["hashChange", "load"].forEach((ev) =>
  window.addEventListener(ev, controlRecipes)
);
