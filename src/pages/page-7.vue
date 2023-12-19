<template>
    <div class="main-apps page-7">
      <div class="page-7-area">
        <img alt="cloud top right" src="../assets/cloud-right.png" class="cloud-top cloud-top__right">
        <img alt="cloud top left" src="../assets/cloud-left.png" class="cloud-top cloud-top__left">   
        <img alt="Triv logo" src="../assets/logo-triv-blue.png" class="triv-logo">
        <div class="text-page">
          <div class="text-greeting">
            <h5>Ini 3 aset favorit kamu sepanjang 2023</h5>
          </div>
        </div>
        <div class="asset-page">
          <div class="asset-type asset-type-1 animation-delay-1s">
            <img alt="ETH Logo" src="../assets/eth.png" class="asset-img">
            <div class="asset-text">
              <label>Ethereum (ETH)</label>
              <p>Cryptocurrency</p>
            </div>
          </div>
          <div class="asset-type asset-type-2 animation-delay-2s">
            <img alt="ETH Logo" src="../assets/tether.png" class="asset-img">
            <div class="asset-text">
              <label>Tether USD</label>
              <p>USD</p>
            </div>
          </div>
          <div class="asset-type asset-type-3 animation-delay-3s">
            <img alt="ETH Logo" src="../assets/tesla.png" class="asset-img">
            <div class="asset-text">
              <label>Tesla (TSLA)</label>
              <p>Stocks</p>
            </div>
          </div>
        </div>
        <img alt="Coins Bg" src="../assets/coins-bg.png" class="coins-bg animation-delay-3s">
      </div>  
      <button type="button" class="btn btn__light btn__light__next" @click="goToPage">Lanjut</button>
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
  },
  mounted() {
    document.querySelector(".text-page").classList.remove("exit")
    document.querySelector(".asset-page").classList.remove("exit")
    document.querySelector(".btn").classList.remove("exit")
  
    document.querySelector(".triv-logo").classList.add("entrance")
    document.querySelector(".text-page").classList.add("entrance")
    document.querySelector(".asset-type-1").classList.add("entrance")
    document.querySelector(".asset-type-2").classList.add("entrance")
    document.querySelector(".asset-type-3").classList.add("entrance")
    document.querySelector(".coins-bg").classList.add("entrance")
    document.querySelector(".btn").classList.add("entrance")
  }
}
</script>