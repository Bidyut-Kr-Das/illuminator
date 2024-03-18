import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Protected = (props: { Component: React.ComponentType }) => {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      toast.error(`Please login first!`);
      navigate(`/user/login`);
    }
  }, []);

  return (
    <>
      <Component />
    </>
  );
};

export default Protected;
