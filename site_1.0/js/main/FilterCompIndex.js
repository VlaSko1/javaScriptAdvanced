Vue.component('filter-el', {
    data(){
        return {
            userSearch: ''
        }
    },
    template: `<form class="header__form" action="#" @submit.prevent="$parent.$refs.products.filter(userSearch)">
                    <browse ref="browse"></browse>
                    <input class="header__form-input" placeholder="Search for Item..." type="text" v-model=" userSearch">
                    <button class="header__form-button" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                </form>`

});