import React, { useState } from 'react';
import styles from './dropdownButton.module.css'
import { Icon } from "@iconify/react";

const DropdownButton = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = (e) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  }

  return (

        <ul className={styles.nav}>
          <li>
            <button style={{background:props.background || '#fff'}} className={styles.buttonDropDown} onClick={toggle} onBlur={()=> setDropdownOpen(false)}>
              <Icon icon={props.iconName} color="#5b00a2" width="24" height="24" />
              {props.dropdownNameDisplay || 'options'}
              <Icon icon="akar-icons:chevron-down" color="#5b00a2" width="24" height="24" />
            </button>
            <ul className={styles.navUl}>
              {
                dropdownOpen ?
                  props.options?.map((option,index) => {
                      return <li key={index}>
                          <div >
                            
                            <button className={styles.navButton}>{option}</button>
                            
                          </div>
                      </li>
                  })
                  :
                  ''
              }
            </ul>
          </li>
        </ul>
  );
}
export default DropdownButton;