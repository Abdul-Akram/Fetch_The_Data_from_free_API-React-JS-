import Button from "./Button";

const Toggle = ({ type, setType }) => {
  return (
    <div className="B-div">
      <Button buttonText="users" type={type} setType={setType}></Button>
      <Button buttonText="posts" type={type} setType={setType}></Button>
      <Button buttonText="comments" type={type} setType={setType}></Button>
    </div>
  );
};

export default Toggle;
