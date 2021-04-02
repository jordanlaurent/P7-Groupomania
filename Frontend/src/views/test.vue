<template>
 <div id="userModify-container">          
         <b-button id="show-btn" class="btn-success" @click="showModalComment"
      >Modifier mon message</b-button
    >
    <b-modal
      ref="my-modalComment"
      id="name-input"
      hide-footer
      title="Etes vous sur de vouloir modifer votre message ?"
    >
      <b-form-input
        id="name-input"
        v-model="commentChanged"
        required
      ></b-form-input>
      <b-button @click.prevent="ChangedComment" class="mt-3 btn-success" block
        >Valider</b-button
      >
      <b-button class="mt-2" block @click="toggleModalComment">Annuler</b-button>
    </b-modal>                                                                   
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'test',
   data() {
    return {
      file: '',
      image : '',
      userid : localStorage.getItem("jwt")
    }
  },
  methods: {
       showModalComment() {
      this.$refs["my-modalComment"].show();
    }, toggleModalComment() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modalComment"].toggle("#toggle-btn");
    },
    handleFileUpload() {
        this.file = this.$refs.file.files[0];
        },
    editProfil() {
            const formData = new FormData();
            formData.append('image', this.file)
            formData.append('userid', this.userid)
            axios.put('http://localhost:3000/test' , formData, {
                headers : {'Content-Type' : 'multipart/form-data'}
            })
            .then(() => {
                console.log('modification du profil utilisateur réussie')
               // window.location.href = `/home`
            })
            .catch(() =>{
                console.log('échec de la modification')
            })
        },
  }
}
</script>