import View from "./View";

class ResultView extends View {
  _parentEl = document.querySelector(".results");
  _errorMessage = "No Recipe for your query. Try other one!";
  _message;

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join("");
  }

  _generateMarkupPreview(result) {
    return `
			<li class="preview">
				<a class="preview__link" href="#${result.id}">
					<figure class="preview__fig">
						<img src="${result.image}" alt="${result.title}" />
					</figure>
					<div class="preview__data">
						<h4 class="preview__title">${result.title}</h4>
						<p class="preview__publisher">${result.publisher}</p>
						<div class="preview__user-generated">
							<svg>
								<use href="src/img/icons.svg#icon-user"></use>
							</svg>
						</div>
					</div>
				</a>
			</li>
			
		`;
  }
}

export default new ResultView();
