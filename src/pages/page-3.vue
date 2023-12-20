<template>
    <div class="main-apps page-3">
      <div class="page-3-area">
        <coin-fly />
        <img alt="Triv logo" src="../assets/logo-triv-white.svg" class="triv-logo">
        <div class="text-page">
          <div class="text-greeting">
            <div class="text-greeting text-greeting__name">
              <h5>Tahun ini, anda telah trade di TRIV sebanyak</h5>
            </div>
            <div class="text-award">
              <div class="wrap"></div>
              <label>365 kali</label>
            </div>
          </div>
        </div>
        <img alt="Air Ballon Img" src="../assets/air-ballon.png" class="air-ballon">    
        <img alt="cloud bottom right" src="../assets/cloud-right.png" class="cloud-bottom cloud-bottom__right">
        <img alt="cloud bottom left" src="../assets/cloud-left.png" class="cloud-bottom cloud-bottom__left">   
      </div>
      <button type="button" class="btn btn__primary btn__primary__next" @click="goToPage">Lanjut</button> 
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
      document.querySelector(".air-ballon").classList.remove("entrance")
      document.querySelector(".btn").classList.remove("entrance")

      document.querySelector(".text-page").classList.add("exit")
      document.querySelector(".air-ballon").classList.add("exit")
      document.querySelector(".wrap").classList.add("exit")
      document.querySelector(".text-award label").classList.add("exit")
      document.querySelector(".btn").classList.add("exit")

      setTimeout(() => {
        this.$router.push('/page-4')
      }, 500)
    },
  },
  mounted() {
    document.querySelector(".text-page").classList.remove("exit")
    document.querySelector(".air-ballon").classList.remove("exit")
    document.querySelector(".wrap").classList.remove("exit")
    document.querySelector(".text-award label").classList.remove("exit")
    document.querySelector(".btn").classList.remove("exit")

    document.querySelector(".triv-logo").classList.add("entrance")
    document.querySelector(".text-page").classList.add("entrance")
    document.querySelector(".text-award").classList.add("entrance")
    document.querySelector(".air-ballon").classList.add("entrance")
    document.querySelector(".btn").classList.add("entrance")
  }
}
</script>