<template>
  <div>
    <h1>About</h1>

    <p v-if="isLogin === true">{{userName}}</p>
  </div>
</template>
<style>

</style>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['userName', 'isLogin'])
  }
}
</script>
