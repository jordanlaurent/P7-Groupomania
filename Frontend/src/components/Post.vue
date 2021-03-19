<template>
  <div>
    <div class="card mt-2 postView rounded-0"  v-for="info in infos" :key="info.message">
      <div class="card-body ">
        <h5 class="card-title text-primary">{{ info.name }} {{ info.prenom }}</h5>
        <p class="card-text">{{ info.message }} {{infos}} </p>
      </div>
      <!-- <img src="../assets/image/posttest.jpg" class="card-img-top" alt="..."> -->
      <hr />
      <small class="text-muted">{{ info.datemessage | moment("DD-MM-YYYY, HH:mm:ss ")}} <button id="buttonDeletePost" @click.prevent="deletePost" class="btn-warning btn-sm btn float-right ml-5" :data-id="info.id" v-if="info.idusers == user.id"> Supprimer </button></small>
       
      <hr />
      <div v-for="com in coms" :key="com.message" class="text-left">
      <span> <small class="font-weight-bold text-primary "> {{ com.name}} {{ com.prenom}}</small> <p class=" ml-5">{{com.comment}}<small class="float-right ">{{com.datecomment | moment("DD-MM-YYYY, HH:mm:ss ")}} <button id="buttonDeleteComment" @click.prevent="delecteComment" class="btn-warning btn-sm btn float-right ml-5"> Supprimer  </button></small></p></span> 
      </div>
       <input  name="comment" v-model="comment" type="text"  placeholder="Poster un commentaire" class="form-control "   required />
         <a @click.prevent="postData" class="btn-success" type="submit" >COMMENTER</a>
      </div>
    </div>
</template>
<style lang="css" scoped>
.postView {
  margin-bottom: 5%;
}
.bottomSocial {
  display: flex;
}
p {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: normal;
}
/* #buttonDeleteComment{display: none;}
#buttonDeletePost{display: none;} */
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
    };
  },methods: {
    postData(e) {
      e.preventDefault();
      var optionAxios = {headers: {"Content-Type": "application/x-www-form-urlencoded",},};
      // crée un commentaire
      axios
        .post(
          "http://localhost:3000/comment/create",
          {
            userid: localStorage.getItem("jwt"),
            comment: this.comment,
            postid: this.infos[0].id,
            // postid: this.info
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
    }, delecteComment() {
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
    },deletePost(event) {
      //Chercher mon id
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
  },
  mounted() {
     axios.get("http://localhost:3000/post").then((response) => {
      this.infos = response.data  
      this.user = JSON.parse(localStorage.getItem("user"))

    //   this.infos.forEach(info => {
    //     if ( info.idusers === user.id) {
    //       console.log("true")
    //       document.getElementById("buttonDeletePost").style.display = "block" 
    //     } else {
    //       console.log("false")
    //       document.getElementById("buttonDeletePost").style.display = 'none'
    //     }
    //   });
    //    if ( this.infos[0].idusers === user.id) {
    //     console.log("true")
    //  document.getElementById("buttonDeletePost").style.display = "block" 
    //   } else {
    //     console.log("false")
    //     document.getElementById("buttonDeletePost").style.display = 'none'
    //   }
     }),
     axios.get("http://localhost:3000/comment").then((response) => {
      this.coms = response.data
      this.idcomment = response.data[0].id
      console.log()
      let name = JSON.parse(localStorage.getItem("user"))
       if ( this.coms[0].name === name.name) {
        console.log("true")
     document.getElementById("buttonDeleteComment").style.display = "block" 
      } else {
        console.log("false")
        document.getElementById("buttonDeleteComment").style.display = 'none'
      }
     })
  }
  
};
</script>
