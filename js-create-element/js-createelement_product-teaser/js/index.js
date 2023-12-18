console.clear();

const name = "Queen angelfish";
const description =
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
const category1 = "Freshwater";
const category2 = "Large aquarium";
const category3 = "Plankton Diet";
const price = "149,99 €";
const imageSrc =
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640";

// create a new section
// add the className to teh section
// create a new p element
// add the className to the p element
// create a new footer element
// add the className to the p element
// create a new span element
// add the className to the span element
// create a new button element
// add the className to the button element

const product = document.querySelector('[data-js="product"]');
const body = document.querySelector("body");
//const divProductTextContainer = document.querySelector('[data-js="product__text-container"]');
//const h2ProductName = document.querySelector('[data-js="product__name"]');
//const ulProductCategories = document.querySelector('[data-js="roduct__categories"]');
//const ProductDescription = document.querySelector('[data-js="product__description"]');
//const ProductPrice = document.querySelector('[data-js="product__price"]');
//const buyButton = document.querySelector('[data-js="product__buy-button"]');
//console.log("form", form);

const newCard = document.createElement("article");
newCard.innerHTML = `
  <article class="product">
  <div class="product__body">
    <div class="product__text-container">
      <h2 class="product__name">${name}</h2>
      <ul class="product__categories">
        <li class="product__category">${category1}</li>
        <li class="product__category">${category2}</li>
        <li class="product__category">${category3}</li>
      </ul>
      <p class="description">${description}</p>
    </div>
    <div class="product__image-container">
      <img
     class="product__image"
     src=${imageSrc}
     alt=""/>
    </div>
  </div>
  <footer class="product__footer">
    <span class="product__price">${price}</span>
    <button type="button" class="product__buy-button">Buy</button>
  </footer>
</article>
    `;
body.append(newCard);
