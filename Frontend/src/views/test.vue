<template>
 <div id="userModify-container">
        <h1>Modifier votre profil</h1>
        <form action="submit" @submit.prevent="editProfil" class="user-modify" enctype="multipart/form-data">                                                                                                                                              
            <div class="form-group">
                <label for="file" class="label-profil-group" id="label-file">Changer votre avatar</label>
                <input type="file" id="file" name="image" ref="file" accept="image/png, image/jpeg, image/jpg" @change="handleFileUpload()">
            </div>
            <button id="submit-profil">Publier profil</button>
    
        </form>                                                                              
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
    handleFileUpload() {
        this.file = this.$refs.file.files[0];
        },
    editProfil() {
            const formData = new FormData();
            formData.append('image', this.file)
            formData.append('userid', this.userid)
            console.log(formData)
            console.log(this.userid)
            console.log(this.file)
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