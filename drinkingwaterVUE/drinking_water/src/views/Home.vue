<template>
  <div class="home">
    <h1>Tere tulemast sinu veejoomise äppi!</h1>
    <img alt="Water logo" src="../assets/waterLogo.jpeg">
    <br><br>
      <button>Joo vett!</button>
  </div>
</template>

<script>
import Drinkingwater from '@/components/Drinkingwater.vue'

export default {
  name: 'Home',
  components: {
    Drinkingwater
  }
}
</script>
