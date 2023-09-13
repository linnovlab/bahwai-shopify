class PredictiveSearch extends HTMLElement {
  constructor() {
    super();

    this.input = this.querySelector('input[type="search"]');
    this.predictiveSearchResults = $('#predictive-search');

    this.input.addEventListener(
      'input',
      this.debounce((event) => {
        this.onChange(event);
      }, 300).bind(this),
    );
  }

  onChange() {
    const searchTerm = this.input.value.trim();

    if (!searchTerm.length) {
      this.close();
      return;
    }

    this.getSearchResults(searchTerm);
  }

  getSearchResults(searchTerm) {
    fetch(
      `/search/suggest?q=${searchTerm}&section_id=predictive-search&format=json`,
    )
      .then((response) => {
        if (!response.ok) {
          var error = new Error(response.status);
          this.close();
          throw error;
        }

        return response.json();
      })
      .then((result) => {
        // feat for searchbar fonctionality
        const products = result.resources.results.products,
          collections = result.resources.results.collections,
          colContainer = $('#sug-col-container'),
          prodContainer = $('#sug-prod-container');
        var colContent = '';
        var prodContent = '';
        // console.log(products)
        collections.forEach((item) => {
          if (
            item.handle != 'suggestions' &&
            item.handle != 'pourrait-vous-plaire' &&
            item.handle != 'suggestions-panier'
          ) {
            colContent += `
          <li>
            <a href="${item.url}">${item.title}</a>
            </li>`;
          }
        });

        products.forEach((product) => {
          prodContent += `
          <div class="item w-[9rem] sm:w-[11rem]">
            <a href="${product.url
            }" class="item text-_main_color_dark text-[12px] max-w-[230px] w-full m-1 flex items-center flex-col gap-1">
              <div class="img w-full">
                <img
                  src="${product.image}"
                  alt="${product.title}"
                  class="w-full object-cover h-[220px]" 
                  >
              </div>
              <p class="font-semibold w-[10rem] text-center mt-2">${product.title
            }</p>
              <div class="avis flex items-center gap-2 h-[1.1rem] mb-2">
              </div>
              <span class="border-_main_color_dark border-b text-_main_color_dark ">
                Soyez le 1er à noter!
              </span>
              <p class="font-medium">${product.price}€ le pack
              </p>
            </a>
          </div>
          `;
        });

        if (collections.length > 0) {
          colContainer.html(`
              <h2 class="text-gray-500 text-[1.2rem]">Collections</h2>
              <ul id="sug-col-container" class="flex flex-col gap-1">
                ${colContent}
              </ul>
          `);
        } else {
          colContainer.html('');
        }

        if (products.length > 0) {
          prodContainer.html(`
            <h2 class="text-gray-500 text-[1.2rem] mt-4">Produits</h2>
            <div class="content flex justify-around sm:justify-normal flex-wrap gap-4 sm:gap-8 mt-2">
              ${prodContent}
            </div>
          `);
        } else {
          prodContainer.html('');
        }

        // this.clearconsole()
        this.open();
      })
      .catch((error) => {
        this.close();
        throw error;
      });
  }

  clearconsole() {
    console.log(window.console);
    if (window.console || window.console.firebug) {
      console.clear();
    }
  }

  open() {
    this.predictiveSearchResults.slideDown();
  }

  close() {
    this.predictiveSearchResults.slideUp();
  }

  debounce(fn, wait) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), wait);
    };
  }
}

customElements.define('predictive-search', PredictiveSearch);
