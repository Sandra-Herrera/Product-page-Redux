import React from "react";
import styles from "./breadcrumbArea.module.css";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Icon } from "@iconify/react";

const BreadcrumbArea = () => {
  return (
    <>
      <div className={styles.topBar}>
        <Breadcrumb listTag="div">
          <BreadcrumbItem href="#" tag="a">
            <Icon icon="bx:home-alt" color="#242424" width="20" height="20" />
          </BreadcrumbItem>
          <BreadcrumbItem href="#" tag="a">
            Productos
          </BreadcrumbItem>
          <BreadcrumbItem href="#" tag="a">
            Productos especializados
          </BreadcrumbItem>
          <BreadcrumbItem active tag="span">
            Bootstrap
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </>
  );
};

export default BreadcrumbArea;
