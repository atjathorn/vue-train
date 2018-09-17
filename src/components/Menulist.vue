<template>
    <div class="container">
        <div class="row" style="text-align: center;">
            <div class="col">
                <h1>Menulist</h1>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="menu in menulist" :key="menu.id" @click.prevent="onEdit(menu)">
                            <th>{{ menu.id }}</th>
                            <th>{{ menu.name }}</th>
                            <th><a href="#" @click.prevent.stop="onRemove(menu.id)">x</a></th>
                        </tr>
                    </tbody>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  props: ['menulist'],
  methods: {
    onEdit (menu) {
      this.$emit('edit', menu)
      console.log(menu)
    },
    onRemove (menuId) {
      this.$emit('remove', menuId)
      console.log(menuId)
    }
  }
}
</script>
