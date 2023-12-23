import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "./CharCards.scss";

const CharCards = ({ results }) => {
  let display;
  if (results) {
    display = results.map((result) => {
      let { id, name, image, location, status, species, episode } = result;
      return (
        <div
          key={id}
          className="card"
          style={{ backgroundColor: "#212529", color: "white" }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={image} alt={name} />
          </div>
          <div>
            <div className="fs-3 fw-bolder">{name}</div>
            <div style={{ display: "flex", gap: "8px" }}>
              {(() => {
                if (status === "Alive") {
                  return (
                    <div>
                      <FontAwesomeIcon
                        icon={faCircle}
                        style={{ color: "#55cc44" }}
                        size="sm"
                      />
                    </div>
                  );
                } else if (status === "Dead") {
                  return (
                    <div>
                      <FontAwesomeIcon
                        icon={faCircle}
                        style={{ color: "#d63d3e" }}
                        size="sm"
                      />
                    </div>
                  );
                } else {
                  return (
                    <div>
                      <FontAwesomeIcon
                        icon={faCircle}
                        style={{ color: "#9e9e9e" }}
                        size="sm"
                      />
                    </div>
                  );
                }
              })()}
              <div>
                {status} - {species}
              </div>
            </div>

            <div className="fs-6 fw-bold">last known location:</div>
            <div>{location.name}</div>
            {/* <div>first seen in:</div>
            <div>{episode[0]}</div> */}
          </div>
        </div>
      );
    });
  } else {
    display = "Character not found...";
  }

  return <>{display}</>;
};

export default CharCards;
