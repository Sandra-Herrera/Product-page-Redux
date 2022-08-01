import React from "react";
import styles from "./breadcrumbArea.module.css";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";

const BreadcrumbArea = () => {
  const { breadcrumbItem } = useSelector((state) => state.products);
  return (
    <>
      <div className={styles.topBar}>
        <Breadcrumb listTag="div">
          <BreadcrumbItem href="#" tag="a">
            <Icon icon="bx:home-alt" color="#242424" width="20" height="20" />
          </BreadcrumbItem>
          {breadcrumbItem.map((item, index) => 
            
              <BreadcrumbItem 
                href={item.path} 
                tag={index===breadcrumbItem.length-1 ? 'span':'a'} 
                key={index}
                >
                {item.displayPath}
              </BreadcrumbItem>
            
          )}
        </Breadcrumb>
      </div>
    </>
  );
};

export default BreadcrumbArea;
