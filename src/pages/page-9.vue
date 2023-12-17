<template>
    <div class="main-apps page-9">
      <img alt="Triv logo" src="../assets/logo-triv.png" class="triv-logo entrance">
      <div class="page-9-area">
        <div class="text-page">
          <div class="text-greeting entrance">
            <h5>Great Job</h5>
            <h5><span>Farizky</span></h5>
          </div>
          <div class="text-greeting-middle entrance">
            <p>Teruskan perjalanan investasimu, see you on top! </p>
          </div>
          <div class="text-greeting-last entrance">
            <p>Sampai bertemu di <span>2024!!!</span></p>
          </div>
        </div>
        <img alt="Air Ballons Img" src="../assets/air-ballons.png" class="air-ballons entrance">    
      </div>
      <button type="button" class="btn btn__primary btn__primary__next entrance" @click="goToPage">lanjut</button>
      <img alt="Triv logo" src="../assets/cloud-right.png" class="cloud-bottom cloud-bottom__right entrance">
      <img alt="Triv logo" src="../assets/cloud-left.png" class="cloud-bottom cloud-bottom__left entrance">   
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
  }
}
</script>