import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppHeader, TodoItem } from "../../components";
import { ToDoContext } from "../../utils/TodoContext";

import "./index.css";

const Home = () => {
  const navigate = useNavigate();
  const { todoList, setTodoList } = useContext(ToDoContext);

  const handleAddTodo = () => {
    navigate("/add-todo", { replace: true });
  };
  const handlePressEdit = (index) => {
    navigate(`/add-todo/${index}`);
  };
  const handlePressDelete = (index) => {
    const updatedList = [...todoList];
    updatedList.splice(index, 1);
    setTodoList(updatedList);
  };

  return (
    <div className="main-wrapper">
      <AppHeader title={"TODO"} handleRightIconPress={handleAddTodo} rightIcon={"add"} />
      <main className="todo-list-container">
        {todoList
          .sort((first, second) => {
            if (first.date < second.date) {
              return 1;
            }
            if (first.date > second.date) {
              return -1;
            }
            return 0;
          })
          .map((todo, index) => (
            <TodoItem
              key={index.toString()}
              item={todo}
              handlePressEdit={() => handlePressEdit(index)}
              handlePressDelete={() => handlePressDelete(index)}
            />
          ))}
      </main>
    </div>
  );
};

export default Home;
