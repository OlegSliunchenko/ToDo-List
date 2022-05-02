import "./index.css";

import add from "./../../media/img/add.svg";
import edit from "./../../media/img/edit.svg";
import deleteIcon from "./../../media/img/delete.svg";
import back from "./../../media/img/back.svg";
import save from "./../../media/img/save.svg";

const IMAGES = {
  add: add,
  edit: edit,
  delete: deleteIcon,
  back: back,
  save: save,
};

const AppHeader = ({ title, leftIcon, handleLeftIconPress, rightIcon, handleRightIconPress }) => {
  return (
    <header className="app-header">
      <input
        className={!leftIcon ? "hidden-icon" : ""}
        type="image"
        src={IMAGES[leftIcon] ?? IMAGES["back"]}
        alt={leftIcon}
        onClick={handleLeftIconPress}
      />
      <p className="app-header-title">{title}</p>
      <input
        className={!rightIcon ? "hidden-icon" : ""}
        type="image"
        src={IMAGES[rightIcon]}
        alt={rightIcon}
        onClick={handleRightIconPress}
      />
    </header>
  );
};

export default AppHeader;
