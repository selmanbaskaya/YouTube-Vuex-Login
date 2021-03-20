<template>
  <div v-if="getIsLogin">
	<button type="submit" class="btn btn-danger" @click="logout">Logout</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
	computed: {
		...mapGetters(['getIsLogin'])
	},
	methods: {
		...mapActions(['logoutStore']),
		logout() {
			this.logoutStore();
		}
	}
}
</script>

<style>

</style>