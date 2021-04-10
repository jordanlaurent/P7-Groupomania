<template>
<div >
 <Toolbar class="mb-5"/>
<div class="user">
  <div class="mr-5" v-for="com in coms" :key="com.message">
        <img class="bd-placeholder-img rounded-circle" width="140" height="140" :src="com.photo" role="img"  preserveAspectRatio="xMidYMid slice" focusable="false">
        <title>{{com.name}} {{com.prenom}}</title>
        <h2>{{com.name}} {{com.prenom}}</h2>
        <p>{{com.bio }}</p>
      </div>
      <Footer />
</div>
</div>
</template>

<style>
.user{display: flex; flex-direction: row;padding: 50px; justify-content: space-around;}
</style>
<script>
import axios from "axios";
import Footer from "@/components/footer.vue";
import Toolbar from "@/components/Toolbar.vue";
export default {
  name: 'test',
   components: {
      Toolbar,
      Footer,
    },
    created: function () {
    document.title = "Liste membres Groupomania";
  },
   data() {
    return {
      coms: null,
    }
  },
  mounted() {
     axios.get("http://localhost:3000/users").then((response) => {
      this.coms = response.data
     })
     }
}
</script>