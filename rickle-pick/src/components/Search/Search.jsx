import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

const Search = ({ setPageNumber, setSearch }) => {
  return (
    <form className="form">
      <div className="container" style={{ display: "flex", justifyContent: "center", gap: "16px", width: "100%" }}>
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="form-control"
          style={{ width: "50%" }}
          placeholder='Character name... For example "Rick Sanchez"'
          type="text"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          className="btn btn-outline-dark"
          style={{ fontWeight: "bold" }}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
