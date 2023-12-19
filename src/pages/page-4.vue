<template>
    <div class="main-apps page-4">
      <div class="page-4-area">
        <coin-fly />
        <img alt="Triv logo" src="../assets/logo-triv.png" class="triv-logo">
        <div class="text-page">
          <div class="text-greeting">
            <div class="text-greeting text-greeting__name">
              <h5>Anda telah mendapatkan total dividen staking sebesar</h5>
            </div>
            <div class="text-award">
              <div class="wrap"></div>
              <label class="label-award">Rp250.000</label>
            </div>
          </div>
        </div>
        <img alt="Alien Img" src="../assets/alien.png" class="alien">
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
      document.querySelector(".wrap").classList.remove("entrance")
      document.querySelector(".label-award").classList.remove("entrance")
      document.querySelector(".alien").classList.remove("entrance")
      document.querySelector(".btn").classList.remove("entrance")

      document.querySelector(".text-page").classList.add("exit")
      document.querySelector(".alien").classList.add("exit")
      document.querySelector(".btn").classList.add("exit")

      setTimeout(() => {
        this.$router.push('/page-5')
      }, 500)
    },
  },
  mounted() {
    document.querySelector(".text-page").classList.remove("exit")
    document.querySelector(".alien").classList.remove("exit")
    document.querySelector(".btn").classList.remove("exit")

    document.querySelector(".triv-logo").classList.add("entrance")
    document.querySelector(".text-page").classList.add("entrance")
    document.querySelector(".wrap").classList.add("entrance")
    document.querySelector(".label-award").classList.add("entrance")
    document.querySelector(".alien").classList.add("entrance")
    document.querySelector(".btn").classList.add("entrance")
  }
}
</script>