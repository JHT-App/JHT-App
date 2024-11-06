import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Excalidraw } from '@excalidraw/excalidraw';

const Questions = () => {
  return (
    <div>
      <nav className='navBar'>
        <div>
          <h2>BANK OF SYSTEM DESIGN</h2>
        </div>
        <div className='nav-button'>
          <button>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button>Main Page</button>
          <button>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </nav>
      <div className='questionPage-content'>
        <div className='question-panel'></div>
        <div className='whiteborder-panel'>
          <Excalidraw />
        </div>
      </div>
    </div>
  );
};

export default Questions;
