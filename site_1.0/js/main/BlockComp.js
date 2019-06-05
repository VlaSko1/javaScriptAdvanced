Vue.component('browse', {
  data(){
    return {
      showBrowse: false,
    }
  },
  template: `<div class="header__form-text" 
            @mouseover="showBrowse = !showBrowse"
            @mouseout="showBrowse = !showBrowse"
            >Browse <i class="fa fa-sort-desc" aria-hidden="true"></i>
              <div class="drop__browse" v-show="showBrowse">
                <h3 class="drop__heading">Women</h3>
                <ul class="drop__menu">
                  <li><a href="product.html" class="drop__link">Dresses</a></li>
                  <li><a href="product.html" class="drop__link">Tops</a></li>
                  <li><a href="product.html" class="drop__link">Sweaters/Knits</a></li>
                  <li><a href="product.html" class="drop__link">Jackets/Coats</a></li>
                  <li><a href="product.html" class="drop__link">Blazers</a></li>
                  <li><a href="product.html" class="drop__link">Denim</a></li>
                  <li><a href="product.html" class="drop__link">Leggings/Pants</a></li>
                  <li><a href="product.html" class="drop__link">Skirts/Shorts</a></li>
                  <li><a href="product.html" class="drop__link">Accessories </a></li>
                </ul>
                <h3 class="drop__heading">MAN</h3>
                <ul class="drop__menu">
                  <li><a href="product.html" class="drop__link">Dresses</a></li>
                  <li><a href="product.html" class="drop__link">Tops</a></li>
                  <li><a href="product.html" class="drop__link">Sweaters/Knits</a></li>
                </ul>
              </div>
            </div>`,

});

