import View from "./View";
import icons from "url:../../img/icons.svg";

class PaginationView extends View {
  _parentEl = document.querySelector(".pagination");

  addHandlerClick(handler) {
    this._parentEl.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--inline");

      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    if (this._data.page === 1 && numPages > 1) {
      return this._generateNextButton();
    }

    if (this._data.page === numPages) {
      return this._generatePrevButton();
    }

    if (this._data.page < numPages) {
      return this._generatePrevButton() + this._generateNextButton();
    }

    // if no additional pages are exists
    return "";
  }

  _generatePrevButton() {
    const markup = `
			<button data-goto="${
        this._data.page - 1
      }" class="btn--inline pagination__btn--prev">
				<svg class="search__icon">
					<use href="${icons}#icon-arrow-left"></use>
				</svg>
				<span>Page ${this._data.page - 1}</span>
			</button>
	`;
    return markup;
  }

  _generateNextButton() {
    const markup = `
			<button data-goto="${
        this._data.page + 1
      }" class="btn--inline pagination__btn--next">
				<span>Page ${this._data.page + 1}</span>
				<svg class="search__icon">
					<use href="${icons}#icon-arrow-right"></use>
				</svg>
			</button>
		`;
    return markup;
  }
}

export default new PaginationView();
