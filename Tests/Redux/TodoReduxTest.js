import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/TodoRedux'

describe("Todo", ()=>{
  it("add", ()=>{
    const todoTitle = "Todo 1"
    const state = reducer(INITIAL_STATE, Actions.todoAdd(todoTitle))
    expect(Object.keys(state.todos)).toHaveLength(1)
    const addedTodo = Object.keys(state.todos).reduce((pre, value)=>{
      if(state.todos[value].title == todoTitle){
        return state.todos[value]
      }
      return pre
    },null)
    expect(addedTodo).not.toBeNull()
    expect(addedTodo.title).toBe(todoTitle)
  })

  it("add null Title", ()=>{
    const state = reducer(INITIAL_STATE, Actions.todoAdd())
    expect(Object.keys(state.todos)).toHaveLength(1)
    const addedTodo = Object.keys(state.todos).reduce((pre, value)=>{
      if(state.todos[value].title == null){
        return state.todos[value]
      }
      return pre
    },null)
    expect(addedTodo).not.toBeNull()
    expect(addedTodo.title).toBeUndefined()
  })
  it("delete", ()=>{
    const todoTitle = "Todo 1"
    let state = reducer(INITIAL_STATE, Actions.todoAdd(todoTitle))
    expect(Object.keys(state.todos)).toHaveLength(1)
    const addedTodo = Object.keys(state.todos).reduce((pre, value)=>{
      if(state.todos[value].title == todoTitle){
        return state.todos[value]
      }
      return pre
    },null)
    state = reducer(state, Actions.todoDelete(addedTodo.id))
    expect(Object.keys(state.todos)).toHaveLength(0)
  })

  it("change", ()=>{
    const todoTitle = "Todo 1"
    let state = reducer(INITIAL_STATE, Actions.todoAdd(todoTitle))
    expect(Object.keys(state.todos)).toHaveLength(1)
    const addedTodo = Object.keys(state.todos).reduce((pre, value)=>{
      if(state.todos[value].title == todoTitle){
        return state.todos[value]
      }
      return pre
    },null)

    const changedTitle = "Todo changed"
    state = reducer(state, Actions.todoChange(addedTodo.id, {title:changedTitle}))
    expect(state.todos[addedTodo.id].title).toBe(changedTitle)

    state = reducer(state, Actions.todoChange(addedTodo.id, {is_complete:true}))
    expect(state.todos[addedTodo.id].is_complete).toBeTruthy()

    state = reducer(state, Actions.todoChange(addedTodo.id, {is_complete:false}))
    expect(state.todos[addedTodo.id].is_complete).not.toBeTruthy()
  })
})