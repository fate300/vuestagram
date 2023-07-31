<template>
<div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step ==1" @click="step++">Next</li>
      <li v-if="step ==2" @click="publish">Publish</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>
<p>{{ name }}  {{ likes }}  {{ age }}</p>
  <h4>안녕 {{ $store.state.name }}</h4>
  <!-- store.js에 바꾸라고 부탁하는 방식  -->
  <button @click="$store.commit('이름변경')"> 버튼 </button>
  <p>{{ $store.state.age }}</p>

  <button @click="나이변경(10)"> 버튼 </button>
  <p>{{ $store.state.more }}</p>
  <button @click="$store.dispatch('getData')">더보기버튼</button>

<!-- 아래처럼 코드 짜면 안됨 여기서 바로 수정하면 나중에 어디서 수정했는지 못 찾음 -->
  <!-- <button @click="$store.state.name = '박'">버튼</button> -->
  <Container @write="작성글=$event" :이미지="이미지" :게시물="게시물" :step="step"/>
<button @click="more" >더보기</button>

<!-- <p>{{ now2}}{{카운터 }}</p>
<button @click="카운터++">버튼</button> -->

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" accept="image/*" type="file" id="file" class="inputfile" />
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
//7월31일 
//이미지 데이터 바인딩 :style="{'background-image': `url(${a.image})`}"


//7월26일 Composition API 
//관련된 코드들을 찢어놓지 않고 개발하는 법: Composition API 
//setup(){}안에서 데이터, methods, computed, watch만들 수 있고 hook도 걸 수 있음 





//7월25일 웹을 앱처럼 쓰기 
//1) manifest.json 2) service-worker.js 두가지 필요
//터미널에서 vue add pwa 라고 치면 됨 
//npm run build 하면 dist 폴더에 (위에 두개 다 설치됨)
//play store 등록가능한 실제 apk파일(검색해야함)

// 7월24일 Vuex 4 : mapState를 사용하면 편리할 수도 있음
//methods 함수는 사용할 때마다 실행됨, 
//computed 함수는 사용해도 실행되지 않음, 처음 실행하고 값을 간직함 => 계산결과저자용 함수들임 
//computed 함수는 이렇게 써야함 => {{now2}}
//computed는 데이터 결과 저장소 이안에 mapState 쓰면 됨 이런식으로 등록하고 바로 쓰면됨 
// computed: {
//       name(){
//         return this.$store.state.name
//       }
//      ...mapState([]),
//   },
//computed 함수는 항상 return을 써야함 
// ...mapState([]) 쓰려면 import 해야함 
//...mapState(['name','age','likes']) => 이런식으로 store에 있는거 가져와서 쓰면 됨 
//이렇게 임포트함 => import { mapState } from 'vuex'
//가져다 쓰면서 이름 짓고 싶을때 오브젝트 자료 다음처럼 => ...mapState({작명:'name',})





// 7월21일 Vuex 3 : actions 항목을 알아보자
//ajax하는 곳 or 오래걸리는 작업들 => 순차적인 작업이 필요할 경우 actions 
//actions 함수를 불러오는 방법 =>@click="$store.dispatch('getData')">
//1. 더보기 누르면 dispatch("getData")
//2. 그럼 ajax로 데어터 가져오는데 
//3.mutations를 이용해서 state에 저장 

//7월20일 Vuex homework 
//


//7월19일 Vuex 2 : store에 있는 state 데이터 바꾸는 법
//불러올때는 $store.state.name 이런 식으로 불러와야 함 
//store.js에 바꾸라고 부탁하는 방식이어야 함 
//1. store.js에 state 수정방법 정의해야함 
//2.바꿀곳에서 store.js에 부탁 해야함 =>  @click="$store.commit('이름변경')" 이런식으로 
//데이타도 보낼 수 있음 보낼 곳 에서 => <button @click="$store.commit('나이변경',10)"> 버튼 </button>
//나이변경(state,date){state.age += data} data는 넘겨받은 값을 말함 그만큼씩 증가함 



//7월18일 Vuex 1
//모든 컴포넌트들이 데이터를 공유할 수 있는 js파일 
//Vuex 설치 => npm install vuex@next
//컴포넌트 안에서 직접 수정하기 금지 
//store.js에 수정방법을 정의해두고 그 방법을 컴포넌트에서 소환해서 수정해야함 
//불러올때는 $store.state.name 이런 식으로 불러와야 함 


//7월15일  멀리 있는 컴포넌트간 데이터전송할 땐 mitt(라이브러리 설치) =>상위 상위 컴포넌트로 전달(custom event 말고)
//main.js에 아래 입력 => 자주 쓰는 라이브러리 main.js에 등록   
// import mitt from 'mitt'
// let emitter = mitt();
// let app = createApp(App)
// app.config.globalProperties.emitter = emitter; 
//app.mount('#app')

// 발사할 곳에서 this.emitter.emit()으로 발사하고 2. 받을 곳에서 this.emitter.on()으로 수신
//힌트 필터 먹일 곳에서 :class="게시물.filter"이러면 먹힘 





//7월14일 숙제 부모에게서 자식으로 보내는 props 보다 더 쉬운 slot
//gpt가 만든 것  <div class="filter-item" v-for="a in 필터들" :key="a" :class="['filter-item', a]" :style="`background-image:url(${이미지})`"></div> 
//강사가 만든 것 
// container에서 필터들이 아니라 반복문 값인 a를 필터로 바꿔서 가져옴 <div :class="필터+ ' filter-item'" :style="`background-image:url(${이미지})`"></div> 
//class 앞에 :(콜론)찍으면 데이터 바인딩 됨 
//또 다른 class를 만들어서 해도 된다고 함 
//<div :class="필터" class="filter-item"~~~>
//1.자식에게 구멍뚫기 <slot></slot>
//2.부모의 <component>{{반복문 값도 감 (필터)}} </component>를 벌려서 안에 넣으면 slot에게 뿅감
//슬롯을 여러개 써야 할때  자식 자리에 <slot name="a"></slot> <slot name="b"></slot>
//부모자리에 <template v-slot:a> </template>
//slot 사용할때 부모가 자식데이터 필요한 경우 
// 자식 데이타에서 <slot :msg="msg"></slot>
// <!-- <template v-slot:default="작명">{{ 작명.msg }}</template> -->


//7월13일 업로드한 이미지 인스타그램 필터 기능 만들기 (잡기술)

//7월12일 글 발행기능 만들기 
//내 질문: 저번 시간 숙제 app.vue에서 사진등록해서 container.vue로 옮기는 걸 어쩌라는 건지 props도 못쓰는데
//내 질문이 맞음 함수에서 쓴 변수를 옮긴적이 없음 =>data 에서 이미지:'' 함수에서  this.이미지 = url; 이렇게 하면 들어감


//7월11일 서버없이 업로드한 이미지 다루기 (잡기술)
//이미지 업로드한걸 HTML에 보여주려면? 1)FileReader() 2)좀더 가벼움 => URL.createObjectURL()
//change="upload" multiple => 다양한 이미지 업로드 가능 accept="image/*" 



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
import { mapMutations, mapState } from 'vuex'


export default {

  name: 'App',
  data(){
    return{
      step:3,
      게시물: postdata,
      클릭수: 0, 
      이미지:'',
      작성글:' ',
      선택한필터:'',
      카운터:0,
    }
  },
  mounted(){
    this.emitter.on('박스클릭함', (a)=>{
    this.선택한필터 = a
  })
  },

  components: {
    Container,
  },

  computed: {
    // now2(){
    //   return new Date()
    // },
      name(){
        return this.$store.state.name

      },
      ...mapState(['name','age','likes'])

  },
  methods : {
    ...mapMutations(['setMore','좋아요','나이변경']),

    // now(){
    //   return new Date()
    // },
    publish(){
      var 내게시물 ={
        name: "Kim Hyun",
        userImage: "https://picsum.photos/100?random=3",
        postImage: this.이미지,
        likes: 19,
        date: "May 15",
        liked: false,
        content: this.작성글,
        filter: this.선택한필터,
      };
      this.게시물.unshift(내게시물)
      this.step=0;
    },
    

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
    },

    upload(e){
      let 파일 = e.target.files; 
      
      let url = URL.createObjectURL(파일[0])
      console.log(url)
      this.이미지 = url;
      this.step++;
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