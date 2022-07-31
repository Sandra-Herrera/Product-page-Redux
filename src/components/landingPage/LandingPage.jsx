import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import {} from "reactstrap";
import styles from "./landingPage.module.css";
import BreadcrumbArea from "../breadcrumb/BreadcrumbArea";
import NavBarArea from "../headerProduct/HeaderProduct";
import TableProduct from "../tableProduct/TableProduct";
import Footer from "../footer/Footer";
import LoadProduct from "../loadProduct/LoadProduct";

const LandingPage = () => {
  return (
    <>
      <div className={styles.landingContainer}>
        <section className={styles.rightContainer}>
          <BreadcrumbArea />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to="/specialProducts" />} />
              <Route
                exact
                path="/specialProducts"
                element={
                  <>
                    <NavBarArea />
                    <TableProduct />
                    <Footer />
                  </>
                }
              />
              <Route exact path="/loadProduct" element={
              <>
                <LoadProduct/>

              </>}>
              </Route>
            </Routes>
          </BrowserRouter>
        </section>
        <section className={styles.leftContainer}>test</section>
      </div>
    </>
  );
};

export default LandingPage;
