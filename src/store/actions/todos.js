import * as actionType from "./actionTypes";
import axios from "axios";

export const addTodo = (newTodo) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://halo-todo-backend.herokuapp.com/todos",
        newTodo
      );

      dispatch(addNewTodoToList({ ...response.data, editing: false }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addNewTodoToList = (todo) => ({
  type: actionType.ADD_NEW_TODO_TO_LIST,
  todo: todo,
});

export const deleteTodo = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`https://halo-todo-backend.herokuapp.com/todos/${id}`);
      await dispatch({
        type: actionType.DELETE_TODO,
        id: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateTodo = (updatedTodo) => {
  return async (dispatch) => {
    try {
      await axios.put(
        `https://halo-todo-backend.herokuapp.com/todos/${updatedTodo.id}`,
        updatedTodo
      );
      await dispatch({
        type: actionType.UPDATE_TODO,
        updatedTodo: updatedTodo,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateTodoList = (updatedList) => {
  return async (dispatch) => {
    try {
      await updatedList.forEach((todo) => dispatch(updateTodo(todo)));
    } catch (error) {
      console.log(error);
    }
  };
};

export const setTodoEditState = (todo) => {
  return (dispatch) => {
    try {
      const updatedTodo = { ...todo, editing: true };
      dispatch({
        type: actionType.UPDATE_TODO,
        updatedTodo: updatedTodo,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchTodosStart = () => ({
  type: actionType.FETCH_TODOS_START,
});

export const fetchTodosSuccess = (todos) => ({
  type: actionType.FETCH_TODOS_SUCCESS,
  todos: todos,
});

export const fetchTodosFail = (error) => ({
  type: actionType.FETCH_TODOS_FAIL,
  error: error,
});

export const fetchTodos = () => {
  return async (dispatch) => {
    try {
      await dispatch(fetchTodosStart());
      const response = await axios.get(
        "https://halo-todo-backend.herokuapp.com/todos"
      );
      const fetchedTodos = await response.data.map((todo) => ({
        ...todo,
        editing: false,
      }));
      await dispatch(fetchTodosSuccess(fetchedTodos));
    } catch (error) {
      console.log(error);
    }
  };
};
