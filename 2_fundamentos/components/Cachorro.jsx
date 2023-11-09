import React from "react";

const Cachorro = ({ nome, raca }) => {
  return (
    <div>
      <p>
        O nome do cachorro é: {nome}, e sua raça é {raca}
      </p>
    </div>
  );
};

export default Cachorro;
