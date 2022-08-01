import React, { useEffect } from "react";
import styles from "./tableProduct.module.css";
import { Table } from "reactstrap";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/slices/productsThunk";
import Moment from 'moment';

const TableProduct = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <Table responsive>
        <thead>
          <tr>
            <th className={styles.theadTitle}>
              NOMBRE DE PRODUCTO
              <button className={styles.sortButton}>
                <Icon icon="carbon:chevron-sort" width="20" height="30" />{" "}
              </button>
            </th>
            <th className={styles.theadTitle}>
              SKU SIMPLE
              <button className={styles.sortButton}>
                <Icon icon="carbon:chevron-sort" width="20" height="30" />{" "}
              </button>
            </th>
            <th className={styles.theadTitle}>
              SKU
              <button className={styles.sortButton}>
                <Icon icon="carbon:chevron-sort" width="20" height="30" />{" "}
              </button>
            </th>
            <th className={styles.theadTitle}>
              UPC
              <button className={styles.sortButton}>
                <Icon icon="carbon:chevron-sort" width="20" height="30" />{" "}
              </button>
            </th>
            <th className={styles.theadTitle}>
              PRECIO
              <button className={styles.sortButton}>
                <Icon icon="carbon:chevron-sort" width="20" height="30" />{" "}
              </button>
            </th>
            <th className={styles.theadTitle}>
              FECHA DE CARGA
              <button className={styles.sortButton}>
                <Icon icon="carbon:chevron-sort" width="20" height="30" />{" "}
              </button>
            </th>
            <th className={styles.theadTitle}>
              ESTADO
              <button className={styles.sortButton}>
                <Icon icon="carbon:chevron-sort" width="20" height="30" />{" "}
              </button>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr key={index}>
                <td>{product.product_name}</td>
                <td>{product.simple_sku}</td>
                <td>{product.sku} </td>
                <td>{product.upc}</td>
                <td>{product.price}</td>
                <td>{Moment(new Date(product.created_at)).format('DD/MM/YYYY')}</td>
                <td>
                  <button className={styles.publishedButton}>Publicado</button>
                </td>
                <td>
                  <button className={styles.menuPoints}>
                    <Icon
                      icon="charm:menu-kebab"
                      color="#5b00a2"
                      width="20"
                      height="22"
                    />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default TableProduct;
