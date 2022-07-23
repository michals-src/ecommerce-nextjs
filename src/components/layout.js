import { useState } from "react";
import Head from "next/head";
import classNames from "classnames";

import { useSelector } from "react-redux";
import { selectModal } from "../slice/modalSlice";

import Navbar from "./navbar";
import Footer from "./footer";

import Modal from "./modal";

const ModalWrapper = ({ setActive }) => {
  const modal = useSelector(selectModal);

  if (modal.visible) {
    setActive(true);
  } else {
    setActive(false);
  }

  return <div>{modal.visible && <Modal>{modal.value}</Modal>}</div>;
};

export default function Layout({ title, children, ...props }) {
  const [is_modal, _is_modal] = useState(false);

  const _global_cn = classNames({
    "overflow-y-visible": !is_modal,
    "overflow-y-scroll": is_modal,
  });

  return (
    <>
      <Head>
        <title>{title ? title : "Strona e-commerce next.js"}</title>
        <meta name='description' content='Generated by create next app' />
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>

      <div className={_global_cn}>
        <Navbar />
        {children}
        <Footer />
      </div>

      {/** Global modal */}
      <ModalWrapper setActive={_is_modal} />
    </>
  );
}
