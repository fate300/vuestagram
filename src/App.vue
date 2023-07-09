<template>
<div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :게시물="게시물"/>

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>
</template>

<script>
//7월9일 - 2 내가 생각 못한 것 post는 한번만 쓰고 Container에서 아래처럼 하면됨 
{/* <Post :게시물="게시물[0]"/>
  <Post :게시물="게시물[1]"/>
  <Post :게시물="게시물[2]"/> */}
// 반복문으로 =>  <Post :게시물="게시물[i]" v-for=" (a,i) in 게시물" :key="i"/>
// 이것도 결과는 같음 <Post :게시물="a" v-for=" (a,i) in 게시물" :key="i"/>

//이미지는 css의 백그라운드의 이미지로 넣아야 잘 보임 => background-image:url() 
// => style에다가 오브젝트로 +``(물결위) 이용 <div class="post-body" :style="{ backgroundImage: `url(${게시물.postImage})` }"></div>



//7월9일 뷰 인스타그램 프로젝트 생성 & 레이아웃 만들기
//기획부터 하고 코드짜는게 언제나 좋음 
//Container 가져다 쓰기 1.import 하고 2.등록하고 3. 가져다 쓰면 됨 => <Container />
import Container from './Container.vue'
import postdata from './postdata.js'

export default {
  name: 'App',
  data(){
    return{
      게시물: postdata,
    }
  },

  components: {
    Container
  }
}
</script>

<style>
/* @import 'Style.css'; */

body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>