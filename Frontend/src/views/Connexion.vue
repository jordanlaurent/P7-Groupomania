<template>
  <div>
    <Login />
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
export default {
  name: "Connexion",
  components: {
    Login,
  }, mounted: function () {
    document.title = "Groupomania";
    var jwt = localStorage.getItem("jwt");
      if (jwt != null) {
         window.location = "/Mur";
      } else {
        console.log("");
      }
  },
  created: function () {
    document.title = "Groupomania - Connexion";
  },
};
</script>