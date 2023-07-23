import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserList } from '../actions/asyncAction';
const UserList = ({}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispathc(getUserList());
  }, []);
  return (
    <div>
      <h1>User List</h1>
    </div>
  );
};
export default UserList;
