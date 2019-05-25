Vue.component('filter-catalog', {
  props: ['userSearch'],
  template: ` <form action="#" class="search-form" @submit.prevent="$parent.$emit('filter(userSearch)')">
                  <input type="text" class="search-field" v-model="userSearch">
                  <button class="btn-search" type="submit">
                      <i class="fas fa-search"></i>
                  </button>
              </form>`
});