import "./index.css";
import edit from "../../media/img/edit.svg";
import deleteIcon from "../../media/img/delete.svg";

const TodoItem = ({ item, handlePressDelete, handlePressEdit }) => {
  return (
    <div className="todo-container">
      <div className={`flex-center-container todo-left-side todo-left-side-${item.status.value}`}>
        {item.status.value.toUpperCase()}
      </div>
      <div className="flex-center-container todo-center-side">{item.title}</div>
      <div className="flex-center-container todo-right-side">
        <div>{`DATE: ${item.date.slice(0, 10)}`}</div>
        <div className="todo-right-side-actions">
          <input type="image" src={edit} alt="Edit" onClick={handlePressEdit} />
          <input type="image" src={deleteIcon} alt="Delete" onClick={handlePressDelete} />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
