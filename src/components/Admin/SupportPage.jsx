import React, { useState } from 'react';
import './styles/supportpage.css'
import { BiSend } from 'react-icons/bi';
import Sidebar from './Sidebar';

const faqs = [
    {
        question: 'Làm thế nào để thay đổi mật khẩu?',
        answer: 'Bạn có thể thay đổi mật khẩu bằng cách vào phần cài đặt tài khoản và chọn "Đổi mật khẩu".'
    },
    {
        question: 'Làm thế nào để liên hệ với bộ phận hỗ trợ?',
        answer: 'Bạn có thể liên hệ với bộ phận hỗ trợ bằng cách gửi email đến support@example.com hoặc gọi đến số hotline của chúng tôi.'
    },
    {
        question: 'Làm thế nào để xóa tài khoản?',
        answer: 'Để xóa tài khoản, vui lòng liên hệ với bộ phận hỗ trợ để được hướng dẫn chi tiết.'
    }
];

const SupportPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý gửi form tại đây
        console.log('Form data:', formData);
        // Reset form
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div>
            <Sidebar />
            <div className='dashboard--content'>
                <div className='support-page'>
                    <h1>Hỗ Trợ Người Dùng</h1>
                    <div className='support-container'>
                        <div className='support-form'>
                            <h2>Gửi Yêu Cầu Hỗ Trợ</h2>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type='text'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder='Tên của bạn'
                                    required
                                />
                                <input
                                    type='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder='Email của bạn'
                                    required
                                />
                                <textarea
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder='Lời nhắn của bạn'
                                    required
                                />
                                <button type='submit'>
                                    Gửi <BiSend />
                                </button>
                            </form>
                        </div>
                        <div className='support-faq'>
                            <h2>Câu Hỏi Thường Gặp</h2>
                            {faqs.map((faq, index) => (
                                <div key={index} className='faq-item'>
                                    <h3>{faq.question}</h3>
                                    <p>{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportPage;
