<template>
  <div>
    <!-- affficher les post -->
    <div class="card mt-2 postView rounded-0 "  v-for="info in infos" :key="info.id">
      <div class="card-body ">
        <h5 class="card-title "> <img :src="info.photo" class="image--cover" alt="photo de profil" > {{ info.name }} {{ info.prenom }}</h5>
        <p class="card-text h5 mt-4">{{ info.message }} </p>
        <img :src="info.image" class="img-fluid w-50 mt-4" alt="photo du post" >
      </div >
      <small v-for="admin in admins" :key="admin.id" class="text-muted">{{ info.datemessage | moment("DD-MM-YYYY, HH:mm:ss ")}}
        <br>
         <button @click.prevent="IDcom" :data-id="info.id" v-if="info.idusers == admins[0].id" type="button" class="btn btn-dark float-left " data-toggle="modal" data-target="#myModal">Modifier le Post</button>
             <!-- Modal moddifier commentaire -->
              <div class="modal fade " id="myModal" role="dialog">
                <div class="modal-dialog">
             <!-- Contenue de la modal-->
                  <div class="modal-content bg-dark text-light text-center">
                    <div class="modal-body ">
                      <p > Modifier votre post :</p>
                      <input  v-model="postChanged" required>
                    </div>
                  <div class="modal-footer justify-content-center">
                <button  type="button" class="btn btn-secondary " data-dismiss="modal">Annuler</button>
                <button  @click.prevent="ChangedPost" type="button" class="btn btn-success" data-dismiss="modal">Valider</button>
              </div>
            </div>
            </div>
            </div>
      <!-- bouton supprimer un post -->
      <button id="buttonDeletePost" @click.prevent="deletePost" class="btn-danger btn-sm btn float-right ml-1" :data-id="info.id" v-if="info.idusers == admins[0].id">x </button>
       <button id="buttonDeletePost" @click.prevent="AdmindeletePost" class="btn-danger btn-sm btn float-right ml-1" :data-id="info.id" v-if="admin.active == 1 ">Admin suppression </button></small>
      <hr/>
      <!-- afficher les commentaires -->   
      <div class="container" > 
        <span  v-for="com in coms" :key="com.id" class="comment mt-4 text-justify float-left col"> 
          <div v-if="com.postid == info.id">
            <h4><img :src="com.photo" alt="" class="rounded-circle" width="60" height="60"> {{ com.name}} {{ com.prenom}}</h4> <span class="ml-4 text-secondary"> {{com.datecomment | moment("DD/MM/YYYY ")}}</span> <br>
            <p class="ml-5 h5 mt-2">{{com.comment}} </p>
            <!-- bouton modifier commentaire -->
            <button @click.prevent="IDcom" :data-id="com.id" v-if="com.idusers == admins[0].id" type="button" class="btn  btn-dark " data-toggle="modal" data-target="#myModal1">Modifier Commentaire</button>
             <!-- Modal moddifier commentaire -->
              <div class="modal fade " id="myModal1" role="dialog">
                <div class="modal-dialog">
             <!-- Contenue de la modal-->
                  <div class="modal-content bg-dark text-light text-center">
                    <div class="modal-body ">
                      <p> Modifier votre commentaire :</p>
                      <input  v-model="commentChanged" required>
                    </div>
                  <div class="modal-footer justify-content-center">
                <button  type="button" class="btn btn-secondary " data-dismiss="modal">Annuler</button>
                <button  @click.prevent="ChangedComment" type="button" class="btn btn-success" data-dismiss="modal" >Valider</button>
              </div>
            </div>   
          </div>
        </div>
            <!-- bouton supprimer commentaire -->
            <small v-for="admin in admins" :key="admin.id">
            <button id="buttonDeleteComment" @click.prevent="delecteComment" class="btn-danger btn-sm btn  ml-1" :data-id="com.id" v-if="com.idusers == admins[0].id "> Effacer commentaire </button>
            <button id="buttonDeleteComment" @click.prevent="AdmindelecteComment" class="btn-danger btn-sm float-right btn right ml-1" :data-id="com.id" v-if=" admin.active == 1"> Admin suppression </button></small>
          </div>  
        </span>
      </div>
      <!-- bouton crée un commentaire -->
      <span >
      <input :data-id="info.id" @keyup.enter="postData" name="comment" v-model="comment" type="text"  placeholder="Poster un commentaire" class="form-control mt-3 "   required />
      <button :data-id="info.id" @click.prevent="postData" class="btn-warning form-control" type="button" >COMMENTER</button>
      </span>
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
      commentChanged: null,
      postChanged: null,
      idcom: null,
    };
  },methods: { 
      // envoie api nouveaux commentaire
      IDcom(event){
        this.idcomment = event.target.dataset.id
        this.idcom = this.idcomment
      },// changer le commentaire
      ChangedComment() {
       // e.preventDefault();
        console.log(this.commentChanged)
      axios
        .put("http://localhost:3000/comment/modify", {
          message: this.commentChanged,
          userid: localStorage.getItem("jwt"),
          id: this.idcom,
        })
         this.$router.go(0); 
    }, // changer le post
          ChangedPost() {
      axios
        .put("http://localhost:3000/post/modify", {
          message: this.postChanged,
          userid: localStorage.getItem("jwt"),
          id: this.idcom,
        })
         this.$router.go(0); 
    },
    // crée un commentaire
    postData(e) {
       this.idpost = e.target.dataset.id
      e.preventDefault();
      var optionAxios = {headers: {"Content-Type": "application/x-www-form-urlencoded",},};
      axios
        .post(
          "http://localhost:3000/comment/create",
          {
            userid: localStorage.getItem("jwt"),
            comment: this.comment,
            postid: this.idpost,
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
      this.user = JSON.parse(localStorage.getItem("jwt"))
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
