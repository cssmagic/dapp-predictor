import Vue from 'vue'
import Router from 'vue-router'
import All from './view/all.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			// 所有预言	#/	首页
			// - 时间排序	#/?sortBy=created
			// - 热度排序	#/?sortBy=liked
			path: '/',
			name: 'all',
			component: All,
		},
		{
			// 我的预言	#/mine
			path: '/mine',
			name: 'mine',
			component: () => import(/* webpackChunkName: "mine" */ './view/mine.vue'),
		},
		{
			// 功能介绍	#/help
			path: '/help',
			name: 'help',
			component: () => import(/* webpackChunkName: "help" */ './view/help.vue'),
		},
		{
			// 发布预言	#/publish
			path: '/publish',
			name: 'publish',
			component: () => import(/* webpackChunkName: "publish" */ './view/publish.vue'),
		},
		{
			// 用户协议	#/agreement
			path: '/agreement',
			name: 'agreement',
			component: () => import(/* webpackChunkName: "agreement" */ './view/agreement.vue'),
		},
	],
})
// 预言详情页	#/msg/123	分享着陆页
// 用户详情页	#/user/n1foobar	备用
