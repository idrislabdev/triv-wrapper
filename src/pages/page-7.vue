<template>
    <div class="main-apps page-7">
      <img alt="Cloud top right" src="../assets/cloud-right.png" class="cloud-top cloud-top__right">
      <img alt="Cloud top right" src="../assets/cloud-left.png" class="cloud-top cloud-top__left">   
      <img alt="Triv logo" src="../assets/logo-triv-blue.png" class="triv-logo entrance">
      <div class="page-7-area">
        <div class="text-page entrance">
          <h5>Ini aset favorit kamu sepanjant 2023</h5>
        </div>
        <div class="asset-page">
          <div class="asset-type entrance animation-delay-1s">
            <img alt="ETH Logo" src="../assets/eth.png" class="asset-img">
            <div class="asset-text">
              <label>Ethereum (ETH)</label>
              <p>Cryptocurrency</p>
            </div>
          </div>
          <div class="asset-type entrance animation-delay-2s">
            <img alt="ETH Logo" src="../assets/tether.png" class="asset-img">
            <div class="asset-text">
              <label>Tether USD</label>
              <p>USD</p>
            </div>
          </div>
          <div class="asset-type entrance animation-delay-3s">
            <img alt="ETH Logo" src="../assets/tesla.png" class="asset-img">
            <div class="asset-text">
              <label>Tesla (TSLA)</label>
              <p>Stocks</p>
            </div>
          </div>
        </div>
      </div>  
      <img alt="Coins Bg" src="../assets/coins-bg.png" class="coins-bg entrance animation-delay-3s">
      <button type="button" class="btn btn__light btn__light__next entrance" @click="goToPage">Lanjut</button>
    </div>
</template>
<script>
export default {
  name: 'HomePage',
  components: {
  
  },
  methods: {
    goToPage() {
      document.querySelector(".text-page").classList.remove("entrance")
      document.querySelector(".btn").classList.remove("entrance")

      document.querySelector(".text-page").classList.add("exit")
      document.querySelector(".asset-page").classList.add("exit")
      document.querySelector(".btn").classList.add("exit")

      setTimeout(() => {
        this.$router.push('/page-8')
      }, 500)

    },
  }
}
</script>