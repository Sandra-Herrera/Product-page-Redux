import React from "react";
import styles from "./loadProduct.module.css";
import { Icon } from "@iconify/react";

const LoadProduct = () => {
  return (
    <>
      <div className={styles.LoadContainer}>
        <span className={styles.productTitle}>Datos del producto</span>
        <form className={styles.formProducts}>
          <label className={styles.loadLabel}>Nombre del producto</label>
          <input
            className={styles.loadInputs}
            placeholder="Escribe el nombre del producto"
          ></input>
          <label className={styles.loadLabel}>SKU simple</label>
          <input
            className={styles.loadInputs}
            placeholder="Escribe el sku simple del producto"
          ></input>
          <label className={styles.loadLabel}>Sku</label>
          <input
            className={styles.loadInputs}
            placeholder="Escribe el sku del producto"
          ></input>
          <label className={styles.loadLabel}>UPC</label>
          <input
            className={styles.loadInputs}
            placeholder="Escribe el código UPC del producto"
          ></input>
          <label className={styles.loadLabel}>Precio del producto</label>
          <input
            className={styles.loadInputs}
            placeholder="Asigna un precio al producto"
          ></input>
          <label className={styles.loadLabel}>Estado</label>
          <input
            className={styles.loadInputs}
            placeholder="Selecciona un estado para el producto"
          ></input>
        </form>

        <div className={styles.loadBottomArea}>
          <section>
            <button className={styles.cancelButton}>Cancelar</button>
          </section>
          <section className={styles.loadButtonsArea}>
            <button className={styles.saveProduct}>Guardar y Salir</button>
            <button className={styles.loadProductButton}>
              <Icon icon="akar-icons:plus" color="white" />
              Cargar producto
            </button>
          </section>
        </div>
      </div>
    </>
  );
};

export default LoadProduct;
