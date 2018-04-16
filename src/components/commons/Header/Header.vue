<template>
    <div class="header">
       <a href="" class="logo">
           <img src="/static/logo1.jpg" alt="">
       </a>
       <div class="app-search">
          下载酷狗
       </div>
            <router-link class="fa fa-search" to="/list"></router-link>
    </div>

</template>

<script>
    export default {
        name:'Header',
    }
</script>
<style lang="scss">
    .header{
            width: 100%;
            padding-top: .0357rem;
            height: 58px;
            line-height: 3rem;
            background: #2ca2f9;
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
        .logo{
                display:block;
                width: 131px;
                height: 30px;
                margin-left: 12px;
                background-size: 100%;
        }
        .app-search{
            width:104px;height:32px;
            border-radius: 20% 20%;
            border:1px solid #fff;
            display: flex;align-items: center;
            justify-content: center;color:#fff;
        }
        .fa{
            color: #fff;
            font-size: 24px;
            margin-right: 0.6rem;
        }
        
    }
</style>
