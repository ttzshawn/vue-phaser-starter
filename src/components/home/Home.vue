<template>
  <div class="container">
    <div>
      <header class="header">{{msg}}</header>
      <div id="content"></div>
    </div>
  </div>
</template>

<script>
import Game from '../../game'

window.game = new Game()

export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.header {
  position: absolute;
  top: 0;
  width: 100%;
  text-align: center;
  font-size: 22px;
}

</style>
