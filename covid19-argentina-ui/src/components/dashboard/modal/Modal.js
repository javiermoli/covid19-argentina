import React from 'react';
import { Modal as AntdModal, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { requestUpdateDay, requestCreateDay } from '../../../actions/chronologyActions';
import { closeModal, toggleLoading } from '../../../actions/modalActions';

const Modal = ({ modalData }) => {
  const { deaths, recovered, cases, date, _id, isNewDay } = modalData.data;
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onSubmit = (values) => {
    dispatch(toggleLoading(true));
    if (isNewDay) {
      dispatch(requestCreateDay(values));
    } else {
      dispatch(requestUpdateDay(values, _id));
    }
  };

  const closePopup = () => {
    form.resetFields();
    dispatch(closeModal());
  };

  const title = isNewDay ? 'Create day' : 'Edit this Day';
  return (
    <AntdModal
      confirmLoading={modalData.isLoading}
      title={title}
      visible={modalData.isActive}
      onOk={form.submit}
      onCancel={closePopup}
    >
      <Form
        form={form}
        onFinish={onSubmit}
        name="basic"
        initialValues={{
          date,
          recovered,
          deaths,
          cases,
        }}
      >
        <Form.Item label="Date" name="date">
          <Input />
        </Form.Item>
        <Form.Item label="Cases" name="cases">
          <Input />
        </Form.Item>
        <Form.Item label="Recovered" name="recovered">
          <Input />
        </Form.Item>
        <Form.Item label="Deaths" name="deaths">
          <Input />
        </Form.Item>
      </Form>
    </AntdModal>
  );
};

export default Modal;
