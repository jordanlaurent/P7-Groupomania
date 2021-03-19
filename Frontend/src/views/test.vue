<template>
  <div id='main'>
      <input type="file" name="picture" id="picture">
      <!-- Le bouton d'envoi lié à une fonction d'envoi -->
      <button @click="envoi()">Envoyer</button>
  </div>
</template>

<script>
import axios from "axios";
import FormData from 'form-data';
export default {
     name: "test",
  methods: {
    envoi(){
      // Récupération de l'image
      let img = document.getElementById('picture').files[0]
      // Création d'un formData obligatoire pour envoi de l'image
        var formData = new FormData()
        formData.append('img', img)
        formData.append('userid', localStorage.getItem("jwt"))
        // Envoi des données sur l'url du serveur (mettez la votre) en POST en envoyant le formData contenant notre image et notre texte
        axios.put('http://localhost:3000/photo', formData)
          .then((resp) => {
            console.log(resp)
          })
          .catch((err) => {
            console.log(err.response)
          })
    }
  }
}
</script>