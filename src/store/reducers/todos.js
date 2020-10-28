import * as actionType from "../actions/actionTypes";
import { updateObject } from "../../shared/updateObject";

const initialState = {
  loading: false,
  error: false,
  todoList: [],
  filteredTodos: []
};

const addNewTodoToList = (state, action) => {
  const newTodo = action.todo;
  return updateObject(state, {
    todoList: [newTodo, ...state.todoList],
    loading: false,
  });
};

// const updateFilteredTodos = (state, action) => {
//   return updateObject(state, {
//     filteredTodos: action.filteredTodos
//   })
// }

const deleteTodo = (state, action) => {
  const updatedTodoList = state.todoList.filter(
    (todo) => todo.id !== action.id
  );
  return updateObject(state, {
    todoList: updatedTodoList,
  });
};

const updateTodo = (state, action) => {
  const updatedTodoList = state.todoList.map((todo) =>
    todo.id === action.updatedTodo.id ? action.updatedTodo : todo
  );

  return updateObject(state, {
    todoList: updatedTodoList,
  });
};

const fetchTodosStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchTodosSuccess = (state, action) => {
  return updateObject(state, { todoList: action.todos, loading: false });
};

const fetchTodosFail = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_NEW_TODO_TO_LIST:
      return addNewTodoToList(state, action);
    // case actionType.UPDATE_FILTERED_TODOS:
    //   return updateFilteredTodos(state, action);
    case actionType.UPDATE_TODO:
      return updateTodo(state, action);
    case actionType.DELETE_TODO:
      return deleteTodo(state, action);
    case actionType.FETCH_TODOS_START:
      return fetchTodosStart(state, action);
    case actionType.FETCH_TODOS_SUCCESS:
      return fetchTodosSuccess(state, action);
    case actionType.FETCH_TODOS_FAIL:
      return fetchTodosFail(state, action);
    default:
      return state;
  }
};

export default todoReducer;
