import React from 'react';
import ContentHeader from './ContentHeader';
import './styles/content.css'
import Userlist from './Userlist';
import Sidebar from './Sidebar';
const Content = () => {
    return (


        <div className='dashboard'>
            <Sidebar />
            <div className='dashboard--content'>
                <div className='content'>
                    {/* <ContentHeader /> */}
                    <Userlist />
                </div>
            </div>
        </div>
    );
};

export default Content;


