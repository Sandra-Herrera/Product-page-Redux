import React from "react";
import {} from "reactstrap";
import styles from "./landingPage.module.css";
import BreadcrumbArea from "../breadcrumb/BreadcrumbArea";
import NavBarArea from "../headerProduct/HeaderProduct";
import TableProduct from "../tableProduct/TableProduct";
import Footer from "../footer/Footer";

const LandingPage = () => {
  return (
    <>
      <div className={styles.landingContainer}>
        <section className={styles.rightContainer}>
          <BreadcrumbArea />
          <NavBarArea />
          <TableProduct />
          <Footer />
        </section>
        <section className={styles.leftContainer}>test</section>
      </div>
    </>
  );
};

export default LandingPage;
