<template>
  <div>
    <Signup />
    <router-view />
  </div>
</template>

<script>
localStorage.clear();

import Signup from "../components/Signup.vue";
export default {
  name: "Inscription",
  components: {
    Signup,
  },
  created: function () {
    document.title = "Groupomania - Inscription";
  }, mounted: function () {
    document.title = "Groupomania";
    var jwt = localStorage.getItem("jwt");
      if (jwt != null) {
         window.location = "/Mur";
      } else {
        console.log("");
      }
  },
};
</script>