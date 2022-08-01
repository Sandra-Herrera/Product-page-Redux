import React, { useState } from "react";
import styles from "./popUp.module.css";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { setVibilityModal } from "../../store/slices/productsSlice"
import { deleteProduct } from "../../store/slices/productsThunk"


export default function PopUp(props) {

  const {isModalVisible, confirmDelete} = useSelector((state)=>state.products)
  const dispatch = useDispatch()

  return isModalVisible ? (
    <>
      <section className={styles.modal}>
        <section className={styles.overlay}></section>
        <section className={styles.modalContent}>
            <span
              className={styles.close}
              onClick={()=>dispatch(setVibilityModal({isModalVisible:false}))}
            >
              &times;
            </span>
          {confirmDelete ? (
            <>
            <Icon icon="lucide:check-circle" color="#67c657" width="80" height="80" />
            <h2 className={styles.confirmQuestion}>
              Éxito
            </h2>
            <p className={styles.confirmMessage}>
              El producto ha sido eliminado correctamente.
            </p>
            <section className={styles.modalButtonsArea}>
              <button
                className={styles.deleteButton}
                onClick={()=>dispatch(setVibilityModal({isModalVisible:false}))}
              >
                Entendido
              </button>
            </section>
          </>
          ) : (
            <>
              <Icon
                icon="akar-icons:circle-alert"
                color="#ff9f43"
                width="80"
                height="80"
              />
              <h2 className={styles.confirmQuestion}>
                Deseas eliminar el producto?
              </h2>
              <p className={styles.confirmMessage}>
                Eliminar un producto es una acción permanente y no podrás
                recuperar el producto eliminado.
              </p>
              <section className={styles.modalButtonsArea}>
                <button
                  className={styles.deleteButton}
                  onClick={()=>dispatch(deleteProduct({product:props.product}))}
                >
                  Delete
                </button>
                <button
                  className={styles.cancelButton}
                  onClick={()=>dispatch(setVibilityModal({isModalVisible:false}))}
                >
                  Cancel
                </button>
              </section>
            </>
          )}
        </section>
      </section>
    </>
  ) : null;
}
