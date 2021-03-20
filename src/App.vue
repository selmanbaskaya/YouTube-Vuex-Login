<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
	<Message class="d-flex justify-content-center" />
	<Home />
	<LoginForm />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Home from './components/Home'
import Message from './components/Message'
import LoginForm from './components/LoginForm'

export default {
  name: 'App',
  components: {
	Home,
	Message,
	LoginForm
  },
  computed: {
	...mapGetters(['getIsLogin', 'getLoginMessage']),
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
