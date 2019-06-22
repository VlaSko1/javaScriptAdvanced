Vue.component('sidebar-el', {
  data(){
    return{
      sidebar1: true,
      sidebar2: false,
      sidebar3: false,
    }
  },
  template: `<section class="sidebar">
                  <div class="sidebar__element" >
                      <div class="sidebar__element__summary" @click="sidebar1=!sidebar1">
                          <h3 class="sidebar__nomen">Category</h3>
                          <div class="sidebar__content">
                              <i class="fa fa-caret-down" aria-hidden="true" v-show="!sidebar1"></i>
                              <i class="fa fa-caret-up" aria-hidden="true" v-show="sidebar1" style="color: #ef5b70">
                              </i>
                          </div>
                      </div>
                      <ul class="sidebar__list" v-show="sidebar1">
                          <li><a href="#">Accessories</a></li>
                          <li><a href="#">Bags</a></li>
                          <li><a href="#">Denim</a></li>
                          <li><a href="#">Hoodies & Sweatshirts</a></li>
                          <li><a href="#">Jackets & Coats</a></li>
                          <li><a href="#">Pants</a></li>
                          <li><a href="#">Polos</a></li>
                          <li><a href="#">Shirts</a></li>
                          <li><a href="#">Shoes</a></li>
                          <li><a href="#">Shorts</a></li>
                          <li><a href="#">Sweaters & Knits</a></li>
                          <li><a href="#">T-Shirts</a></li>
                          <li><a href="#">Tanks</a></li>
                      </ul>
                  </div>
                  <div class="sidebar__element">
                      <div class="sidebar__element__summary" @click="sidebar2=!sidebar2">
                          <h3 class="sidebar__nomen">BRAND</h3>
                          <div class="sidebar__content">
                              <i class="fa fa-caret-down" aria-hidden="true" v-show="!sidebar2"></i>
                              <i class="fa fa-caret-up" aria-hidden="true" v-show="sidebar2" style="color: #ef5b70">
                              </i>
                          </div>
                      </div>
                      <ul class="sidebar__list" v-show="sidebar2">
                          <li><a href="#">Accessories</a></li>
                          <li><a href="#">Bags</a></li>
                          <li><a href="#">Denim</a></li>
                          <li><a href="#">Hoodies & Sweatshirts</a></li>
                          <li><a href="#">Jackets & Coats</a></li>
                          <li><a href="#">Pants</a></li>
                          <li><a href="#">Polos</a></li>
                          <li><a href="#">Shirts</a></li>
                          <li><a href="#">Shoes</a></li>
                          <li><a href="#">Shorts</a></li>
                      </ul>
                  </div>
                  <div class="sidebar__element">
                      <div class="sidebar__element__summary" @click="sidebar3=!sidebar3">
                          <h3 class="sidebar__nomen">dESIGNER</h3>
                          <div class="sidebar__content">
                              <i class="fa fa-caret-down" aria-hidden="true" v-show="!sidebar3"></i>
                              <i class="fa fa-caret-up" aria-hidden="true" v-show="sidebar3" style="color: #ef5b70">
                              </i>
                          </div>
                      </div>
                      <ul class="sidebar__list" v-show="sidebar3">
                          <li><a href="#">Accessories</a></li>
                          <li><a href="#">Bags</a></li>
                          <li><a href="#">Denim</a></li>
                          <li><a href="#">Hoodies & Sweatshirts</a></li>
                          <li><a href="#">Jackets & Coats</a></li>
                          <li><a href="#">Pants</a></li>
                          <li><a href="#">Polos</a></li>
                      </ul>
                  </div>
            </section>`,
});