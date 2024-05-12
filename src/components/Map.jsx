import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
const Map = () => {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const navigate = useNavigate();
  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <h1>Map</h1>
      <h1>
        position: {lat}, {lng}
      </h1>
    </div>
  );
};

export default Map;
