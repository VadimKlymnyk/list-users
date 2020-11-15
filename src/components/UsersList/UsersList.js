import React, { useEffect, useState } from "react";
import { UserOutlined, DeleteOutlined, FormOutlined } from "@ant-design/icons";
import { Avatar, Tooltip, List, Button } from "antd";
import { ModalForm } from "../ModalForm/ModalForm";
import { DELETE_USER_REQUESTED, GET_USERS_REQUESTED } from "../../redux/action/action";
import { useDispatch, useSelector } from "react-redux";

const UsersList = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const dispatch = useDispatch()
  const users = useSelector(state => state.store.users)

  useEffect(() => {
    dispatch({type:GET_USERS_REQUESTED})
  }, []);

  const handleEdit = (user) => {
    setVisibleModal(true);
    setSelectedUser(user);
  };

  const handleDelete = (userId) => {
    dispatch({type:DELETE_USER_REQUESTED, payload: userId});
  };

  const handleAdd = () => {
    setVisibleModal(true);
    setSelectedUser({});
  };

  return (
    <div className="container">
      {users.length ? (
        <>
          <Button className="button-add-user" onClick={handleAdd}>
            Add User
          </Button>
          <List
            pagination={{ pageSize: 5 }}
            dataSource={users}
            renderItem={(user) => (
              <List.Item key={user.id} className="container-user">
                <div className="user-information">
                  {user.avatar ? (
                    <Avatar shape="square" size={64} src={user.avatar} />
                  ) : (
                    <Avatar shape="square" size={64} icon={<UserOutlined />} />
                  )}
                  <div>
                    <div className="user-name">
                      <h3>{user.name}</h3>
                      <h3>{user.surname}</h3>
                    </div>
                    <div className='description'>
                      {user.desc.length <= 50
                        ? user.desc
                        : user.desc.substr(0, 47) + "..."}
                    </div>
                  </div>
                </div>
                <div className="user-extra">
                  <Tooltip title="Edit">
                    <Button
                      type="link"
                      size="large"
                      onClick={() => handleEdit(user)}
                      icon={<FormOutlined />}
                    />
                  </Tooltip>
                  <Tooltip title="Delete">
                    <Button
                      type="link"
                      size="large"
                      onClick={() => handleDelete(user.id)}
                      icon={<DeleteOutlined />}
                      style={{ marginLeft: 8 }}
                    />
                  </Tooltip>
                </div>
              </List.Item>
            )}
          ></List>
          <ModalForm
            visible={visibleModal}
            onCancel={() => setVisibleModal(false)}
            user={selectedUser}
            dispatch={dispatch}
          />
        </>
      ) : null}
    </div>
  );
};

export { UsersList };
