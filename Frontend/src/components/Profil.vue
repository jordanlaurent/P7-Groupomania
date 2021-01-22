<template>
<div class="template">
  <ul class="icon">
    <i class="fas fa-3x fa-book-open"></i>
    <hr>
    <i class="fas fa-3x fa-home logoprofil"></i>
    <i class="fas fa-3x fa-calendar-week logoprofil"></i>
    <i class="fas fa-3x fa-comment logoprofil"></i>
    <i class="fas fa-3x fa-user-cog logoprofil"></i>
  </ul>
        <router-link to="/" class="disconnectbutton"><i class="fas fa-2x fa-sign-out-alt"></i></router-link>
</div>
</template>

<script>
export default {
  name: 'Profil',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media (min-width: 860px) {
.icon{display: flex; flex-direction:column;color: white;min-height: 100vh;}
.template{max-width: 100px;padding-top: 3%;}
.disconnectbutton{ bottom: 0;color: white;}
.logoprofil{padding:9px;}
hr{
  border-color: #ffffff ;
  border-style: solid ;
  border-width:2px ;
  margin: 10px 0;}
}
@media (max-width: 860px) {
.icon{display: inline-block; flex-direction:row;color: white; justify-content: space-around;}
.logoprofil{padding:9px;}
}
.template{background-color:#0a3d62}
h3 {
  margin: 40px 0 0;
}
h5{
  color: white;
  margin-top: 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #c95c29;
}
</style>
