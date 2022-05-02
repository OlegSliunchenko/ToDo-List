import { useContext, useState } from "react";
import Select from "react-select";
import { useNavigate, useParams } from "react-router-dom";

import { AppHeader } from "../../components";

import "./index.css";
import { ToDo } from "../../models";
import { ToDoContext } from "../../utils/TodoContext";

const OPTIONS = [
  { value: "new", label: "New" },
  { value: "in-progress", label: "In progress" },
  { value: "done", label: "Done" },
  { value: "canceled", label: "Canceled" },
];

const AddTodo = ({ isEdit = false }) => {
  const navigate = useNavigate();
  const { todoList, setTodoList } = useContext(ToDoContext);
  let { id } = useParams();

  const [title, setTitle] = useState(id ? todoList[id].title : "");
  const [description, setDescription] = useState(id ? todoList[id].description : "");
  const [selectedOption, setSelectedOption] = useState(id ? todoList[id].status : OPTIONS[0]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleLeftIconPress = () => {
    navigate("/", {
      replace: true,
    });
  };

  const handleRightIconPress = () => {
    if (selectedOption.value && title && description) {
      const updatedList = [...todoList];
      if (id) {
        updatedList[id] = {
          status: {
            value: selectedOption.value,
            label: selectedOption.label,
          },
          title: title,
          description: description,
          date: updatedList[id].date,
        };
      } else {
        updatedList.push(
          new ToDo(
            {
              value: selectedOption.value,
              label: selectedOption.label,
            },
            title,
            description,
            new Date().toISOString()
          )
        );
      }
      setTodoList(updatedList);

      navigate("/", {
        replace: true,
      });
      return;
    }
    alert("Please, fill all fields!");
    // navigate("/", {
    //   state: new ToDo(selectedOption.value, title, new Date().toISOString().slice(0, 10)),
    // });
  };

  return (
    <div className="main-wrapper">
      <AppHeader
        title={"TODO"}
        leftIcon={"back"}
        handleLeftIconPress={handleLeftIconPress}
        handleRightIconPress={handleRightIconPress}
        rightIcon={"save"}
      />
      <div className={"flex-container add-todo-form-container"}>
        <div className={"text-input-wrapper"}>
          <p className={"text-input-label"}>Status</p>
          <Select
            isDisabled={!isEdit}
            options={OPTIONS}
            className="status-select"
            classNamePrefix="select-status"
            name="status"
            defaultValue={selectedOption}
            onChange={setSelectedOption}
          />
        </div>
        <div className={"text-input-wrapper"}>
          <p className={"text-input-label"}>Title</p>
          <div>
            <input
              maxLength={40}
              className={"text-input text-input-title"}
              name="title"
              type="text"
              onChange={handleTitleChange}
              value={title}
            />
            <div className={"text-input-count"}>{`${title.length} / 40`}</div>
          </div>
        </div>
        <div className={"text-input-wrapper"}>
          <p className={"text-input-label"}>Detail</p>
          <div>
            <textarea
              name="description"
              value={description}
              onChange={handleDescriptionChange}
              maxLength={250}
              className={"text-input text-input-description"}
              rows="4"
              cols="50"
            />
            <div className={"text-input-count"}>{`${description.length} / 250`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
