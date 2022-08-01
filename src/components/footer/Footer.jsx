import React from "react";
import styles from "./footer.module.css";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import {useSelector} from "react-redux";

const Footer = () => {
  const {products, allProducts} = useSelector((state)=>state.products);

  return (
    <>
      <div className={styles.containerFooter}>
      <div>
          <span>Mostrando {products?.length} de {allProducts?.length} resultados</span>
        </div>
        <div>
        <Pagination aria-label="Page navigation example">
          <PaginationItem disabled>
            <PaginationLink first href="#" />
          </PaginationItem>
          <PaginationItem disabled>
            <PaginationLink href="#" previous />
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" next />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" last />
          </PaginationItem>
        </Pagination>
        </div>
      </div>
    </>
  );
};

export default Footer;
