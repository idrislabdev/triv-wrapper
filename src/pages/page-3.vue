<template>
    <div class="main-apps page-3">
      <img alt="Triv logo" src="../assets/logo-triv.png" class="triv-logo entrance">
      <div class="page-3-area">
        <div class="text-page entrance">
          <div class="text-greeting">
            <div class="text-greeting text-greeting__name">
              <h5>Tahun ini, anda telah trade di TRIV sebanyak</h5>
            </div>
            <div class="text-award entrance">
              <div class="wrap"></div>
              <label>365 kali</label>
            </div>
          </div>
        </div>
        <img alt="Air Ballon Img" src="../assets/air-ballon.png" class="air-ballon entrance">    
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
      document.querySelector(".air-ballon").classList.remove("entrance")

      document.querySelector(".text-page").classList.add("exit")
      document.querySelector(".air-ballon").classList.add("exit")
      document.querySelector(".wrap").classList.add("exit")
      document.querySelector(".text-award label").classList.add("exit")
      document.querySelector(".btn").classList.add("exit")

      setTimeout(() => {
        this.$router.push('/page-4')
      }, 500)


    },
  }
}
</script>