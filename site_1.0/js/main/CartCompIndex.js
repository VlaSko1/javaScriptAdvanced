Vue.component('cart', {
    data(){
      return {
          showCart: false,
          cartItems: [],
          cartUrl: 'js/main/cartDataIndex.json',
      }
    },
    computed: {
        showBlockCart(){
            return this.cartItems.length ? 1 : 0;
        },
        calcSum(){
            return this.cartItems.reduce((accum, item) => accum += item.cost_product*item.quantity, 0);
        },
        calcCount(){
            return this.cartItems.reduce((accum, item) => accum += item.quantity, 0);
        }
    },
    mounted(){
        this.$parent.getJson(this.cartUrl)
            .then(data => {
                for (let el of data){
                    this.cartItems.push(el);
                }
            });
    },
    methods: {
        addProduct(product){
            this.$parent.getJson(`js/server_emit/request/addToBasket.json`)
                .then(data => {
                    if(data.result){
                        let find = this.cartItems.find(el => el.id_product === product.id_product);
                        if(find){
                            find.quantity++
                        } else {
                            let prod = Object.assign({quantity: 1}, product);
                            this.cartItems.push(prod);
                        }
                    }
                })
        },
        remove(product){
            this.$parent.getJson(`js/server_emit/request/deleteFromBasket.json`)
                .then(data => {
                    if(data.result){
                        if(product.quantity > 1){
                            product.quantity--
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(product), 1);
        
                            
                        }
                    }
                })
        },
    },

  
    template:`<div class="header__right-img" 
                        @mouseover="showCart = !showCart"
                        @mouseout="showCart = !showCart">
                    <a href="cart.html"> 
                    <img  src="img/cart.svg" alt="cart"></a>
                    <div class="cart__count" v-show="showBlockCart">{{calcCount}}</div>
                    <div class="drop__cart"  v-show="showCart" >
                    <p class="cart__text" v-if="!cartItems.length">Cart is empty</p>
                    <cart-item 
                        v-for="item of cartItems"
                        :key="item.id_product"
                        :cart-item="item"
                        @remove="remove"
                    ></cart-item>                        
                        <div class="drop__cart__total">
                            <h6>TOTAL</h6>
                            <h6>{{calcSum}}</h6>
                        </div> 
                        <a href="checkout.html" class="drop__cart__product__checout">Checkout</a> 
                        <a href="cart.html" class="drop__cart__product__go-to-cart">Go to cart</a> </div>
                </div>`,  
});

Vue.component('cart-item', {
    props: ['cartItem'],
    methods: {
        getMinImg(img){
            return img.replace(/.jpg/, '-mini.jpg');
        }
    },
    template: `<div class="drop__cart__product">
                            <a href="single-page.html"><img :src="getMinImg(cartItem.img_product)" :alt="cartItem.name_product" class="cart__product__img"></a>
                            <div class="product__text"> <a href="single-page.html" class="product__text__h6">{{cartItem.name_product}}</a>
                                <p class="product__text__score"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star-half-o" aria-hidden="true"></i> </p>
                                <p class="product__text__cost">{{cartItem.quantity}}<span> x $</span>{{cartItem.cost_product}}</p>
                            </div>
                            <div class="product__delite"  @click="$emit('remove', cartItem)"> <i class="fa fa-times-circle" aria-hidden="true"></i></div>
                        </div>`
})