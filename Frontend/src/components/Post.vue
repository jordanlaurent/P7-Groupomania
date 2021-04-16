<template>
  <div>
    <!-- affficher les post -->
    <div class="card mt-2 postView rounded-0 "  v-for="info in infos" :key="info.message">
      <div class="card-body ">
        <h5 class="card-title text-primary"> <img :src="info.photo" class="image--cover" > {{ info.name }} {{ info.prenom }}</h5>
        <p class="card-text h5 mt-4">{{ info.message }}  </p>
        <img :src="info.image" class="img-fluid w-50 mt-4" >
      </div >
      <small v-for="admin in admins" :key="admin" class="text-muted">{{ info.datemessage | moment("DD-MM-YYYY, HH:mm:ss ")}}
      <!-- bouton supprimer un post -->
      <button id="buttonDeletePost" @click.prevent="deletePost" class="btn-danger btn-sm btn float-right ml-1" :data-id="info.id" v-if="info.idusers == user.id">x </button>
       <button id="buttonDeletePost" @click.prevent="AdmindeletePost" class="btn-danger btn-sm btn float-right ml-1" :data-id="info.id" v-if="admin.active == 1 ">Admin suppression </button></small>
      <hr/>
      <!-- afficher les commentaires -->   
      <div class="container" > 
        <span  v-for="com in coms" :key="com.message" class="comment mt-4 text-justify float-left col"> 
          <div v-if="com.postid == info.id">
            <h4><img :src="com.photo" alt="" class="rounded-circle" width="40" height="40"> {{ com.name}} {{ com.prenom}}</h4> <span class="ml-4 text-secondary"> {{com.datecomment | moment("DD/MM/YYYY ")}}</span> <br>
            <p class="ml-5 h5 mt-2">{{com.comment}} </p>
            <!-- bouton modifier commentaire -->
            <b-button v-b-modal.com :data-id="com.id" v-if="com.idusers == user.id">Modifier commentaire</b-button>
            <b-modal id="com"  v-if="com.idusers == user.id" title="Etes vous sur de vouloir modifer votre message ?">
              <b-form-input id="name-input" v-model="commentChanged" required></b-form-input>

              <!-- <b-button @click.prevent="ChangedComment" class="mt-3 btn-success" block>Valider</b-button>
              <b-button class="mt-2" block @click="toggleModalComment">Annuler</b-button> -->

            </b-modal>
            <!-- bouton supprimer commentaire -->
            <small v-for="admin in admins" :key="admin">
            <button id="buttonDeleteComment" @click.prevent="delecteComment" class="btn-danger btn-sm btn float-right ml-1" :data-id="com.id" v-if="com.idusers == user.id "> x </button>
            <button id="buttonDeleteComment" @click.prevent="AdmindelecteComment" class="btn-danger btn-sm btn float-right ml-1" :data-id="com.id" v-if=" admin.active == 1"> Admin suppression </button></small>
          </div>  
        <hr>
        </span>
      </div>
      <!-- bouton crée un commentaire -->
      <input @keyup.enter="postData" name="comment" v-model="comment" type="text"  placeholder="Poster un commentaire" class="form-control "   required />
      <button @click.prevent="postData" class="btn-success" type="button" >COMMENTER</button>
    </div>
  </div>
</template>
<style lang="css" scoped>
.postView {margin-bottom: 5%;}
.bottomSocial {display: flex;}
p {font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; font-weight: normal;}
.image--cover {width: 100px; height: 100px; border-radius: 50%; object-fit: cover; object-position: center;}
.comments {margin-top: 5%; margin-left: 20px}
</style>

<script>
import axios from "axios";
export default {
  name: "Post",
  data() {
    return {
      infos: null,
      coms: null,
      comment:"",
      idcomment:"",
      idpost:"",
      user :'',
      modalShow: false,
      admins: null,
    };
  },methods: { 
      // envoie api nouveaux commentaire
      ChangedComment(event) {
       this.idcomment = event.target.dataset.id
      axios
        .put("http://localhost:3000/post/modify", {
          message: this.commentChanged,
          userid: localStorage.getItem("jwt"),
          id: this.idcomment,
        })
         this.$router.go(0);
    },
    // crée un commentaire
    postData(e) {
      e.preventDefault();
      var optionAxios = {headers: {"Content-Type": "application/x-www-form-urlencoded",},};
      axios
        .post(
          "http://localhost:3000/comment/create",
          {
            userid: localStorage.getItem("jwt"),
            comment: this.comment,
            postid: this.infos[0].id,
          },
          { optionAxios }
        )
        .then((response) => {
          this.$router.go(0); // refresh de la page
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // supprimer un post
    deletePost(event) {
      this.idpost = event.target.dataset.id
      axios
        .delete("http://localhost:3000/post/delete", {
           data: {
            userid: localStorage.getItem("jwt"),
            id: this.idpost,
           }
        })
        .then((response) => {
          this.$router.go(0);
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 
    // admin supprime un post
    AdmindeletePost(event) {
      this.idpost = event.target.dataset.id
      axios
        .delete("http://localhost:3000/post/admin/delete", {
           data: {
            id: this.idpost,
           }
        })
        .then((response) => {
          this.$router.go(0);
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 
    // supprimer un commentaire
    delecteComment(event) {
      this.idcomment = event.target.dataset.id
       axios
        .delete("http://localhost:3000/comment/delete", {
           data: {
             userid: localStorage.getItem("jwt"),
            id: this.idcomment,
           }
        })
        .then((response) => {
          this.$router.go(0);
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }, // admin supprime commentaire
     AdmindelecteComment(event) {
      this.idcomment = event.target.dataset.id
       axios
        .delete("http://localhost:3000/comment/admin/delete", {
           data: {
            id: this.idcomment,
           }
        })
        .then((response) => {
          this.$router.go(0);
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
     axios.get("http://localhost:3000/post").then((response) => {
      this.infos = response.data  
      this.user = JSON.parse(localStorage.getItem("user"))
     }),
     axios.get("http://localhost:3000/comment").then((response) => {
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
};
</script>
