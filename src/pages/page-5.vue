<template>
    <div class="main-apps page-5">
      <img alt="Triv logo" src="../assets/logo-triv.png" class="triv-logo entrance">
      <div class="page-5-area">
        <div class="text-page entrance">
          <div class="text-greeting">
            <div class="text-greeting text-greeting__name">
              <h5>Portofolio anda tumbuh sebanyak</h5>
            </div>
            <div class="text-award entrance">
              <label>+43%</label>
              <span>dalam tahun ini</span>
            </div>
          </div>
          <img alt="Graph Img" src="../assets/graph.png" class="graph entrance">
        </div>
        <img alt="Kites Img" src="../assets/kites.png" class="kites entrance">
        
      </div>
      <img alt="Triv logo" src="../assets/cloud-right.png" class="cloud-bottom cloud-bottom__right">
      <img alt="Triv logo" src="../assets/cloud-left.png" class="cloud-bottom cloud-bottom__left">        
      <button type="button" class="btn btn__primary entrance" @click="goToPage">Lanjut</button>
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
      document.querySelector(".kites").classList.remove("entrance")

      document.querySelector(".text-page").classList.add("exit")
      document.querySelector(".kites").classList.add("exit")
      document.querySelector(".btn").classList.add("exit")

      setTimeout(() => {
        this.$router.push('/page-6')
      }, 500)
    },
  }
}
</script>