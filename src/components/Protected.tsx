import React from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'sonner';

const Protected = (props: { Component: React.ComponentType }) => {
  // const navigate = useNavigate();
  const token = localStorage.getItem('accessToken');
  if (!token) {
    toast.error(`Please login first!`);

    return <Navigate to="/user/login" replace />;
  } else {
    const { Component } = props;
    return (
      <>
        <Component />
      </>
    );
  }
};

export default Protected;
