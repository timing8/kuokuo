import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import List from '../components/containers/List/List.vue'
import Home from '../components/containers/Home/Home.vue'
import Singer from '../components/containers/Singer/Singer.vue'
import Songlist from '../components/containers/Songlist/Songlist.vue'
import Ranking from '../components/containers/Ranking/Ranking.vue'
export default new Router({
  routes: [
    {
      path: '',redirect:'/home'
    },
    {
      path:'/home',
      name:"home",
      component: Home
    },
    {
      path: '/list', name:"list",    
      component: List
    },
    {
      path: '/ranking',name:"ranking",    
      component: Ranking
    },
    {
      path: '/singer',name:"singer",    
      component: Singer
    },
    {
      path: '/songlist',name:"songlist",    
      component: Songlist
    }
  ]
})
