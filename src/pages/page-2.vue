<template>
    <div class="main-apps page-2">
      <div class="page-2-area">
        <coin-fly />
        <img alt="Triv logo" src="../assets/logo-triv.png" class="triv-logo">
        <div class="text-page">
          <div class="text-greeting">
            <div class="text-greeting text-greeting__name">
              <h5><span>Farizky</span></h5>
              <h5>Anda telah melakukan trading besar</h5>
            </div>
            <div class="text-award">
              <label class="label-award">Rp103.000.000</label>
            </div>
          </div>
          <p class="text-tahun">Sepanjang tahun <span>2023</span></p>
          <img alt="Plane Img" src="../assets/plane.png" class="plane">     
        </div>
        <img alt="cloud bottom right" src="../assets/cloud-right.png" class="cloud-bottom cloud-bottom__right">
        <img alt="cloud bottom left" src="../assets/cloud-left.png" class="cloud-bottom cloud-bottom__left">   
      </div>
      <button type="button" class="btn btn__primary btn__primary__next" @click="goToPage">lanjut</button>

    </div>
</template>
<script>
import CoinFly from '@/components/CoinFly.vue'

export default {
  name: 'HomePage',
  components: {
    CoinFly
  },
  methods: {
    goToPage() {
      document.querySelector(".triv-logo").classList.remove("entrance")
      document.querySelector(".text-page").classList.remove("entrance")
      document.querySelector(".text-award").classList.remove("entrance")
      document.querySelector(".label-award").classList.remove("entrance")
      document.querySelector(".text-tahun").classList.remove("entrance")
      document.querySelector(".plane").classList.remove("entrance")
      // document.querySelector(".cloud-bottom__right").classList.remove("entrance")
      // document.querySelector(".cloud-bottom__left").classList.remove("entrance")
      document.querySelector(".btn").classList.remove("entrance")

      document.querySelector(".text-page").classList.add("exit")
      document.querySelector(".plane").classList.add("exit")
      document.querySelector(".btn").classList.add("exit")
      
      setTimeout(() => {
        this.$router.push('/page-3')
      }, 500)
    },
  },
  mounted() {
    document.querySelector(".text-page").classList.remove("exit")
    document.querySelector(".plane").classList.remove("exit")
    document.querySelector(".btn").classList.remove("exit")

    document.querySelector(".triv-logo").classList.add("entrance")
    document.querySelector(".text-page").classList.add("entrance")
    document.querySelector(".text-award").classList.add("entrance")
    document.querySelector(".label-award").classList.add("entrance")
    document.querySelector(".text-tahun").classList.add("entrance")
    document.querySelector(".plane").classList.add("entrance")
    document.querySelector(".cloud-bottom__right").classList.add("entrance")
    document.querySelector(".cloud-bottom__left").classList.add("entrance")
    document.querySelector(".btn").classList.add("entrance")
  }
}
</script>