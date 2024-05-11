import styles from "./Map.module.css";
import { useSearchParams } from "react-router-dom";
const Map = () => {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <h1>
        {" "}
        position: {lat}, {lng}
      </h1>
    </div>
  );
};

export default Map;
