import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import navBar from '@/components/navBar/navBar.vue'
import search from '@/components/navBar/children/search'
// import mine from '@/components/navBar/children/mine'
import rankList from '@/components/rankList'
import recommend from '@/components/recommended'
import login from '@/components/login'
import register from '@/components/register'
import songList from '@/components/songList'
import player from '@/components/player'
import lostPage from '@/components/lostPage'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        // name: 'home',
        redirect: { name: 'home' }
    }, {
        path: '/test',
        name: 'test',
        component: test
    }, {
        // 登录
        path: '/login',
        name: 'login',
        component: login
    }, {
        // 注册
        path: '/register',
        name: 'register',
        component: register
    }, {
        // 歌单广场
        path: '/home',
        name: 'home',
        component: navBar,
        // meta: { // meta 路由动画专用，根据大小决定动画类型
        //     index: 1
        // },
    }, {
        // 搜索
        path: '/search',
        name: 'search',
        component: search,
        // meta: {
        //     index: 2
        // },
    }, {
        // 排行榜
        path: '/ranklist',
        name: 'ranklist',
        component: rankList
    }, {
        // 推荐
        path: '/recommend',
        name: 'recommend',
        component: recommend
    }, {
        // 歌单详情
        path: '/songlist',
        name: 'songlist',
        component: songList
    }, {
        // 播放器
        path: '/player',
        name: 'player',
        component: player
    }, {
        // 404
        path: "*",
        name: 'lostPage',
        component: lostPage
    }]
})