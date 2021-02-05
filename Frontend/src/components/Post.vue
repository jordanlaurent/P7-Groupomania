
<template>

<div class="card mt-2 postView">
  <div class="card-body notes test" id="listOfProducts">
    <h5 class="card-title">Jean louis</h5>
    <p class="card-text">Super projet en se moment realiser avec vue.js.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
  <img src="../assets/image/posttest.jpg" class="card-img-top" alt="...">
  <hr>
  <ul class="bottomSocial">
  <i class="far fa-heart"><p>Like</p></i>
  <i class="fas fa-comment-alt pl-3"><p> Commenter</p></i> 
 </ul>
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
  props: {
    msg: String
  }
}
axios.get("http://localhost:3000/post/")
.then((response) => {
console.log(response.data);
})

</script>