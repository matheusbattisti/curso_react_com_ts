export const Card = ({ card, onClick }) => {
  return (
    <div
      className={`card ${card.isFlipped ? "flipped" : ""}`}
      onClick={() => onClick(card)}
    >
      {card.isFlipped ? card.value : "?"}
    </div>
  );
};
