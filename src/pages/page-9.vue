<template>
    <div class="main-apps page-9">
      <div class="page-9-area">
        <img alt="Triv logo" src="../assets/logo-triv.png" class="triv-logo">
        <div class="text-page">
          <div class="text-greeting">
            <h5>Great Job</h5>
            <h5><span>Farizky</span></h5>
          </div>
          <div class="text-greeting-middle">
            <p>Teruskan perjalanan investasimu, see you on top! </p>
          </div>
          <div class="text-greeting-last">
            <p>Sampai bertemu di <span>2024!!!</span></p>
          </div>
        </div>
        <img alt="Air Ballons Img" src="../assets/air-ballons.png" class="air-ballons">    
        <img alt="Triv logo" src="../assets/cloud-right.png" class="cloud-bottom cloud-bottom__right"> 
        <img alt="Triv logo" src="../assets/cloud-left.png" class="cloud-bottom cloud-bottom__left">   
      </div>
      <button type="button" class="btn btn__primary btn__primary__next" @click="goToPage">lanjut</button>
    </div>
</template>
<script>

export default {
  name: 'HomePage',
  components: {
  },
  methods: {
    goToPage() {
      document.querySelector(".text-page").classList.add("exit")
      document.querySelector(".btn").classList.add("exit")      
      setTimeout(() => {
        this.$router.push('/page-10')
      }, 500)
    },
  },
  mounted() {
    document.querySelector(".text-page").classList.remove("exit")
    document.querySelector(".btn").classList.remove("exit")      
    
    document.querySelector(".triv-logo").classList.add("entrance")
    document.querySelector(".text-greeting").classList.add("entrance")
    document.querySelector(".text-greeting-middle").classList.add("entrance")
    document.querySelector(".text-greeting-last").classList.add("entrance")
    document.querySelector(".air-ballons").classList.add("entrance")
    document.querySelector(".cloud-bottom__right").classList.add("entrance")
    document.querySelector(".cloud-bottom__left").classList.add("entrance")
    document.querySelector(".btn").classList.add("entrance")
  }
}
</script>