import { useState } from "react";

function RemoveForm({onSubmit, max }) {
  const [n, setN] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(n);
  };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Remove At Index</label>
        <input
          type="number"
          min={0}
          max={max > 0 ? max - 1 : 0}
          onChange={(e) => setN(parseInt(e.target.value))}
        />
        <button>Submit</button>
      </div>
    </form>
  );
}
export default RemoveForm;
