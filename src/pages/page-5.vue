<template>
    <div class="main-apps page-5">
      <div class="page-5-area">
        <coin-fly />
        <img alt="Triv logo" src="../assets/logo-triv.png" class="triv-logo">
        <div class="text-page">
          <div class="text-greeting">
            <div class="text-greeting text-greeting__name">
              <h5>Portofolio anda tumbuh sebanyak</h5>
            </div>
            <div class="text-award">
              <label>+43%</label>
              <span>dalam tahun ini</span>
            </div>
          </div>
          <img alt="Graph Img" src="../assets/graph.png" class="graph">
        </div>
        <img alt="Kites Img" src="../assets/kites.png" class="kites">
        <img alt="Triv logo" src="../assets/cloud-right.png" class="cloud-bottom cloud-bottom__right">
        <img alt="Triv logo" src="../assets/cloud-left.png" class="cloud-bottom cloud-bottom__left">      
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
      document.querySelector(".text-page").classList.remove("entrance")
      document.querySelector(".text-award").classList.remove("entrance")
      document.querySelector(".graph").classList.remove("entrance")
      document.querySelector(".kites").classList.remove("entrance")
      document.querySelector(".btn").classList.remove("entrance")

      document.querySelector(".text-page").classList.add("exit")
      document.querySelector(".kites").classList.add("exit")
      document.querySelector(".btn").classList.add("exit")

      setTimeout(() => {
        this.$router.push('/page-6')
      }, 500)
    },
  },
  mounted() {
    document.querySelector(".text-page").classList.remove("exit")
    document.querySelector(".kites").classList.remove("exit")
    document.querySelector(".btn").classList.remove("exit")

    document.querySelector(".text-page").classList.add("entrance")
    document.querySelector(".text-award").classList.add("entrance")
    document.querySelector(".graph").classList.add("entrance")
    document.querySelector(".kites").classList.add("entrance")
    document.querySelector(".btn").classList.add("entrance")
  }
}
</script>