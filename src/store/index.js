import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	username: 'admin',
	password: 'admin',
	isLogin: false,
	loginMessage: false,
};

const getters = {
	getIsLogin: (state) => {
		return state.isLogin;
	},
	getLoginMessage: (state) => {
		return state.loginMessage;
	},
};
const actions = {
	updateIsLogin: ({commit}, [ username, password]) => {
		commit('setIsLogin', [username, password]);
	},
	logoutStore: ({commit}) => {
		commit('logoutStore');
	}
};
const mutations = {
	setIsLogin: (state, [ username, password]) => {
		if(state.username == username && state.password == password) {
			state.isLogin = true;
			state.loginMessage = false;
		}
		else {
			state.isLogin = false;
			state.loginMessage = true;
		}
	},
	logoutStore: (state) => {
		state.isLogin = false;
		state.loginMessage = false;
	}
};

const store = new Vuex.Store({
	state,
	getters,
	actions,
	mutations
});

export default store;
