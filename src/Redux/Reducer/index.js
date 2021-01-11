import { CREATE_TODO, UPDATE_TODOS, DELETE_TODOS, LOAD_TODOS } from "../types";

const initialState = {
  Todos: [],
};

const TodoReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case LOAD_TODOS: {
      return { ...state, Todos: payload.Todos };
    }
    case CREATE_TODO:
      const todoNew = {
        id: state.Todos[state.Todos.length - 1].id + 1,
        title: payload.Todos.title,
        description: payload.Todos.description,
        status: payload.Todos.status,
        createdAt: Date.now(),
      };
      return { ...state, Todos: [...state.Todos, todoNew] };
    case UPDATE_TODOS:
      const TodosUpdate = state.Todos.map((todo) =>
        +todo.id === +payload.Todos.id
          ? {
              ...todo,
              title: payload.Todos.title,
              description: payload.Todos.description,
              status: +payload.Todos.status,
            }
          : todo
      );
      return { ...state, Todos : TodosUpdate };

    case DELETE_TODOS:
      const TodosDelete = state.Todos.filter(
        (todo) => +todo.id !== +payload.Todos.id
      );
      return { ...state, Todos : TodosDelete };
    default:
      return state;
  }
};

export default TodoReducer;
