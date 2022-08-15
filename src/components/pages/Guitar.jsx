import slash from "../../images/slash.jpg";
import richard from "../../images/richard.jpg";
import ParentComponent from "./ParentComponent";

const guitarists = [
  {
    name: "Slash",
    image: slash,
  },
  {
    name: "Richard",
    image: richard,
  },
];

const Guitar = () => {
  return (
    <>
      {guitarists.map((guitarist) => (
        <ParentComponent
          key={guitarist.name}
          name={guitarist.name}
          image={guitarist.image}
        />
      ))}
    </>
  );
};

export default Guitar;
