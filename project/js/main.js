const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        cartUrl: '/getBasket.json',
        products: [],
        productsCart: [], // cartItems
        imgCatalog: 'https://via.placeholder.com/200x150',
        imgCart: 'https://via.placeholder.com/50x100',
        searchLine: '', //userSearch
        filtered: [],
        isVisibleCart: false, //showCart
    },
    computed: {
        calcSum(){
            return this.productsCart.reduce((accum, item) => accum += item.price, 0);
        }
    },
    mounted(){ //обработчик жизненного цикла, как только навесятся все стандартные обработчики делаем то что в нем, добавляется на верхнем уровне объекта Vue
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
        this.getJson('getProducts.json')
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });

        this.getJson(`${API + this.cartUrl}`)
            .then(data => {
                for (let el of data.contents) {
                    this.productsCart.push(el)
                }
        });

    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => console.log(error))
        },
        addProduct(product) {
            this.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result) {
                        let find = this.productsCart.find(el => el.id_product === product.id_product);
                        if(find){
                            find.quantity++
                        } else {
                            let prod = Object.assign({quantity: 1}, product);// создаем новый объект на основе добавляемого в корзину товара и добавляем ему свойство quantity
                            this.productsCart.push(prod);
                        }
                    }
                })
        },
        remove(product) {
            this.getJson(`${API}/deleteFromBasket.json`)
                .then(data => {
                    if (data.result) {
                        if(product.quantity > 1){
                            product.quantity--
                        } else {
                            this.productsCart.splice(this.productsCart.indexOf(product), 1);
                        }
                    }
                })
        },
        filter() {
            const regexp = new RegExp(this.searchLine, 'i');
            filtered = products.filter(el => regexp.test(el.product_name)); // метод filter() создает новый массив со всем элементами, прошедшими проверку, задаваемую в передаваемой функции.
        },
        
        
    }
})































// //Общий класс прародитель классов каталога товара на странице и корзины.
// class List {
//   constructor(url, container){
//       this.url = url;
//       this.container = container;
//       this.products = []; // здесь товары которые подгружаются, но не обязательно отображаются
//       this.allProducts = []; // здесь товары которые отображаются
//       this.filtered = []; //сюда попадает товар (объект товара при фильтрации)
//       this._init() // метод инициализирующий список (корзины или товара каталога)
//   }
//   getJson(url){ // метод обрабатывающий GET запрос к ресурсу по соответствующему url или по заданному url (false тернарника)
//       return fetch(url ? url : `${API + this.url}`)
//           .then(result => result.json())
//           .catch(error => console.log(error));
//   }
//   handleData(data){ // метод получающий товары от сервера после запроса (getJson(url)) и преобразующ его в новый массив объектов
//       this.products = [...data];
//       this._render();
//   }
//   _init(){// для каждого дочернего класса будет свой метод _init() здесь пока заглушка.
//       return false
//   }
//   // метод находит объект из массива this.allProducts по id
//   getItem(id){
//       return this.allProducts.find(el => el.id_product === id)
//   }
//   // считает общую сумму товаров
//   calcSum(){
//       return this.allProducts.reduce((accum, item) => accum += item.price, 0);
//   }
//   // отображает элементы в каталоге (корзины или каталоге товаров на странице)
//   _render(){
//       const block = document.querySelector(this.container);
//       for(let product of this.products){
//           const prodObj = new list[this.constructor.name](product);
//           this.allProducts.push(prodObj);
//           this.filtered.push(prodObj)
//           block.insertAdjacentHTML('beforeend', prodObj.render());
//       }
//   }
//   // в случае поиска с помощью регулярных выражений отображает только подходящие товары
//   filter(value){
//       const regexp = new RegExp(value, 'i');
//       this.filtered = this.allProducts.filter(product => regexp.test(product.product_name));
//       this.allProducts.forEach(el => {
//           const block = document.querySelector(`.product-item[data-id="${el.id_product}"]`);
//           if(!this.filtered.includes(el)){
//               block.classList.add('invisible');
//           } else {
//               block.classList.remove('invisible');
//           }
//       })
//   }

// }

// // класс продукта родитель для классов товара каталога и товара корзины
// class Item  {
//   constructor(product, img = 'https://via.placeholder.com/200x150') {
//     this.product_name = product.product_name;
//     this.price = product.price;
//     this.id_product = product.id_product;
//     this.img = img;
//   }
//   render() {
//     return `<div class="product-item" data-id="${this.id_product}">
//           <img src="${this.img}" alt="${this.product_name}">
//           <h3>${this.product_name}</h3>
//           <p>${this.price}</p> 
//           <button class="buy-btn" data-id="${this.id_product}">Добавить</button>
//       </div>`

