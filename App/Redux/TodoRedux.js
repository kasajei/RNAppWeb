import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import uuidv4 from 'uuid/v4'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  todoAdd: ['title'],
  todoDelete: ['id'],
  todoChange: ['id', 'diff'],
})

export const TodoTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  todos: {}, // {id:{id:, title:, is_complete:, order:}}
})

/* ------------- Selectors ------------- */

/* ------------- Reducers ------------- */
export const todoAdd = (state, {title}) =>{
  const {todos = {}} = state
  const id = uuidv4()
  const newTodos = todos.merge(
    {
      [id]:{
        id:id,
        title:title, 
        is_complete:false, 
        order:Object.keys(todos).length //TODO: this is tempolary value.
      }
    })
  return state.merge({todos:newTodos})
}

export const todoDelete = (state, {id}) =>{
  const {todos} = state
  const newTodos = todos.without([id])
  return state.merge({todos:newTodos})
}

export const todoChange = (state, {id, diff})=>{
  const {todos} = state
  newTodos = todos.merge({[id]:diff}, {deep: true})
  return state.merge({todos:newTodos})
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TODO_ADD]: todoAdd,
  [Types.TODO_DELETE]: todoDelete,
  [Types.TODO_CHANGE]: todoChange,
})
