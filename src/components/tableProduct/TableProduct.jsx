import React from "react";
import styles from "./tableProduct.module.css";
import { Table } from "reactstrap";
import { Icon } from "@iconify/react";

const TableProduct = () => {
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
                <Icon icon="carbon:chevron-sort"  width="20" height="30" />{" "}
              </button>
            </th>
            <th className={styles.theadTitle}>
              SKU
              <button className={styles.sortButton}>
                <Icon icon="carbon:chevron-sort"  width="20" height="30" />{" "}
              </button>
            </th>
            <th className={styles.theadTitle}>
              UPC
              <button className={styles.sortButton}>
                <Icon icon="carbon:chevron-sort"  width="20" height="30" />{" "}
              </button>
            </th>
            <th className={styles.theadTitle}>
              PRECIO
              <button className={styles.sortButton}>
                <Icon icon="carbon:chevron-sort"  width="20" height="30" />{" "}
              </button>
            </th>
            <th className={styles.theadTitle}>
              FECHA DE CARGA
              <button className={styles.sortButton}>
                <Icon icon="carbon:chevron-sort"  width="20" height="30" />{" "}
              </button>
            </th>
            <th className={styles.theadTitle}>
              ESTADO
              <button className={styles.sortButton}>
                <Icon icon="carbon:chevron-sort"  width="20" height="30" />{" "}
              </button>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">Botella reciclada de 100ml</td>
            <td>BO-03842552-P </td>
            <td>TA-03842552-P</td>
            <td>003842</td>
            <td>$ 125.00</td>
            <td>27/07/2022</td>
            <td>
              <button className={styles.publishedButton}>
                Publicado
              </button>
            </td>
            <td>
              <button className={styles.menuPoints}>
                <Icon icon="charm:menu-kebab" color="#5b00a2" width="20" height="22" />
              </button>
            </td>
          </tr>
          <tr>
            <td scope="row">Botella reciclada de 100ml</td>
            <td>BO-03842552-P </td>
            <td>TA-03842552-P</td>
            <td>003842</td>
            <td>$ 125.00</td>
            <td>27/07/2022</td>
            <td>
              <button className={styles.publishedButton}>
                Publicado
              </button>
            </td>
            <td>
              <button className={styles.menuPoints}>
                <Icon icon="charm:menu-kebab" color="#5b00a2" width="20" height="22" />
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default TableProduct;
