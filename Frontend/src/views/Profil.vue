<template >
  <div>
      <Toolbar />
      <Myprofil />
    <Footer />
  </div>
</template>


<script>
import Footer from "@/components/footer.vue";
import Toolbar from "@/components/Toolbar.vue";
import Myprofil from "@/components/Myprofil.vue";
export default {
  name: "Profil",
  components: {
    Myprofil,
    Toolbar,
    Footer,
  },
  created: function () {
    document.title = "Groupomania Modifier profil";
  },
};
</script>