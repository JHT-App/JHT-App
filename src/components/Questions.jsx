import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Excalidraw } from '@excalidraw/excalidraw';

const Questions = ({ questionDetails, setQuestionDetails }) => {
  useEffect(() => {
    const loadData = async () => {
      const storedQuestion = localStorage.getItem('question');
      if (storedQuestion) {
        setQuestionDetails(JSON.parse(storedQuestion));
      } else return null;
    };
    loadData();
  }, []);
  console.log(questionDetails);
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
        <div className='question-panel'>
          <div>
            <div className='title'>
              <h5>Description:</h5>{' '}
            </div>{' '}
            {questionDetails.description}
          </div>
          <div>
            <div className='title'>
              <h5>Example: </h5>
            </div>

            {questionDetails.example}
          </div>
          <div>
            <div className='title'>
              <h5>Functional Requirements: </h5>
            </div>
            {questionDetails.functional_requirements}
          </div>
          <div>
            <div className='title'>
              <h5>Non-Functional Requirements: </h5>
            </div>
            {questionDetails.nonfunctional_requirements}
          </div>
          <div>
            <div className='title'>
              <h5>Assumptions: </h5>
            </div>
            {questionDetails.assumptions}
          </div>
          <div>
            <div className='title'>
              <h5>Estimated Usages: </h5>
            </div>
            {questionDetails.estimated_usages}
          </div>
          <div>
            <div className='title'>
              <h5>Link to solution: </h5>
            </div>
            {questionDetails.solution}
          </div>
        </div>
        <div className='whiteborder-panel'>
          <Excalidraw />
        </div>
      </div>
    </div>
  );
};

export default Questions;
