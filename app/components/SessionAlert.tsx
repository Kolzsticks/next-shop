'use client'
import { toast } from 'react-toastify';

import { useEffect } from 'react';

const SessionAlert = () => {
    useEffect(() => {
        const loginSuccess = sessionStorage.getItem('loginSuccess');
        if (loginSuccess) {
            toast.success('Login successful!');
            sessionStorage.removeItem('loginSuccess'); // Remove it after showing
        }
    }, []);

    return (
      <></>
    );
};

export default SessionAlert;
