import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const MyTask = () => {
    const {name} = useContext(AuthContext)
    console.log(name)
    return (
        <div>
            This is my task route
        </div>
    );
};

export default MyTask;