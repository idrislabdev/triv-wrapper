<template>
    <div class="main-apps page-10">
      <div class="page-10-area">
        <img alt="Triv logo" src="../assets/logo-triv-white.svg" class="triv-logo">
        <div class="text-page">
          <div class="text-greeting entrance">
            <img alt="Coin Award" src="../assets/coin-award.png" class="coin-award">
            <h5>Undang teman dan dapatkan special gift Ethereum!</h5>
            <button type="button" class="btn btn__light entrance">Undang Teman Sekarang</button>
          </div>
        </div>
        <img alt="Air Ballons Img" src="../assets/air-ballons.png" class="air-ballons">    
        <img alt="Triv logo" src="../assets/cloud-right.png" class="cloud-bottom cloud-bottom__right">
        <img alt="Triv logo" src="../assets/cloud-left.png" class="cloud-bottom cloud-bottom__left">   
      </div>
    </div>
</template>
<script>

export default {
  name: 'HomePage',
  components: {
  },
  methods: {
    goToPage() {
      document.querySelector(".text-greeting").classList.remove("entrance")
      document.querySelector(".btn__light").classList.remove("entrance")

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
    document.querySelector(".btn__light").classList.remove("exit")
    
    document.querySelector(".text-greeting").classList.add("entrance")
    document.querySelector(".btn__light").classList.add("entrance")

  }
}
</script>