import React from 'react';
import ContentHeader from './ContentHeader';
import './styles/content.css'
import Userlist from './Userlist';
import Sidebar from './Sidebar';
const Content = () => {
    return (
        <div>
            <Sidebar />
            <div className='dashboard--content'>
                <div className='content'>
                    <ContentHeader />
                    <div>
                        <button>Thêm</button>
                        <button>Xóa</button>
                        <button>Sửa</button>
                        <button>Cập Nhật</button>
                    </div>
                    <Userlist />
                </div>
            </div>
        </div>
    );
};

export default Content;