//   }
// }

// // класс ребенок класса List - класс каталога товаров на странице 
// class ProductsList extends List{
//   constructor(cart, url=`/catalogData.json`, container='.products'){
//       super(url, container);
//       this.cart = cart;
//       this.getJson()
//           .then(data => this.handleData(data));
//   }
//   // вешаем обработчик событий на контейнер товаров на клик по кнопке добавить товар и поиск товара 
//   _init(){
//       document.querySelector(this.container).addEventListener('click', e => {
//           if(e.target.classList.contains('buy-btn')){
//               this.cart.addProduct(this.getItem(+e.target.dataset.id))
//           }
//       });
//       document.querySelector('.search-form').addEventListener('submit', e => {
//           e.preventDefault();
//           this.filter(document.querySelector('.search-field').value);
//       })
//   }
// }

// // класс ребенок от класса Item класс товара каталога
// class ProductItem extends Item{
//     /*constructor(url=)*/
// }

// // класс ребенок от класса List класс нашей корзины
// class Cart extends List {
//   constructor(url='/getBasket.json', container = '.cart__container'){
//       super(url, container); // наследование свойств от родителя
//       this.getJson()
//           .then(data => this.handleData(data.contents))
//   }
//   // метод добавления товаров в корзину
//   addProduct(product){
//       this.getJson(`${API}/addToBasket.json`) // запрос на сервер за товарами в корзине
//           .then(data => {
//               if(data.result){
//                   let find = this.getItem(product.id_product);
//                   if(find){
//                       find.quantity++;
//                       this._updateCart(find);
//                   } else {
//                       let cartProd = Object.assign({quantity: 1}, product);
//                       this.products = [cartProd];
//                       this._render()
//                   }
//               } else {
//                   alert('Error!')
//               }
//           })
//   }
//   // метод удаления товаров из корзины
//   removeProduct(product){
//       this.getJson(`${API}/deleteFromBasket.json`)
//           .then(data => {
//               if(data.result){
//                   if(product.quantity > 1){
//                       product.quantity--;
//                       this._updateCart(product);
//                   } else {
//                       this.allProducts.splice(this.allProducts.indexOf(product), 1);
//                       document.querySelector(`.product__cart[data-id="${product.id_product}"]`).remove()
//                   }
//               } else {
//                   alert('Error!')
//               }
//           })
//   }
//   // метод обновления товара в корзине у которого изменились свойства (увеличилось или уменьшилось число, товар удален, товар добавлен и т.д.)
//   _updateCart(product){
//       let block = document.querySelector(`.product__cart[data-id="${product.id_product}"]`);
//       block.querySelector(`.product-quantity`).textContent = `Quantity: ${product.quantity}`;
//       block.querySelector(`.product-price`).textContent = `${product.quantity*product.price}`;
//   }
//   _init(){
//       document.querySelector(this.container).addEventListener('click', e => {
//           if(e.target.classList.contains('del-btn')){
//               this.removeProduct(this.getItem(+e.target.dataset.id))
//           }
//       });
//       document.querySelector('.btn-cart').addEventListener('click', () => {
//           document.querySelector(this.container).classList.toggle('invisible');
//       })
//   }
// }

// // класс CartItem ребенок класса Item - класс товара корзины 
// class CartItem extends Item {
//   constructor(el, img = 'https://via.placeholder.com/50x100'){
//       super(el, img);
//       this.quantity = el.quantity;
//   }
//   render(){
//       return `<div class="product__cart" data-id="${this.id_product}">
//       <div class="product__cart_left">
//         <img src="${this.img}" alt="Some image">
//         <div class="left__text">
//           <h4>${this.product_name}</h4>
//           <h5 class="product-quantity">Quantity: ${this.quantity}</h5>
//           <p>$ ${this.price} each</p> 
//         </div>
//       </div>
//       <div class="product__cart_right">
//         <h4>$<span class="product-price">${this.price}</span></h4>
//         <div class="del-btn" data-id="${this.id_product}">&times;</div>
//       </div>
//     </div>`
//   }
// }
// // объект позволяющий создавать нужный товар для каталога или корзины, своего рода словарь
// let list = {
//   ProductsList: ProductItem,
//   Cart: CartItem
// };

// const cart = new Cart();
// const products = new ProductsList(cart);

// products.getJson(`getProducts.json`).then(data => products.handleData(data));


