Vue.component('products', {
  props: ['products', 'img', 'searchLine', 'filtered'],
  
  template: `<div class="products">
                <product 
                v-for="product of products"
                :key="product.id_products"
                :img="img"
                :product="product"
                :search-line = "searchLine"
                ></product>
              </div>`,

});

Vue.component('product', {
  props: ['product', 'img'],
  template: `<div class="product-item" :id="product.id_product">
                <img :src="img" :alt="product.product_name">
                <div class="desc">
                    <h3>{{product.product_name}}</h3>
                    <p>{{product.price}}</p>
                    <button class="buy-btn" @click="$parent.$emit('add-product', product)">Купить</button>
                </div>
              </div>`
})