import React, {useEffect} from "react";
import { Routes, Route, HashRouter, Navigate } from "react-router-dom";
import {} from "reactstrap";
import styles from "./landingPage.module.css";
import BreadcrumbArea from "../breadcrumb/BreadcrumbArea";
import NavBarArea from "../headerProduct/HeaderProduct";
import TableProduct from "../tableProduct/TableProduct";
import Footer from "../footer/Footer";
import LoadProduct from "../loadProduct/LoadProduct";
import { getProducts } from "../../store/slices/productsThunk";
import { useDispatch } from "react-redux";
import logo from '../../img/logo.svg';
import line from '../../img/line.svg';
import { Icon } from "@iconify/react";

const LandingPage = () => {


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>

      <div className={styles.landingContainer}>
        <section className={styles.rightContainer}>
          <BreadcrumbArea />
          <HashRouter>
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
          </HashRouter>
        </section>
        <section className={styles.leftContainer}>
          <img alt="logo" src={logo} className={styles.logo}></img>

          <section className={styles.iconLeft}>
            <Icon icon="bx:home-alt" color="#676767" width="20" height="20" className={styles.menu}/>
            <img alt="line" src={line} className={styles.menu}></img>
            <Icon icon="bi:box-seam" color="#5b00a2" width="24" height="24" hFlip={true} className={styles.menu}/>
            <Icon icon="bx:bell" color="#676767" width="24" height="24" className={styles.menu}/>
            <Icon icon="bi:gear" color="#676767" width="24" height="24" className={styles.menu}/>
          </section>



        </section>
      </div>
    </>
  );
};

export default LandingPage;
