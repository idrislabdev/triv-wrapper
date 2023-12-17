<template>
    <div class="main-apps page-2">
      <coin-fly />
      <img alt="Triv logo" src="../assets/logo-triv.png" class="triv-logo entrance">
      <div class="page-2-area">
        <div class="text-page entrance">
          <div class="text-greeting">
            <div class="text-greeting text-greeting__name">
              <h5><span>Farizky</span></h5>
              <h5>Anda telah melakukan trading besar</h5>
            </div>
            <div class="text-award entrance">
              <label class="entrance">Rp103.000.000</label>
            </div>
          </div>
          <p class="entrance">Sepanjang tahun <span>2023</span></p>
        </div>
        <img alt="Plane Img" src="../assets/plane.png" class="plane entrance">     
      </div>
      <button type="button" class="btn btn__primary btn__primary__next entrance" @click="goToPage">lanjut</button>
      <img alt="Triv logo" src="../assets/cloud-right.png" class="cloud-bottom cloud-bottom__right entrance">
      <img alt="Triv logo" src="../assets/cloud-left.png" class="cloud-bottom cloud-bottom__left entrance">   
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
      document.querySelector(".text-page").classList.remove("entrance")
      document.querySelector(".plane").classList.remove("entrance")
      document.querySelector(".btn").classList.remove("entrance")

      document.querySelector(".text-page").classList.add("exit")
      document.querySelector(".plane").classList.add("exit")
      document.querySelector(".btn").classList.add("exit")
      
      setTimeout(() => {
        this.$router.push('/page-3')
      }, 500)
    },
  }
}
</script>