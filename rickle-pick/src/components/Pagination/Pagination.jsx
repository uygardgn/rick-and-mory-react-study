const MyPagination = ({ pageNumber, setPageNumber }) => {
  const next = () => {
    if (pageNumber === 42) return;
    setPageNumber((x) => x + 1);
  };
  const prev = () => {
    if (pageNumber === 1) return;
    setPageNumber((x) => x - 1);
  };
  return (
    <div style={{ display: "flex", gap: "24px" }}>
      <button
        className="btn btn-outline-primary"
        style={{ fontWeight: "bold" }}
        onClick={prev}
      >
        Prev
      </button>
      <button
        className="btn btn-outline-primary"
        style={{ fontWeight: "bold" }}
        onClick={next}
      >
        Next
      </button>
    </div>
  );
};

export default MyPagination;
