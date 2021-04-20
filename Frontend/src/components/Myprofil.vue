<template>
  <div id="buttonColor">
  <div id="MyprofilCover">
    <div  v-for="user in users" :key="user.message">
      <h2 class="pb-3 dataFont text-warning">Paramétre du compte de  <span class="text-primary h1"> {{ user.name }} {{ user.prenom }}</span> </h2>
      <hr>
      <img :src="user.photo" width="340" height="340" class="pb-3 mx-auto d-block" />
      <h4 class="text-warning">Votre Biographie : <cite class="text-primary h4"> {{ user.bio }} </cite> </h4>
      <h2 class="pb-3 pl-3 text-success  dataFont text-center">{{ user.email }}</h2>
    </div>
    <form action="submit" @submit.prevent="editProfil" class="user-modify" enctype="multipart/form-data">                                                                                                                                              
      <div class="form-group">
        <label for="file" class="label-profil-group text-warning pr-2" id="label-file">Changer votre avatar</label>
        <input type="file" id="file" name="image" ref="file" class="text-warning" accept="image/png, image/jpeg, image/jpg" @change="handleFileUpload()">
        <button id="submit-profil">Publier profil</button>
      </div>
    </form>
      <b-button id="show-btn" class="btn-success" @click="showModalMail">Modifier mon adresse email</b-button>
      <b-modal ref="my-modalEmail" id="name-input" hide-footer title="Etes vous sur de vouloir modifer votre adresse email ?">
        <b-form-input id="name-input" v-model="emailChanged" placeholder="VotreEmail@outlook.fr" required></b-form-input>
          <b-button @click.prevent="ChangedEmail" class="mt-3 btn-danger" block>Valider</b-button>
          <b-button class="mt-2" block @click="toggleModalMail">Annuler</b-button>
        </b-modal>
        <br/>
      <div>
        <b-button id="show-btn" class="btn-danger mb-5" @click="showModal">Supprimer mon compte</b-button>
        <b-modal ref="my-modal" hide-footer title="Etes vous sur de vouloir supprimer votre compte ?">
          <b-button @click.prevent="delecteAccount" class="mt-3 btn-danger" block>Valider</b-button>
          <b-button class="mt-2" block @click="toggleModal">Annuler</b-button>
        </b-modal>
      </div>
  </div>
  </div>
</template>

<style scoped lang='scss'>
#MyprofilCover {
 padding: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media (max-width: 1360px) {
  .dataFont {font-size: 1.5rem;}
}
</style>

<script>
import axios from "axios";
import FormData from 'form-data';
export default {
  name: "Myprofil",
  data() {
    return {
      users:null,
      emailChanged: "",
      modalShow: false,
      passwordChanged:"",
       file: '',
      userid : localStorage.getItem("jwt")
    };
  },
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    showModalMail() {
      this.$refs["my-modalEmail"].show();
    }, showModalPassword() {
      this.$refs["my-modalPassword"].show();
    },
    toggleModal() {
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
    toggleModalMail() {
      this.$refs["my-modalEmail"].toggle("#toggle-btn");
    },toggleModalPassword() {
      this.$refs["my-modalPassword"].toggle("#toggle-btn");
    }, handleFileUpload() {
        this.file = this.$refs.file.files[0];
        },
     editProfil() {
            const formData = new FormData();
            formData.append('image', this.file)
             formData.append('userid', this.userid)
            axios.put('http://localhost:3000/photo' , formData, {
                headers : {'Content-Type' : 'multipart/form-data'}
            })
                this.$router.go(0);
        },
    ChangedEmail() {
      axios
        .put("http://localhost:3000/update", {
          email: this.emailChanged,
          userid: localStorage.getItem("jwt"),
        })
         this.email = this.emailChanged
         let user = JSON.parse(localStorage.getItem("user"))
         user.email = this.emailChanged
         localStorage.setItem("user",JSON.stringify(user))
         this.$router.go(0);
    },
    delecteAccount() {
      axios
        .delete("http://localhost:3000/user/delete", {
          data: {
            userid: localStorage.getItem("jwt"),
          },
        })
        .then((response) => {
          localStorage.clear;
          window.location = "/inscription";
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
  axios.post("http://localhost:3000/user",
        {
            userid: localStorage.getItem("jwt"),
          }).then((response) => {
            console.log(response.data)
      this.users = response.data  
     })
   }
  }
</script>