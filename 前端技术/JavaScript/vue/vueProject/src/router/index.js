import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'


// vue router 路由配置文件
// vue 配置文件需要


Vue.use(Router)
/**
 * 静态路由
 * @type {*[]}
 */
export const constantRouterMap = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	}
]
/**
 * 动态路由（根据用户的权限来设置不同的路由导航）
 * @type {Array}
 */
export const asyncRouterMap = []

export default new Router({
	// mode: 'history', // 需要服务端支持
	routes: constantRouterMap
})
