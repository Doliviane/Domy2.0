import React, { useState } from "react";
import "./GiftBox.css";

export default function GiftBox() {
  const [isOpen, setIsOpen] = useState(false);  // pour savoir si la boîte est ouverte
  const [confetti, setConfetti] = useState(false); // pour savoir si les confettis doivent tomber

  const handleClick = () => {
    // Lors du clic, on change l'état de la boîte et des confettis
    setIsOpen(!isOpen);
    setConfetti(true);

    // Après un délai, on arrête l'animation des confettis
    setTimeout(() => {
      setConfetti(false);
    }, 2000); // Les confettis durent 2 secondes
  };

  return (
    <div className="gift-container">
      {/* Boîte cadeau */}
      <div className={`gift-box ${isOpen ? "open" : ""}`}>
        <div className="ribbon"></div>
        <div className="lid" onClick={handleClick}></div>
        <div className="box"></div>
      </div>

      {/* Message de surprise */}
      {isOpen && <div className="surprise">🎉 Surprise ! 🎁</div>}

      {/* Confettis */}
      {confetti && (
        <div className="confetti-container">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="confetti"></div>
          ))}
        </div>
      )}
    </div>
  );
}
