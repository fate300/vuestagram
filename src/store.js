import {createStore} from 'vuex'

const store = createStore({
    state(){
        return{
            name:'kim',
            age: 20, 
            likes: 30, 
        }

    },
    mutations :{
        이름변경(state){
            state.name = 'park'
        },
        나이변경(state){
            state.age +=1
        },
        좋아요변경(state){
            state.likes +=1
        }
    
    }
})
    

export default store;