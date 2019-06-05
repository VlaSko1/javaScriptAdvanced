Vue.component('products', {
  data(){
    return {
        catalogUrl: 'js/main/catalogDataIndex.json',
        products: [],
        filtered: [],
        
    }
  },
   mounted(){
       this.$parent.getJson(this.catalogUrl)
           .then(data => {
               for (let el of data){
                   this.products.push(el);
                   this.filtered.push(el);
               }
           });
       
   },
   methods: {
       filter(value){
           let regexp = new RegExp(value, 'i');
           this.filtered = this.products.filter(el => regexp.test(el.name_product));
       }
   },
  template: `<div class="products container">
                <product 
                v-for="product of filtered"
                :key="product.id_product"
                :product="product"></product>
            </div>`
});
Vue.component('product', {
   props: ['product'],
   template: `<div class="products__product" :id="product.id_product">
                  <a href="single-page.html" class="product__link"><img class="product__img" :src="product.img_product" :alt="product.name_product"></a>
                  <div class="product__info"> <a href="single-page.html" class="product__text">{{product.name_product}}</a> <span class="product__cost"><span>$</span>{{product.cost_product}}</span> </div>
                  <a href="#" class="product__add__main" @click.prevent="$root.$refs.cart.addProduct(product)"><img src="img/white_cart.svg" alt="cart_add">Add to Cart</a>
              </div>`,
});
