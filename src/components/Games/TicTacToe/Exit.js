import { useHistory } from "react-router-dom";

function Exit() {
  const history = useHistory();

  function exit() {
    history.push("/projects");
  }

  return (
    <button className="g-btn" onClick={exit}>
      exit
    </button>
  );
}

export default Exit;
