<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <savemenu
                :menu="menuinfrom"
                @submit="onForsave"></savemenu>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col">
                <menulist
                :menulist="menulist"
                @edit="onEditClick"
                @remove="onRemoveClick"></menulist>
            </div>
        </div>
    </div>
</template>

<script>
import Menulist from './Menulist'
import Savemenu from './Savemenu'
import { mapGetters, mapActions } from 'vuex'

const initialData = () => {
  return {
    menuinfrom: {
      id: null,
      name: '',
      price: null
    }
  }
}

export default {
  components: {
    Menulist,
    Savemenu
  },
  computed: mapGetters({
    menulist: 'getProducts'
  }),
  data: initialData,
  methods: {
    ...mapActions([
      'saveProduct',
      'deleteProduct'
    ]),
    onForsave (menu) {
      this.saveProduct(menu).then(() => this.resetMenuinfrom())
    },
    resetMenuinfrom () {
      this.menuinfrom = initialData().menuinfrom
    },
    onEditClick (menu) {
      // Object.assign({}, menu)
      this.menuinfrom = { ...menu }
    },
    onRemoveClick (menuId) {
      this.deleteProduct(menuId)
      if (menuId === this.menuinfrom.id) {
        this.resetMenuinfrom()
      }
    }
  }
}
</script>
