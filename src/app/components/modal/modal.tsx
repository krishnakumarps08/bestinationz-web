interface Imodal {
  open: boolean;
  close: () => void;
  title?: string;
  children: React.ReactNode;
}

import React from "react";
import { Modal } from "antd";

export const CustomModal: React.FC<Imodal> = ({ open, close, title, children }) => {
  return (
    <Modal
      open={open}
      onCancel={close}
      title={title}
      footer={null} // Customize the footer or pass it as a prop if needed
      centered
    >
      {children}
    </Modal>
  );
};

