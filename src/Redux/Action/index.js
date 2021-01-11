import axios from "axios";
import { CREATE_TODO, UPDATE_TODOS, DELETE_TODOS, LOAD_TODOS } from "../types";

export const createTodo = (data) => async (dispatch) => {
  dispatch({
    type: CREATE_TODO,
    payload: { Todos: data },
  });
};

export const loadTodos = () => async (dispatch) => {
  const data = await axios.get("https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list")
  dispatch({
    type: LOAD_TODOS,
    payload: { Todos: data.data },
  });
};

export const updateTodo = (id, data) => async (dispatch) => {
  dispatch({
    type: UPDATE_TODOS,
    payload: { Todos: { id, ...data } },
  });
};

export const deleteTodo = (id) => async (dispatch) => {
  dispatch({
    type: DELETE_TODOS,
    payload: { Todos: { id } },
  });
};
