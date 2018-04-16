<template>
   <div class="banner swiper-container">
       <div class="swiper-wrapper">
           <div class="swiper-slide" v-for = " banner in banners " :key = " banner.id ">
               <img width="100%" :src="banner.imageUrl" alt="">
           </div>
       </div>
       <div class="swiper-pagination"></div>
   </div>
</template>
<script>
// 引入swiper相关，因为只有banner在用，所以把样式也引入到banner里了
import '../../../../node_modules/swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'

export default {
   name:'AppBanner',
   data () {
       return {
           banners: []
       }
   },
   methods: {
       getBanners () {
        //    https://m.maizuo.com
            // 请求的真正接口前面的/mz其实只是一个暗号
            this.$http.get('/mz/v4/api/billboard/home',{
                params:{
                    __t:Date.now()
                }
            }).then( res => {
                this.banners = res.data.data.billboards
            } )
       }
   },
   created () {
       this.getBanners()
   },
   updated () {
       new Swiper('.banner',{
           autoplay:true,
           pagination: {
               el: '.swiper-pagination'
           }
       })
   }
}
</script>
<style lang="scss" scoped>

</style>


