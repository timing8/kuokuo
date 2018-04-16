<template>
    <div class="list">
        <Header/>
        <div class="top-goback"> 
            <div class="goback">
                <router-link class="iconfont icon-jiantou" to="/home"></router-link>
            </div>
            <p class="p-sou">搜索</p>
        </div>  
        <div class="from-box">
            <form class="search-box">
              <i class="iconfont icon-sousuo"></i>
            <input type="text" class="keyword" placeholder="歌手/歌名/">
              <div class="searchbtn">搜索</div>
             </form>
             </div>
    </div>
</template>
<script>
    import  Header from '../../commons/Header/Header.vue'
    export default {
        name:'List',
        components:{
            Header
        }
    }
</script>
<style lang="scss" scoped>
    .top-goback{
        width: 100%;
        height:58px; 
        display: flex;   
        font-size:22px;
        display: flex;align-items: center;
        flex-shrink:1;
        flex-grow:1; 
        .p-sou{
              flex-shrink:1; font-size:16px;
              flex-grow:1; text-align: center;
        }  
    } 
    .from-box{
        display:flex;justify-content:center;
    }
    .search-box{
        width:300px;height:30px;position: relative;border:1px solid #ccc;
        line-height:30px;display:flex;border:none;
       router-link{
               width: 17px;
                height: 26pxrem;
                display: block;
                position: absolute;
                top: 1px;
                left: 10px;
       }
       .keyword{
           width:200px;
            padding: 5px 26px 2px;
            margin-right: 3%;
            border: 1px solid #e5e5e5;
            border-radius: 5px;
            
       }
       .searchbtn{
               width: 50px;
                height: 30px;
                line-height: 30px;
                border: none;
                border-radius: 5px;
                text-align: center;
                background:#ccc;
       }
    }
    
</style>
