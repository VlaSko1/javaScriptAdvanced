Vue.component('cart-page', {
  data() {
    return {
      synchData: this.$root.$refs.cart,
    }
  },
  
  
  template:`<div class="component">
  <section class="shopping__cart container">
      <ul class="shopping__cart__header">
          <li class="shopping__cart__header__list">Product Details</li>
          <li class="shopping__cart__header__list">unite Price</li>
          <li class="shopping__cart__header__list">Quantity</li>
          <li class="shopping__cart__header__list">shipping</li>
          <li class="shopping__cart__header__list">Subtotal</li>
          <li class="shopping__cart__header__list">ACTION</li>
      </ul>
      <h4 v-if="!synchData.cartItems.length" class="cart__page">Cart is empty</h4>
      <cart-page-product
          v-for="item of synchData.cartItems"
          :key="item.id_product"
          :product="item"
          @input="item.quantity = $event > 1 ? +$event : 1"
          @remove="synchData.remove"
          
      ></cart-page-product>
      
          <div class="shopping__cart__button__block">
              <button class="button__clear" @click="synchData.clearCart">cLEAR SHOPPING CART</button>
              <a href="product.html" class="button__continue">cONTINUE sHOPPING</a>
          </div>    
      
  </section>
  <div class="check__container container">
      <section class="check__address">
          <h3 class="check__address__h3">Shipping Adress</h3>

          <form action="#" class="check__address__form">
              <select>
                  <option selected>Bangladesh</option>
                  <option>Russia</option>
                  <option>England</option>
                  <option>China</option>
              </select>
              <input type="text" class="check__address__state" placeholder="State">
              <input type="text" class="check__address__postcode" placeholder="Postcode / Zip">
              <a href="#" class="check__address__button">get a quote</a>
          </form>
      </section>
      <section class="check__discount">
              <h3 class="check__discount__h3">coupon  discount</h3>
              <p class="check__discount_text">Enter your coupon code if you have one</p>
              <form action="#" class="check__discount__form">
                  <input type="text" class="check__discount__state" placeholder="State">
              </form>
              <a href="#" class="check__discount__button">
                      Apply coupon
              </a>
      </section>
      <div class="check__checkout">
          <div class="check__checkout__h5"><span>Sub total</span><span><span>$</span>{{synchData.calcSum}}</span></div>
          <div class="check__checkout__h3"><span>GRAND TOTAL</span><span><span>$</span>{{synchData.calcSum}}</span></div>
          <div class="check__checkout_line"></div>
          <a href="checkout.html" class="check__checkout__button">proceed to checkout</a>
      </div>
  </div></div>`

});

 Vue.component('cart-page-product', {
   props: ['product'],
   methods: {
    onlyNumber(evt) {

      let charCode = evt.which ? evt.which : evt.keyCode;
      if(charCode > 31 && ((charCode < 48 || charCode > 57) && (charCode < 96 || charCode > 105) )){
          event.preventDefault(evt);
          return false;}
     
        return true;
      }
      
    
    
   },
   
  template: `<ul class="shopping__cart__product">
   <li class="shopping__cart__product__list">
       <a href="single-page.html"><img class="product__list__img" :src="product.img_product" :alt="product.name_product"></a>
       <div class="product__list__text">
           <h5 class="product__list__text__h5"><a href="single-page.html">{{product.name_product}}</a></h5>
           <p class="product__text__score">
                   <i class="fa fa-star" aria-hidden="true"></i>
                   <i class="fa fa-star" aria-hidden="true"></i>
                   <i class="fa fa-star" aria-hidden="true"></i>
                   <i class="fa fa-star" aria-hidden="true"></i>
                   <i class="fa fa-star-half-o" aria-hidden="true"></i>
               </p>
           <p class="product__list__text__data">Color:   <span>Red</span></p>
           <p class="product__list__text__data">Size:   <span>Xll</span></p>
       </div>

   </li>
   <li class="shopping__cart__product__list"><span><span>$</span>{{product.cost_product}}</span></li>
   <li class="shopping__cart__product__list">
      <input type="number" min="1" 
          :value="product.quantity"
          
          v-on:input="$emit('input', $event.target.value)"
          @keydown="onlyNumber"
          >
       
   </li>
   <li class="shopping__cart__product__list"><span>FREE</span></li>
   <li class="shopping__cart__product__list"><span><span>$</span>{{product.cost_product*product.quantity}}</span></li>
   <li class="shopping__cart__product__list">
       <div class="product__delite" 
       @click="$emit('remove', product)"
       > <span><i class="fa fa-times-circle" aria-hidden="true"></i></span>
       </div>
   </li>
</ul>`
 })