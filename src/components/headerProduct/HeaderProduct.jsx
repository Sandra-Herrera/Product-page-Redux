import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DropdownButton from "../shared/DropdownButton";
import styles from "./headerProduct.module.css";
import { Icon } from "@iconify/react";

const HeaderProduct = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() =>{

  },[]);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className={styles.topContainer}>
        <section>
          <span className={styles.titleSpan}>Productos especializados</span>
        </section>
        <section className={styles.rightSection}>
          <DropdownButton dropdownNameDisplay='Acciones masivas' iconName="bi:diagram-2" options={['opt1','opt2']} />
          <button onClick={() => navigate("/loadProduct")} className={styles.loadProductButton}>
            <Icon icon="akar-icons:plus" color="white" />
            Cargar producto
          </button>
        </section>
      </div>

      <br></br>

      <div className={styles.searchContainer}>
        <label htmlFor="num" className={styles.num}>
          No. items:
        </label>
        <select id="numbers" className={styles.optionNum}>
          <option value=""></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <input
          className={styles.searchInput}
          placeholder="Buscar por SKU"
        ></input>
        <DropdownButton dropdownNameDisplay='Gestionar Columnas' iconName='majesticons:add-column' options={['Gest opt1','Gest opt2']} background="rgba(91, 0, 162, 0.12)"/>
        <button className={styles.filterButton}>
         <Icon icon="akar-icons:filter" color="#5b00a2" width="25" height="25" />
        </button>
      </div>
    </>
  );
};

export default HeaderProduct;
