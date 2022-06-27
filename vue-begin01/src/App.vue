<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from "./components/HelloWorld.vue";
 export default{
    data(){
      return {
        msg: '<h2>"Hello Vue!"</h2>',
        num:0,
        uname:"张三",
        state:1,
        url:'src/assets/loading.png',
        id:"d1"
      }
    },
    methods:{
        changeName(){
          switch (this.state) {
            case 1:
              this.uname = "张三";
              this.url="src/assets/han.jpg";
              this.state++;
              break;
            case 2:
              this.uname = "李四";
              this.url = "src/assets/loading.png";
              this.state++;
              break;
            case 3:
              this.uname = "王五";
              this.url = "src/assets/logo.png";
              this.state = 1;
              break;
            default:
              break;
          }
        }
    }
 }
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <div>
  <p v-html="msg">
   
  </p>
  <p>
    num
  </p>
  <p>
    {{num}}
  </p>
  <p>
    {{uname}}
  </p>
  <p v-once>{{uname}}</p>
  <button @click="changeName">改变名字和图片</button>
  <p v-bind:id="id">v-bind绑定</p>
  <img v-bind:src="url" alt="">
  </div>
  
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
