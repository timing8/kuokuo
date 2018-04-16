<template>
    <div class="home">  
        <headers/>
        <header-nav></header-nav>
        <app-banner></app-banner>
        <music></music>
    </div>
</template>
<script>

import HeaderNav from '../../commons/Header/HeaderNav'
import Headers from '../../commons/Header/Header'
import AppBanner from './Banner'
import Music from './Music'

    export default{
        name:'home',
       components:{
          AppBanner,Music,HeaderNav,Headers
       }
    }
</script>
<style lang="scss" scoped>
   
</style>

