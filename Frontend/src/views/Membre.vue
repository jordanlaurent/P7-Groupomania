<template>
<div >
 <Toolbar/>
<div class="user mb-5">
  <div class="centeruser" v-for="com in coms" :key="com.message">
        <img class=" rounded-circle" width="140" height="140" :src="com.photo">
        <title>{{com.name}} {{com.prenom}}</title>
        <h2>{{com.name}} {{com.prenom}}</h2>
        <p>{{com.bio }}</p>
       <small v-for="admin in admins" :key="admin">
         <button id="buttonDeleteUser" @click.prevent="AdmindeleteUser" class="btn-danger btn-sm btn  ml-1" :data-id="com.id" v-if=" admin.active == 1"> Supprimer l'utilisateur </button></small>
      </div>
      <Footer />
</div>
</div>
</template>

<style>
@media (min-width: 992px) {
.user{display: flex; flex-direction: row;padding: 50px; justify-content: space-around; flex-wrap: wrap;}
.centeruser{justify-content: center;text-align: center;}
}
@media (max-width: 992px) {
.user{display: flex; flex-direction: column; justify-content: center; padding: 0px;}
.centeruser{justify-content: center;text-align: center;}
}
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
      admins: null,
    }
  }, methods: {
         // supprimer un utilisateur
    AdmindeleteUser(event) {
      this.coms = event.target.dataset.id
      axios
        .delete("http://localhost:3000/user/admin/delete", {
           data: {
            id: this.coms,
           }
        })
        .then((response) => {
          this.$router.go(0);
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  mounted() {
     axios.get("http://localhost:3000/users").then((response) => {
      this.coms = response.data
     }),
       axios.post("http://localhost:3000/user",
          {
            userid: localStorage.getItem("jwt"),
          },
        )
        .then((response) => {
          this.admins = response.data
        })
  }
}
</script>