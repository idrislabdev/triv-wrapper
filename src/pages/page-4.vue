<template>
    <div class="main-apps page-4">
      <img alt="Triv logo" src="../assets/logo-triv.png" class="triv-logo entrance">
      <div class="page-4-area">
        <div class="text-page entrance">
          <div class="text-greeting">
            <div class="text-greeting text-greeting__name">
              <h5>Anda telah mendapatkan total dividen staking sebesar</h5>
            </div>
            <div class="text-award">
              <div class="wrap entrance"></div>
              <label class="entrance">Rp250.000</label>
            </div>
          </div>
        </div>
        <img alt="Alien Img" src="../assets/alien.png" class="alien entrance">      
      </div>
      <button type="button" class="btn btn__primary entrance" @click="goToPage">Lanjut</button>
      <img alt="Triv logo" src="../assets/cloud-right.png" class="cloud-bottom cloud-bottom__right">
      <img alt="Triv logo" src="../assets/cloud-left.png" class="cloud-bottom cloud-bottom__left">  
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
      document.querySelector(".alien").classList.remove("entrance")

      document.querySelector(".text-page").classList.add("exit")
      document.querySelector(".alien").classList.add("exit")
      document.querySelector(".btn").classList.add("exit")

      setTimeout(() => {
        this.$router.push('/page-5')
      }, 500)
    },
  }
}
</script>