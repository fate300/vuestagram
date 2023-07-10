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

  <Container :게시물="게시물" :step="step"/>
<button @click="more" >더보기</button>


  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>
<!-- <div v-if="step == 0">내용0</div>
<div v-if="step == 1">내용1</div>
<div v-if="step == 2">내용2</div>
<button @click="step=0">버튼0</button>
<button @click="step=1">버튼1</button>
<button @click="step=2">버튼2</button> -->




</template>

<script>
//7월10일-2 tab만들기 
//동적 UI 만드는 법 1)UI 현재 상태를 데이터로 만들기 2)상태에 따라 HTML이 어떻게 보일지 
//data에 변수 만들기 step:0 v-if="step==0" 아래처럼 하면 됨 
// <!-- <div v-if="step == 0">내용0</div>
// <div v-if="step == 1">내용1</div>
// <div v-if="step == 2">내용2</div>
// <button @click="step=0">버튼0</button>
// <button @click="step=1">버튼1</button>
// <button @click="step=2">버튼2</button> -->
// 굳이 라우터 안써도 간단한 tab으로 만들 수 있음 => 근데 라우터는 뒤로가기가 잘 먹음  


//7월10일 서버로 ajax 요청하는 더보기 버튼 만들기
//ajax 쓰면 새로고침 없이도 get post 요청 가능 1. get 요청 데이터 서버에서 가져올때 2.post 요청 서버로 데이터를 보낼때
//ajax 요청하려면 axios라이브러리 나 기본 fetch 함수 쓰면 됨  
//1. axios 설치, npm install axios 2. 임포트 import axios from 'axios' 3.겟요청 =>  axios.get()
// 함수표현 진화 
// methods : {
//     more(){
  // 1. axios.get('https://codingapple1.github.io/vue/more0.json').then(function(){
        
  //              })
  //  2. arrow function 
  //  axios.get('https://codingapple1.github.io/vue/more0.json').then((결과)=>{
        
  //              })

//   3. 파라미터가 하나일때 소괄호도 없앨수 있음 
//       axios.get('https://codingapple1.github.io/vue/more0.json').then(결과=>{
        
//       })

//     }

//   }
// 가져온 데이터를 게시물 (postadata)로 추가하기만 하면 됨 아래처럼 
// methods : {
//     more(){

//       axios.get('https://codingapple1.github.io/vue/more0.json').then((결과)=>{
      
//         this.게시물.push(결과.data)
//       })

//     }

//   },

//post 하기 => axios.post('URL',{name:'Kim'}).then()[성공하면].catch()[실패하면]
// 오늘 숙제에서 오류 => method에서  변수가 들어갈 위치를 잘 못 정함 아래처럼 해야함 
// methods : {   
  // more(){
  //     this.클릭수++; 





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
import axios from 'axios'


export default {
  name: 'App',
  data(){
    return{
      step:0,
      게시물: postdata,
      클릭수: 0, 
    }
  },

  components: {
    Container,
  },
  methods : {
    
    more(){
      this.클릭수++; 

      if(this.클릭수 == 1 ){
  
      axios.get('https://codingapple1.github.io/vue/more0.json').then((결과)=>{
      
      this.게시물.push(결과.data)
    })
    }else if(this.클릭수 == 2){
   
      axios.get('https://codingapple1.github.io/vue/more1.json').then((결과)=>{
      
      this.게시물.push(결과.data)
    })

    }else if(this.클릭수 > 3){
   
      alert('더 이상 가져올 자료가 없습니다.')

 }
    }

  },
  
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