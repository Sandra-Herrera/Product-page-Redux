import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { deleteProduc, setVibilityModal} from "../../store/slices/productsSlice"
import PopUp from "../popUp/PopUp";

const KebabMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const toggle = () => {
    setIsOpen(!isOpen);
  };


  const askDeleteProduct = () =>{
    dispatch(setVibilityModal({isModalVisible:true}))
  }

  return (
    <>
      <PopUp product={props.product}/>
      <Dropdown isOpen={isOpen} toggle={toggle}>
        <DropdownToggle color={"white"}>
          <Icon
            icon="charm:menu-kebab"
            color="#5b00a2"
            width="20"
            height="22"
          />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem style={{ fontWeight: 500, color: "black" }}>
            <Icon icon="akar-icons:eye" color="#676767" width="24" height="24" />
            Ver Detalles
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem style={{ fontWeight: 500, color: "red" }} onClick={()=>askDeleteProduct()}>
            <Icon icon="bi:x" color="#ff1515" width="24" height="24" />
            Eliminar producto
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default KebabMenu;
