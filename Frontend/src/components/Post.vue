
<template>

<div>
  <div class="card mt-2 postView" v-for="info in infos" :key="info.message"> 
  <div class="card-body notes test">
    <h5 class="card-title">Jean louis</h5>
    <p class="card-text">{{ info.message }}</p>
  </div>
  <img src="../assets/image/posttest.jpg" class="card-img-top" alt="...">
  <hr>
  <small class="text-muted">{{info.datemessage | moment("dddd MMMM do  YYYY") }}</small>
  <hr>
  <ul class="bottomSocial">
  <i class="far fa-heart"><p>Like</p></i>
  <i class="fas fa-comment-alt pl-3"><p> Commenter</p></i> 
 </ul>
  </div>
</div>

</template>
<style lang="css" scoped>
.postView{margin-bottom: 5%;}
.bottomSocial{display: flex; }
p {font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;;font-weight: normal;}
</style>

<script>

import axios from 'axios';
export default {
  name: 'Post',
  data() {
    return {
    infos:null
    };
  },
  mounted () {
     axios
     .get("http://localhost:3000/post")
     .then(response => {
       this.infos = response.data; 
     });
  },
   
}
</script>
