"use client";
import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { Input } from "antd";
import { Button } from "antd";
import { DatePicker, DatePickerProps } from "antd";
import { ConformationModal } from "./conformation-modal";
export const EnquiryModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [conformationModal, SetConformationModal] = useState<boolean>(false)
  useEffect(() => {
    setIsModalVisible(true);
  }, []);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };



  return (
    <>
      <Modal
        title="Enquire Now"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        // You can customize or remove footer if needed
      >
        <form className="flex flex-col gap-y-3 ">
          <div>
            <label className="text-base">Name</label>
            <Input placeholder="Enter Name" />
          </div>
          <div>
            <label  className="text-base">Phone Number</label>
            <Input placeholder="Enter Phone Number" />
          </div>
          <div>
            <label  className="text-base">Place</label>
            <Input placeholder="Enter Location" />
          </div>
          <div>
            <label  className="text-base">Check-In Date</label>
            <DatePicker format={"DD-MM-YYYY"} onChange={onChange} className="w-full block" />
          </div>
          <div className="flex justify-center ">
            <Button size="large" onClick={() => {SetConformationModal(true); handleCancel()}}>
              Submit
            </Button>
          </div>
        </form>
      </Modal>
      <ConformationModal open={conformationModal} close={() => SetConformationModal(false)} title={""} />
    </>
  );
};
