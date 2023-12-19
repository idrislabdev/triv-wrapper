<template>
    <div class="main-apps page-6">
      <div class="page-6-area">
        <coin-fly />
        <img alt="Triv logo" src="../assets/logo-triv.png" class="triv-logo">
        <div class="text-page">
          <div class="text-greeting">
            <div class="text-award">
              <div class="wrap"></div>
              <label class="label-class">Agustus</label>
            </div>
            <div class="text-greeting text-greeting__name">
              <h5>adalah bulan dengan jumlah nominal investasi terbanyak</h5>
            </div>
          </div>
        </div>
        <img alt="Jet Img" src="../assets/jet.png" class="jet">
        <img alt="Triv logo" src="../assets/cloud-right.png" class="cloud-bottom cloud-bottom__right">
        <img alt="Triv logo" src="../assets/cloud-left.png" class="cloud-bottom cloud-bottom__left">   
      </div>
      <div class="page-6__slide"></div>   
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
      // document.querySelector(".text-page").classList.remove("entrance")
      document.querySelector(".text-page").classList.remove("entrance")
      document.querySelector(".wrap").classList.remove("entrance")
      document.querySelector(".label-class").classList.remove("entrance")
      document.querySelector(".text-greeting").classList.remove("entrance")
      document.querySelector(".jet").classList.remove("entrance")
      document.querySelector(".btn").classList.remove("entrance")

      document.querySelector(".triv-logo").classList.add("exit")
      document.querySelector(".coin-fly").classList.add("exit")
      document.querySelector(".jet").classList.add("exit")
      document.querySelector(".cloud-bottom__right").classList.add("exit")
      document.querySelector(".cloud-bottom__left").classList.add("exit")
      document.querySelector(".btn").classList.add("exit")
      document.querySelector(".page-6__slide").classList.add("exit")

      setTimeout(() => {
        this.$router.push('/page-7')
      }, 600)
    },
  },
  mounted() {
    document.querySelector(".triv-logo").classList.remove("exit")
    document.querySelector(".coin-fly").classList.remove("exit")
    document.querySelector(".jet").classList.remove("exit")
    document.querySelector(".cloud-bottom__right").classList.remove("exit")
    document.querySelector(".cloud-bottom__left").classList.remove("exit")
    document.querySelector(".btn").classList.remove("exit")
    document.querySelector(".page-6__slide").classList.remove("exit")
    
    document.querySelector(".text-page").classList.add("entrance")
    document.querySelector(".wrap").classList.add("entrance")
    document.querySelector(".label-class").classList.add("entrance")
    document.querySelector(".text-greeting__name").classList.add("entrance")
    document.querySelector(".jet").classList.add("entrance")
    document.querySelector(".btn").classList.add("entrance")
  }
}
</script>