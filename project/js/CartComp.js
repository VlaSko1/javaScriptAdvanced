Vue.component('cart', {
  props: ['productsCart', 'img', 'isVisibleCart'],
  template: `<div id="cart__container" class="cart__container"  v-show="isVisibleCart">
            <p v-if="!productsCart.length">Cart is empty</p>
            <cart-item 
            v-for="item of productsCart"
            :key="item.id_products"
            :img="img"
            :cart-item="item"
            ></cart-item> 
    </div>`
});
Vue.component('cart-item', {
  props: ['cartItem', 'img'],
  template: `<div class="product__cart" id="cart"> 
              <div class="product__cart_left">
            <img :src="img" alt="cartItem.product_name">
              <div class="left__text">
              <h4>{{cartItem.product_name}}</h4>
              <h5 class="product-quantity">Quantity: {{cartItem.quantity}}</h5>
                <p>$ {{cartItem.price}} each</p> 
            </div>
            </div>
            <div class="product__cart_right">
            <h4>$<span class="product-price"> {{cartItem.price * cartItem.quantity}}</span></h4>
            <div class="del-btn" @click="$parent.$emit('remove', cartItem)">&times</div>
            </div>
            </div>`
})