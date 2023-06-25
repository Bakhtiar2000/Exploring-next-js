import React from 'react';
import Sidebar from './Sidebar';

export const metadata = {
    title: 'Dashboard | Next Hero',
    description: 'My first next app',
  }
  
const DashboardLayout = ({children}) => {
    return (
        <div className='flex container mx-auto'>
            <Sidebar></Sidebar>
            {children}
        </div>
    );
};

export default DashboardLayout;