import React, { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import styles from "./loadProduct.module.css";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {postProducts} from "../../store/slices/productsThunk";
import { removeRouteBreadCrumb } from "../../store/slices/productsSlice"

const LoadProduct = () => {
  const dispatch = useDispatch();
  
  const navigate = useNavigate();

  const [redirect, setRedirect] = useState(false);

  const navigateProducts = () => {
    dispatch(removeRouteBreadCrumb({breadCrumbItem:{displayPath:"Carga Productos",path:"/loadProduct"}}))
    navigate("/specialProducts")
  }

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const product = {
      simple_sku:data.skuSimple,
      sku:data.sku,
      upc:data.upc,
      product_name:data.name,
      price:data.price,
      //created_at: new Date(), //en la api no existe el create_at
      enable:data.status?.toLowerCase() === "publicado" ? true : false
    }
    
    dispatch(postProducts(product));
    reset();
    if(redirect){
      navigateProducts();
    }
  };

  const saveExit = () => {
    if (Object.keys(errors).length === 0 && errors.constructor === Object){
      setRedirect(true)
    }
    handleSubmit(onSubmit);
  };
  const saveClean = () => {
    handleSubmit(onSubmit);
  };

  return (
    <>
      <div className={styles.LoadContainer}>
        <section className={styles.tittleWrapper}>
          <Icon icon="ic:sharp-less-than" color="#5b00a2" width="34" height="34" />
          <span className={styles.backTitle}>Cargar Producto</span>
        </section>
        <span className={styles.productTitle}>Datos del producto</span>
        <form className={styles.formProducts} onSubmit={handleSubmit(onSubmit)}>
          <label className={styles.loadLabel}>Nombre del producto</label>
          <input
            id="name"
            type={"text"}
            className={styles.loadInputs}
            placeholder="Escribe el nombre del producto"
            {...register("name", {
              required: {
                value: true,
                message: "* Campo Requerido",
              },
            })}
          ></input>
          {errors.name && (
            <span className={styles.errorMessage}>{errors.name.message}</span>
          )}
          <label className={styles.loadLabel}>SKU simple</label>
          <input
            id="skuSimple"
            type={"text"}
            className={styles.loadInputs}
            placeholder="Escribe el sku simple del producto"
            {...register("skuSimple", {
              required: {
                value: true,
                message: "* Campo Requerido",
              },
            })}
          ></input>
          {errors.skuSimple && (
            <span className={styles.errorMessage}>{errors.skuSimple.message}</span>
          )}
          <label className={styles.loadLabel}>Sku</label>
          <input
            id="sku"
            type={"text"}
            className={styles.loadInputs}
            placeholder="Escribe el sku del producto"
            {...register("sku", {
              required: {
                value: true,
                message: "* Campo Requerido",
              },
            })}
          ></input>
           {errors.sku && (
            <span className={styles.errorMessage}>{errors.sku.message}</span>
          )}
          <label className={styles.loadLabel}>UPC</label>
          <input
            id="upc"
            type={"text"}
            className={styles.loadInputs}
            placeholder="Escribe el código UPC del producto"
            {...register("upc", {
              required: {
                value: true,
                message: "* Campo Requerido",
              },
            })}
          ></input>
           {errors.upc && (
            <span className={styles.errorMessage}>{errors.upc.message}</span>
          )}
          <label className={styles.loadLabel}>Precio del producto</label>
          <input
            id="price"
            type={"text"}
            className={styles.loadInputs}
            placeholder="Asigna un precio al producto"
            {...register("price", {
              required: {
                value: true,
                message: "* Campo Requerido",
              },
            })}
          ></input>
           {errors.price && (
            <span className={styles.errorMessage}>{errors.price.message}</span>
          )}
          <label htmlFor="status" className={styles.loadLabel}>
            Estado:
          </label>
          <select 
            id="status" 
            className={styles.loadInputs}
            {...register("status", {
              required: {
                value: true,
                message: "* Campo Requerido",
              },
            })}
          >
            <option value="" disabled className={styles.selectDropdown}>Selecciona un estado para el producto</option>
            <option value="Publicado">Publicado</option>
            <option value="Pendiente">Pendiente</option>
            <option value="Retrasado">Retrasado</option>
          </select>
           {errors.status && (
            <span className={styles.errorMessage}>{errors.status.message}</span>
          )}

          {/* Buttons */}
          <div className={styles.loadBottomArea}>
            <section>
              <button
                className={styles.cancelButton}
                onClick={() => navigateProducts()}
              >
                Cancelar
              </button>
            </section>
            <section className={styles.loadButtonsArea}>
              <button
                id="saveExit"
                type="submit"
                className={styles.saveProduct}
                onClick={saveExit}
              >
                Guardar y Salir
              </button>
              <button
                id="saveClean"
                //type="submit"
                className={styles.loadProductButton}
                onClick={saveClean}
              >
                <Icon icon="akar-icons:plus" color="white" />
                Cargar producto
              </button>
            </section>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoadProduct;
