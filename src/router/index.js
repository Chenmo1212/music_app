import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import navBar from '@/components/navBar/navBar.vue'
import search from '@/components/navBar/children/search'
import mine from '@/components/navBar/children/mine'
import rankList from '@/components/rankList'
import login from '@/components/login'
import register from '@/components/register'
import songList from '@/components/songList'
import player from '@/components/player'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        }, {
            path: '/test',
            name: 'test',
            component: test
        }, {
            // 播放器
            path: '/player',
            name: 'player',
            component: player
        }, {
            // 歌单广场
            path: '/home',
            name: 'home',
            component: navBar
        }, {
            // 搜索
            path: '/search',
            name: 'search',
            component: search
        }, {
            // 排行榜
            path: '/rankList',
            name: 'rankList',
            component: rankList
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
            // 歌单详情
            path: '/songList',
            name: 'songList',
            component: songList
        },
        {
            // 播放器
            path: '/player',
            name: 'player',
            component: player
        },
    ]
})