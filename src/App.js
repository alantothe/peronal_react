import './App.css';
import React,{ useState } from 'react';

import GitHub from './components/svg/github';
import Twitter from './components/svg/Twitter';
import Projects from './components/svg/Projects';
import Resume from './components/svg/Resume';
import Email from './components/svg/Email';

import Alan from './components/images/alan';

function App() {
  const [currentTitle, setCurrentTitle] = useState('');

  const handleMouseEnter = (title) => setCurrentTitle(title);
  const handleMouseLeave = () => setCurrentTitle('');

  const svgs = [
    { id: 1, title: 'GitHub', Component: GitHub },
    { id: 2, title: 'Twitter', Component: Twitter },
    { id: 3, title: 'Projects', Component: Projects },
    { id: 4, title: 'Resume', Component: Resume },
    { id: 5, title: 'Email', Component: Email },
  ];

  return (
    <div className="">
      <Alan/>

      <div className='flex justify-center p-2' id="icon-container">
        {svgs.map(({ id, title, Component }) => (
          <div key={id} onMouseEnter={() => handleMouseEnter(title)} onMouseLeave={handleMouseLeave}>
            <Component />
          </div>
        ))}
      </div>
      <div>
      {currentTitle && <h1 className='flex justify-center text-white text-lg font-mono font-thin transition-opacity duration-500 ease-in-out opacity-100'>{currentTitle}</h1>}
      </div>
    </div>
  );
}

export default App;

