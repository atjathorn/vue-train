<template>
    <div class="container">
        <div class="row" style="text-align: center;">
            <div class="col">
                <h1>Menu</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3" v-for="menu in menulist" :key="menu.id">
                <div class="card">
                    <div class="card-body">
                        <h5>{{ menu.name }}</h5>
                        <p>{{ menu.price }}</p>
                        <a href="">.</a>
                        <button v-if="menu.count == 0" disabled> Sold out </button>
                        <button v-else> Add </button>
                        <button disabled> Cancel </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    menulist: 'getProducts'
  })
}
</script>
