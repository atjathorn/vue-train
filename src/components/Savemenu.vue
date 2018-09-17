<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <form>
                <div class="form-group">
                    <label for="name">name</label>
                    <input type="text" v-model="menu.name" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name">
                </div>
                <div class="form-group">
                    <label for="price">price</label>
                    <input type="number" v-model="menu.price" class="form-control" id="price">
                </div>
                <button type="submit" @click.prevent="onSubmit" class="btn btn-primary">{{menu.id ? 'Update' : 'Add'}} menu</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['menu'],
  methods: {
    onSubmit () {
      this.$emit('submit', this.menu)
    }
  }
}
</script>
