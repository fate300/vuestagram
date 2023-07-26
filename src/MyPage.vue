<template>
  
  <div style="padding : 10px">
  <h4>팔로워</h4>
  <input placeholder="?" />
  <div class="post-header">
    <div class="profile"></div>
    <span class="profile-name">{{ follower }}</span>
  </div>
</div>


</template>

<script>
import {ref} from 'vue';
import axios from 'axios';

export default {
    name:'MyPage-page',
    setup(){
        let follower = ref([]);
        axios.get('/follower.json').then((a)=>{
           follower.value = a.data


        })

        return{follower}

    },
    
    
    data(){
        return{


        }

    }
}
</script>

<style>

</style>