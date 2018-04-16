<template>
  <div class="header-nav">
            <ul>
                <li v-for="nav in navs" :key="nav.id">
                   <router-link :to="nav.to">
                      <a class="active">{{nav.title}}</a> 
                    </router-link>
                </li>
            </ul>
  </div>
</template>
<script>
    export default {
        name:'HeaderNav',
        data(){
            return {
                navs :[
                    {id:1,title:"新歌",to: {name: 'home'}},
                    {id:2,title:"排行",to: {name: 'ranking'}},
                    {id:3,title:"歌单",to: {name: 'songlist'}},
                    {id:4,title:"歌手",to: {name: 'singer'}}
                ]
            }
        }
    }
</script>
<style lang="scss" scoped>
     .header-nav ul{
        width: 100%;
        background: #fff;
        height: 3.2143rem;
        line-height: 3rem;
        box-shadow: 0 0.1785rem 0.1785rem 0 #f4f4f4;
        display: flex;justify-content: space-around;
        // .active{
        //      display: block;height:100%;
        // }
        // a.active:hover .active{   
        //     border-bottom:1px solid greenyellow 
        // }
    }   
</style>

