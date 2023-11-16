import { bindActionCreators, createStore } from "redux";
function todoReducer(state,action)
{


    if(action.type=='add_todo')
    {
        {
            var nextId = state.length + 1;
            return([...state, { id: nextId, isFinished: false, text:action.payload.todoText }])
          }
        

    }
    else if(action.type=='edit_todo')
    {
         
          const newTodoList=state.map(todo=>{
            if(todo.id==action.payload.id)
            {
              todo.text=action.payload.newTodo
            }
            return todo;
            
          })
          return newTodoList
        
        
      
    }
    else if (action.type='finish_todo')
    {
        const newTodoList=state.map(todo=>{
            if(todo.id==action.payload.id)
            {
              todo.isFinished=action.payload.state
            }
            return todo;
            
          })
          return newTodoList
    }
    else if(action.type=='delete_todo')
    {
        const newList=state.filter(todo=>todo.id!=action.payload.id)
        return newList;
    }

    return state
}

function userReducer(state,action)
{

} 

const store=createStore(todoReducer,[]);
store.subscribe(()=>console.log("When the  dispatch method is called automatically subscribe is called"))
console.log(store)
console.log("\n")
 
console.log("\n")
console.log(store.getState());

console.log("\n")
 
console.log("\n")
store.dispatch({type:'add_todo',payload:{todoText:'t22'}})
console.log("\n")
console.log("\n")


console.log("After Dispatch the state is \n")
console.log(store.getState());

console.log("\n")
 

const addTodo=(todoText)=>({type:'add_todo',payload:{todoText}})



console.log("\n")
store.dispatch({type:'add_todo',payload:{todoText:'t23'}})
store.dispatch({type:'add_todo',payload:{todoText:'t24'}})
store.dispatch(addTodo('t33'))

console.log("\n")
console.log(store.getState());


const actions=bindActionCreators({addTodo},store.dispatch);
actions.addTodo('t44')

console.log(store.getState());