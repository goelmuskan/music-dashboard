import React from 'react';
import './List.css';
import DropFileInput from './DropFileInput';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Toggle from "./toggle"
import { useTranslation } from 'react-i18next';
import Test from './Test';
//import { faSignout } from "@fortawesome/free-solid-svg-icons";
//import LogoutIcon from '@mui/icons-material/Logout';
const PhotoPage = () => {

  const onFileChange = (files) => {
    console.log(files);
}
const { t } = useTranslation();
  return (
    <div id="main">
          <div id="white">
              <div id="top"></div>
              <div id="abc">
                <nav>
                <ul>
                        
                        <li><a href="/"><FontAwesomeIcon icon={faHome} />{t('Nav.1')}</a></li>
                        <li><a href="/Dashboard1">{t('Nav.2')}</a></li>
                        <li><a href="/Dashboard2">{t('Nav.3')}</a></li>
                        <li><a href="/Dashboard3">{t('Nav.4')}</a></li>
                        <li><a href="#">{t('Nav.5')}</a></li>
                        <Toggle />
                        <Test/>
                    </ul>
                    
                </nav>
                <p id="MText">{t('Title.1')}</p>
              </div>
              <div id="pad">
              <div class="search-container">
                <form action="#search">
                  <input type="text" placeholder={t('Search.1')} name="search" id="sname"/>
                  <button type="submit"><FontAwesomeIcon icon={faSearch}/></button>
                </form>
              </div>
              <h3 id="or">{t('Or.1')}</h3>
                <div>
                  <DropFileInput class="frontContent__uploadButton sc-button sc-button-cta sc-button-primary sc-button-large"
                        onFileChange={(files) => onFileChange(files)}
                    />
                  </div>
                    
              </div>
          </div>
    </div>
  );
};
  
export default PhotoPage;