<template>
  <div v-if="!getIsLogin">
	<div class="form-group">
		<label>Username</label>
		<input type="text" v-model="username" placeholder="Enter username">
	</div>
	<div class="form-group">
		<label>Password</label>
		<input type="password" v-model="password" placeholder="Enter password">
	</div>
	<button class="btn btn-info" @click="login" type="submit">Login</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	data() {
		return {
			username: '',
			password: ''
		}
	},
	computed: {
		...mapGetters(['getIsLogin'])
	},
	methods: {
		...mapActions(['updateIsLogin']),
		login() {
			this.updateIsLogin([this.username, this.password]);
		}
	}
}
</script>

<style>

</style>