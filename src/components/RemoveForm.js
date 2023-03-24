function RemoveForm({ max }) {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Remove At Index</label>
        <input type="number" min={0} max={max > 0 ? max - 1 : 0} />
        <button>Submit</button>
      </div>
    </form>
  );
}
export default RemoveForm;
