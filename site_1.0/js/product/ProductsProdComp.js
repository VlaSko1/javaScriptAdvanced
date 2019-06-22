Vue.component('products-prod', {
  data(){
    return {
        catalogUrl: 'js/product/catalogDataProduct.json',
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
  template: `<div class="product__main__center__product">
                <product-prod 
                v-for="product of filtered"
                :key="product.id_product"
                :product="product"></product-prod>
            </div>`
});
Vue.component('product-prod', {
   props: ['product'],
   template: `<div class="products__product" id="product.id_product">
                    <a href="single-page.html" class="product__link">
                        <img class="product__img" :src="product.img_product" :alt="product.name_product">
                    </a>
                    <div class="product__info">
                        <a href="single-page.html" class="product__text">{{product.name_product}}</a>
                        <span class="product__cost"><span>$</span>{{product.cost_product}}</span>
                    </div> 
                    <div class="product__actions">
                        <a href="#" class="product__add"  @click.prevent="$root.$refs.cart.addProduct(product)">
                        <img src="img/white_cart.svg" alt="cart_add">Add to Cart</a>
                        <a href="#" class="product__action__circle-white"><img src="img/arrows_circle.svg" alt="arrows_circle.svg"></a>
                        <a href="#" class="product__action__heart-white"><img src="img/heart.svg" alt="heart.svg"></a>
                    </div>
            </div>`,
});
