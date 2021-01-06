
<template>

<div class="card mt-2 postView">
  <div class="card-body notes">
    <h5 class="card-title">Jean louis</h5>
    <p class="card-text">Super projet en se moment realiser avec vue.js.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
  <img src="../assets/image/posttest.jpg" class="card-img-top" alt="...">
</div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    msg: String
  }
}
</script>
