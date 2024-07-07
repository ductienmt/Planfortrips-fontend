import React from 'react';
import './styles/userlist.css'
import OIP from '../Admin/OIP.jpg'
import Sidebar from './Sidebar';

const user = [

    {
        image: OIP,
        name: 'Nguyen Van A',
        birdday: '1-1-1999',
        Age: '20'
    },
    {
        image: OIP,
        name: 'Nguyen Van A',
        birdday: '1-1-1999',
        Age: '20'
    },
    {
        image: OIP,
        name: 'Nguyen Van A',
        birdday: '1-1-1999',
        Age: '20'
    }

]

const Userlist = () => {
    return (
        <div>
            <Sidebar />
            <div className='user--list'>
                <div className="list--header">
                    <h2>Người Dùng</h2>
                    <h2>Năm Sinh</h2>
                    <h2>Tuổi</h2>

                </div>

                <div className="list--container">
                    {user.map(use =>
                        <div className="list">
                            <div className="user--detail">
                                <img src={use.image} alt={use.name} />
                                <h2>{use.name}</h2>
                            </div>
                            <span>{use.birdday}</span>

                            <span>{use.Age}</span>

                        </div>

                    )}

                </div>

            </div>
        </div>
    );
};

export default Userlist;