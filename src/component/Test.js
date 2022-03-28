import React from 'react';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import '../styles/Test.css';

function Test() {
  

  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }

  return (
    <div id="Container">
        <nav>
          <button onClick={()=>handleClick('en')} id="but" >
            English
          </button>
          <button onClick={()=>handleClick('hi')} id="but">
            Hindi
         </button>
        </nav>
        
    </div>
  );
}

export default Test;