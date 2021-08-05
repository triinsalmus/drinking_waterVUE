<template>
  <div>
    <h1>The daily tracker for {{"Triin"}}</h1>
    <form>
      <div>
        <button @click="totalMlDeduct(totalMl, 250)">-</button>
        <h2>{{ totalMl }}</h2>
      </div>
      <button @click="total(totalMl,250)">250 ml</button>
      <button @click="total(totalMl,300)">300 ml</button>
      <button @click="total(totalMl,500)">500 ml</button>
    </form>
    <br><br>
    <button>Salvesta oma päevatöö</button>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      'totalMl': 0,
    }
  },
  methods: {
    totalMlDeduct(total, amountDeducted) {
      this.totalMl <= amountDeducted || this.totalMl <= 0 ? this.totalMl = 0 : this.totalMl = this.totalMl - amountDeducted;
    },
    total(total, amountAdded) {
      this.totalMl = this.totalMl + amountAdded;
    },
  },
}

</script>