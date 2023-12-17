<template>
    <div class="main-apps page-8">
      <img alt="Cloud top right" src="../assets/cloud-right.png" class="cloud-top cloud-top__right">
      <img alt="Cloud top right" src="../assets/cloud-left.png" class="cloud-top cloud-top__left">   
      <img alt="Triv logo" src="../assets/logo-triv-blue.png" class="triv-logo">
      <div class="page-8-area">
        <div class="text-page entrance">
          <div class="text-greeting">
            <div class="text-greeting text-greeting__name">
              <h5>Total aset anda</h5>
            </div>
            <div class="text-award">
              <label>Rp500.000</label>
            </div>
          </div>
        </div>
        <div class="text-page-award">
          <h5 class="entrance">Anda dinobatkan menjadi</h5>
          <div class="text-award">
            <div class="wrap entrance"></div>
            <label class="entrance">Dream Chaser</label>
          </div>
          <div class="text-quote entrance">
            <div class="double-quote"></div>
            <p>
              Anda adalah seorang <span>Pengejar Mimpi</span>, tekad ini akan membawa Anda menggapai mimpi dan cita-cita Anda kelak. 
              Mulai dari bawah seperti anak tangga dan akan mencapai puncak pada akhirnya
              <span>#thanks2023</span>
            </p>
          </div>
        </div>
      </div>  
      <img alt="Coins Bg" src="../assets/coins-bg.png" class="coins-bg">
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
      document.querySelector(".text-page-award").classList.add("exit")
      document.querySelector(".btn").classList.add("exit")
      document.querySelector(".cloud-top__right").classList.add("exit")
      document.querySelector(".cloud-top__left").classList.add("exit")
      document.querySelector(".coins-bg").classList.add("exit")
      document.querySelector(".triv-logo").classList.add("exit")

      setTimeout(() => {
        this.$router.push('/page-9')
      }, 500)


    },
  }
}
</script>