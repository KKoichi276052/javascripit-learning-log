import previewView from "./previewView";
import View from "./View";
import icons from "url:../../img/icons.svg";

class ResultView extends View {
  _parentEl = document.querySelector(".results");
  _errorMessage = "No Recipe for your query. Try other one!";
  _message;

  _generateMarkup() {
    return this._data
      .map((result) => previewView.render(result, false))
      .join("");
  }
}

export default new ResultView();
