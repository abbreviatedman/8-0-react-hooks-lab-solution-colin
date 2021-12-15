import { useState } from "react";
import "./FirstPet.css";

const FirstPet = () => {
  const [isFirst, setIsFirst] = useState(false);

  const toggleIsFirst = () => {
    setIsFirst(!isFirst);
  };

  return (
    <section className="first-pet">
      <h4>Is this your first pet?</h4>
      <br />
      <form>
        <input type="checkbox" onChange={toggleIsFirst} />
      </form>
      <h5>{isFirst ? "Yes" : "No"}</h5>
    </section>
  );
};

export default FirstPet;
