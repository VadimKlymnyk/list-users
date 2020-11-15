import { Button, Modal, Form, Input } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import {
  ADD_USER_REQUESTED,
  EDIT_USER_REQUESTED,
} from "../../redux/action/action";

const layout = {
  labelCol: {
    span: 6,
  },
};

const ModalForm = ({ visible, user, onCancel, dispatch }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (user?.id) {
      form.setFieldsValue({ ...user });
    } else {
      form.resetFields();
    }
  }, [user, form]);

  const onFinish = (values) => {
    user?.id
      ? dispatch({
          type: EDIT_USER_REQUESTED,
          payload: { id: user.id, data: values },
        })
      : dispatch({ type: ADD_USER_REQUESTED, payload: values });
    onCancel()
  };

  return (
    <Modal
      destroyOnClose={true}
      visible={visible}
      title={user?.id ? "Change User" : "Add User"}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          Cancel
        </Button>,
        <Button form="user-form" key="submit" type="primary" htmlType="submit">
          OK
        </Button>,
      ]}
    >
      <Form id="user-form" form={form} {...layout} onFinish={onFinish}>
        <Form.Item label="Name" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Surname" name="surname" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Avatar" name="avatar">
          <Button icon={<DownloadOutlined />}>Upload Avatar</Button>
        </Form.Item>
        <Form.Item label="Description" name="desc" rules={[{ required: true }]}>
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export { ModalForm };
