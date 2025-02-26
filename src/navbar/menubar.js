
import React, { useState } from 'react';
import './menubar.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? 'Fermer' : 'Ouvrir'}
      </button>
      <div className="sidebar-content">
        <h2>Options de Design</h2>
        <ul>
          <li>Couleurs</li>
          <li>Typographie</li>
          <li>Mises en page</li>
          <li>Animations</li>
          <li>Boutons</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
