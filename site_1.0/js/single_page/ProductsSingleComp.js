Vue.component('products-single', {
  data(){
    return {
        catalogUrl: 'js/single_page/catalogDataSingle.json',
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
   
  template: `<section class="product-also container">
                <h2 class="product-also__h2">you may like also</h2>
                <product-single
                v-for="product of filtered"
                :key="product.id_product"
                :product="product"></product-single>

            </section>`
});


Vue.component('product-single', {
   props: ['product'],
   template: `<div class="product-also__product">
                <a href="#" class="also__product__link"><img :src="product.img_product" :alt="product.name_product"  class="all_width"></a>
                <div class="also__product__text">
                    <a href="#" class="also__product__text__header">{{product.name_product}}</a>
                    <div class="also__product__text__cost">
                        <p class="also__product__text__cost__value"><span><span>$</span>{{product.cost_product}}</span></p>
                        <p class="also__product__text__cost__star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                        </p>
                    </div>
                </div>
                <a href="#" class="product__add__main" @click.prevent="$root.$refs.cart.addProduct(product)"><img src="img/white_cart.svg" alt="cart_add">Add to Cart</a>
            </div>`,
});
