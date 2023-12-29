import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>
      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur non
          vitae atque similique? Quasi quis, ipsum obcaecati animi excepturi
          nulla, modi laudantium doloremque deleniti, voluptatem delectus
          aliquam sequi! Eligendi, odio."
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Mt. Dagaldul, Batangas"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur non
          vitae atque similique? Quasi quis, ipsum obcaecati animi excepturi
          nulla, modi laudantium doloremque deleniti, voluptatem delectus
          aliquam sequi! Eligendi, odio."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