Vue.component('main_menu', {
  data(){
    return{
      showMan: false,
      showWomen: false,
      showKids: false,
      showAccessories: false,
      showFeatured: false,
      showDeals: false,
    }
  },
  methods:{
    timerStop(value) {
      setTimeout(!value, 200);
    }
  },
  template: `<ul class="menu container">
  <li class="menu__list"><a href="index.html" class="menu__link">Home</a></li>
  <li class="menu__list"
  @mouseover="showMan = !showMan"
  @mouseout="showMan = !showMan"
  ><a href="product.html" class="menu__link">Man</a>
  <div class="drop" v-show="showMan">
      <div class="drop-flex">
          <h3 class="drop__heading">MAN</h3>
          <ul class="drop__menu">
              <li><a href="product.html" class="drop__link">Dresses</a></li>
              <li><a href="product.html" class="drop__link">Tops</a></li>
              <li><a href="product.html" class="drop__link">Sweaters/Knits</a></li>   
              <li><a href="product.html" class="drop__link">Jackets/Coats</a></li>
              <li><a href="product.html" class="drop__link">Blazers</a></li>
              <li><a href="product.html" class="drop__link">Denim</a></li>
              <li><a href="product.html" class="drop__link">Leggings/Pants</a></li>
              <li><a href="product.html" class="drop__link">Skirts/Shorts</a></li>        
              <li><a href="product.html" class="drop__link">Accessories </a></li>
              
          </ul>
      </div>
      <div class="drop-flex">
              <h3 class="drop__heading">MAN</h3>
              <ul class="drop__menu">
                  <li><a href="product.html" class="drop__link">Dresses</a></li>
                  <li><a href="product.html" class="drop__link">Tops</a></li>
                  <li><a href="product.html" class="drop__link">Sweaters/Knits</a></li>   
                  <li><a href="product.html" class="drop__link">Jackets/Coats</a></li>
                  <li><a href="product.html" class="drop__link">Blazers</a></li>
                  <li><a href="product.html" class="drop__link">Denim</a></li>
                  <li><a href="product.html" class="drop__link">Leggings/Pants</a></li>
                  <li><a href="product.html" class="drop__link">Skirts/Shorts</a></li>        
                  <li><a href="product.html" class="drop__link">Accessories </a></li>
                  
              </ul>
             
      </div>
      
  </div></li>
  <li class="menu__list"
  @mouseover="showWomen = !showWomen"
  @mouseout="showWomen = !showWomen"
  ><a href="product.html" class="menu__link">Women</a>
      <div class="drop" v-show="showWomen">
              <div class="drop-flex">
                  <h3 class="drop__heading">WOMAN</h3>
                  <ul class="drop__menu">
                      <li><a href="product.html" class="drop__link">Dresses</a></li>
                      <li><a href="product.html" class="drop__link">Tops</a></li>
                      <li><a href="product.html" class="drop__link">Sweaters/Knits</a></li>   
                      <li><a href="product.html" class="drop__link">Jackets/Coats</a></li>
                      <li><a href="product.html" class="drop__link">Blazers</a></li>
                      <li><a href="product.html" class="drop__link">Denim</a></li>
                      <li><a href="product.html" class="drop__link">Leggings/Pants</a></li>
                      <li><a href="product.html" class="drop__link">Skirts/Shorts</a></li>        
                      <li><a href="product.html" class="drop__link">Accessories </a></li>
                      
                  </ul>
              </div>
              <div class="drop-flex">
                      <h3 class="drop__heading">WOMAN</h3>
                      <ul class="drop__menu">
                          <li><a href="product.html" class="drop__link">Dresses</a></li>
                          <li><a href="product.html" class="drop__link">Tops</a></li>
                          <li><a href="product.html" class="drop__link">Sweaters/Knits</a></li>   
                          <li><a href="product.html" class="drop__link">Jackets/Coats</a></li>
                          <li><a href="product.html" class="drop__link">Blazers</a></li>
                          <li><a href="product.html" class="drop__link">Denim</a></li>
                         
                          
                      </ul>
                     
              </div>
              
          </div></li>
  <li class="menu__list"
  @mouseover="showKids = !showKids"
  @mouseout="showKids = !showKids"
  ><a href="product.html" class="menu__link">Kids</a>
      <div class="drop" v-show="showKids">
              <div class="drop-flex">
                  <h3 class="drop__heading">KIDS</h3>
                  <ul class="drop__menu">
                      <li><a href="product.html" class="drop__link">Dresses</a></li>
                      <li><a href="product.html" class="drop__link">Tops</a></li>
                      <li><a href="product.html" class="drop__link">Sweaters/Knits</a></li>   
                      <li><a href="product.html" class="drop__link">Jackets/Coats</a></li>
                      <li><a href="product.html" class="drop__link">Blazers</a></li>
                      <li><a href="product.html" class="drop__link">Denim</a></li>
                      <li><a href="product.html" class="drop__link">Leggings/Pants</a></li>
                      <li><a href="product.html" class="drop__link">Skirts/Shorts</a></li>        
                      <li><a href="product.html" class="drop__link">Accessories </a></li>
                      
                  </ul>
              </div>
              <div class="drop-flex">
                      <h3 class="drop__heading">KIDS</h3>
                      <ul class="drop__menu">
                          <li><a href="product.html" class="drop__link">Dresses</a></li>
                          <li><a href="product.html" class="drop__link">Tops</a></li>
                          <li><a href="product.html" class="drop__link">Sweaters/Knits</a></li>   
                          <li><a href="product.html" class="drop__link">Jackets/Coats</a></li>
                          <li><a href="product.html" class="drop__link">Blazers</a></li>
                          <li><a href="product.html" class="drop__link">Denim</a></li>
                          <li><a href="product.html" class="drop__link">Leggings/Pants</a></li>
                          <li><a href="product.html" class="drop__link">Skirts/Shorts</a></li>        
                          <li><a href="product.html" class="drop__link">Accessories </a></li>
                          
                      </ul>
                     
              </div>
              
          </div></li>
  <li class="menu__list"
  @mouseover="showAccessories = !showAccessories"
  @mouseout="showAccessories = !showAccessories"
  ><a href="product.html" class="menu__link">Accessories</a><div class="drop" v-show="showAccessories">
          <div class="drop-flex" >
              <h3 class="drop__heading">Accessories</h3>
              <ul class="drop__menu">
                  <li><a href="product.html" class="drop__link">Dresses</a></li>
                  <li><a href="product.html" class="drop__link">Tops</a></li>
                  <li><a href="product.html" class="drop__link">Sweaters/Knits</a></li>   
                  <li><a href="product.html" class="drop__link">Jackets/Coats</a></li>
                  <li><a href="product.html" class="drop__link">Blazers</a></li>
                  <li><a href="product.html" class="drop__link">Denim</a></li>
                  <li><a href="product.html" class="drop__link">Leggings/Pants</a></li>
                  <li><a href="product.html" class="drop__link">Skirts/Shorts</a></li>        
                  <li><a href="product.html" class="drop__link">Accessories </a></li>
                  
              </ul>
          </div>
          <div class="drop-flex">
                  <h3 class="drop__heading">Accessories</h3>
                  <ul class="drop__menu">
                      <li><a href="product.html" class="drop__link">Dresses</a></li>
                      <li><a href="product.html" class="drop__link">Tops</a></li>
                      <li><a href="product.html" class="drop__link">Sweaters/Knits</a></li>   
                      <li><a href="product.html" class="drop__link">Jackets/Coats</a></li>
                      <li><a href="product.html" class="drop__link">Blazers</a></li>
                      <li><a href="product.html" class="drop__link">Denim</a></li>
                      <li><a href="product.html" class="drop__link">Leggings/Pants</a></li>
                      <li><a href="product.html" class="drop__link">Skirts/Shorts</a></li>        
                      <li><a href="product.html" class="drop__link">Accessories </a></li>
                      
                  </ul>
                 
          </div>
          
      </div></li>
  <li class="menu__list"
  @mouseover="showFeatured = !showFeatured"
  @mouseout="showFeatured = !showFeatured"
  ><a href="product.html" class="menu__link">Featured</a>
      <div class="drop drop__last" v-show="showFeatured">
              <div class="drop-flex">
                  <h3 class="drop__heading">Featured</h3>
                  <ul class="drop__menu">
                      <li><a href="product.html" class="drop__link">Dresses</a></li>
                      <li><a href="product.html" class="drop__link">Tops</a></li>
                      <li><a href="product.html" class="drop__link">Sweaters/Knits</a></li>   
                      <li><a href="product.html" class="drop__link">Jackets/Coats</a></li>
                      <li><a href="product.html" class="drop__link">Blazers</a></li>
                      <li><a href="product.html" class="drop__link">Denim</a></li>
                      <li><a href="product.html" class="drop__link">Leggings/Pants</a></li>
                      <li><a href="product.html" class="drop__link">Skirts/Shorts</a></li>        
                      <li><a href="product.html" class="drop__link">Accessories </a></li>
                      
                  </ul>
              </div>
              <div class="drop-flex">
                      <h3 class="drop__heading">MAN</h3>
                      <ul class="drop__menu">
                          <li><a href="product.html" class="drop__link">Dresses</a></li>
                          <li><a href="product.html" class="drop__link">Tops</a></li>
                          <li><a href="product.html" class="drop__link">Sweaters/Knits</a></li>   
                          <li><a href="product.html" class="drop__link">Jackets/Coats</a></li>
                          <li><a href="product.html" class="drop__link">Blazers</a></li>
                          <li><a href="product.html" class="drop__link">Denim</a></li>
                          <li><a href="product.html" class="drop__link">Leggings/Pants</a></li>
                          <li><a href="product.html" class="drop__link">Skirts/Shorts</a></li>        
                          <li><a href="product.html" class="drop__link">Accessories </a></li>
                          
                      </ul>
                     
              </div>
              
          </div></li>
  <li class="menu__list"
  @mouseover="showDeals = !showDeals"
  @mouseout="showDeals = !showDeals"
  ><a href="product.html" class="menu__link">Hot Deals</a>
      <div class="drop drop__last" v-show="showDeals">
              <div class="drop-flex">
                  <h3 class="drop__heading">Hot Deals</h3>
                  <ul class="drop__menu">
                      <li><a href="product.html" class="drop__link">Dresses</a></li>
                      <li><a href="product.html" class="drop__link">Tops</a></li>
                      <li><a href="product.html" class="drop__link">Sweaters/Knits</a></li>   
                      <li><a href="product.html" class="drop__link">Jackets/Coats</a></li>
                      <li><a href="product.html" class="drop__link">Blazers</a></li>
                      <li><a href="product.html" class="drop__link">Denim</a></li>
                      <li><a href="product.html" class="drop__link">Leggings/Pants</a></li>
                      <li><a href="product.html" class="drop__link">Skirts/Shorts</a></li>        
                      <li><a href="product.html" class="drop__link">Accessories </a></li>
                      
                  </ul>
              </div>
              <div class="drop-flex">
                      <h3 class="drop__heading">Hot Deals</h3>
                      <ul class="drop__menu">
                          <li><a href="#" class="drop__link">Dresses</a></li>
                          <li><a href="product.html" class="drop__link">Tops</a></li>
                          <li><a href="product.html" class="drop__link">Sweaters/Knits</a></li>   
                          <li><a href="product.html" class="drop__link">Jackets/Coats</a></li>
                          <li><a href="product.html" class="drop__link">Blazers</a></li>
                          <li><a href="product.html" class="drop__link">Denim</a></li>
                          <li><a href="product.html" class="drop__link">Leggings/Pants</a></li>
                          <li><a href="product.html" class="drop__link">Skirts/Shorts</a></li>        
                          <li><a href="product.html" class="drop__link">Accessories </a></li>
                          
                      </ul>
                     
              </div>
              
          </div></li>
</ul>`
});