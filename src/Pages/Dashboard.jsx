import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadTodos } from "../Redux/Action";
import BoxTodo from "../Components/BoxTodo";
import InputTodo from "../Components/InputTodo";
import Modal from "../Components/Modal";
import TodoModal from "../Components/TodoModal";

export const Dashboard = ({ loadTodos, todos }) => {
  const [showModal, setShowModal] = useState(false);
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  const handleClickBox = (data) => {
    setShowModal(true);
    setTodo(data);
  };
  return (
    <>
      {todos && todos.length > 0 && (
        <>
          <nav className="navbar">
            <h1 className="title-navbar">Todo-List</h1>
          </nav>

          <main className="container-main">
            <InputTodo />
            <div className="container-todos">
              <div>
                <h2 className="sub-title text-center">Todo Belum Selesai</h2>
                <div className="column">
                  {todos.map(
                    (todo) =>
                      +todo.status === 0 && (
                        <BoxTodo
                          data={todo}
                          key={todo.id}
                          onClick={() => handleClickBox(todo)}
                        />
                      )
                  )}
                </div>
              </div>
              <div>
                <h2 className="sub-title text-center">Todo Selesai</h2>
                <div className="column-reverse">
                  {todos.map(
                    (todo) =>
                      +todo.status === 1 && (
                        <BoxTodo
                          data={todo}
                          key={todo.id}
                          onClick={() => handleClickBox(todo)}
                        />
                      )
                  )}
                </div>
                <div>
                  <h1>Penambahan Fitur</h1>
                </div>
              </div>
            </div>
          </main>
        </>
      )}
      {showModal && todo !== null && (
        <Modal close={() => setShowModal(false)}>
          <TodoModal data={todo} close={() => setShowModal(false)} />
        </Modal>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  todos: state.Todos,
});

const mapDispatchToProps = {
  loadTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
