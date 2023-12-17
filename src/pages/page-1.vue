<template>
    <div class="main-apps page-1">
      <img alt="Triv logo" src="../assets/logo-triv.png" class="triv-logo entrance">
      <div class="page-1-area">
        <div class="text-page entrance">
          <h5>Yuk Tonton Perjalanan Investasimu </h5>
          <p><span>Sepanjang 2023 di TRIV</span></p>
        </div>
        <img alt="Triv logo" src="../assets/cloud-left.png" class="cloud cloud__left entrance">
        <img alt="Triv logo" src="../assets/cloud-right.png" class="cloud cloud__right entrance">
      </div>
      <button type="button" class="btn btn__light entrance" @click="goToPage">Mulai</button>
    </div>
</template>
<script>
export default {
  name: 'HomePage',
  components: {
  
  },
  methods: {
    goToPage() {

      document.querySelector(".triv-logo").classList.remove("entrance")
      document.querySelector(".text-page").classList.remove("entrance")
      document.querySelector(".cloud__left").classList.remove("entrance")
      document.querySelector(".cloud__right").classList.remove("entrance")
      document.querySelector(".btn").classList.remove("entrance")

      document.querySelector(".triv-logo").classList.add("exit")
      document.querySelector(".text-page").classList.add("exit")
      document.querySelector(".cloud__left").classList.add("exit")
      document.querySelector(".cloud__right").classList.add("exit")
      document.querySelector(".btn").classList.add("exit")
      
      setTimeout(() => {
        this.$router.push('/page-2')
      }, 500)


    },
  }
}
</script>