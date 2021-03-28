<template>
  <div>
	<div class="alert alert-danger" v-if="getLoginMessage">
		Username and/or password incorrect!
	</div>
	<div class="alert alert-success" v-if="getIsLogin">
		Login successfully!
	</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	computed: {
		...mapGetters(['getIsLogin', 'getLoginMessage'])
	}
}
</script>

<style>

</style>
