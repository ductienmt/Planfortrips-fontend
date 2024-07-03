import React from 'react';
import { Link } from 'react-router-dom';

function ShowPost() {
    const posts_accept = [
        {
            postId: '1',
            postContent: 'Nội dung bài post - 1',
            postCreateTime: '2004-02-10',
            postAcceptTime: '02:00:00 2004-02-11',
            postLike: 5,
            postComment: 8 // Lấy từ đối tượng Comment thuộc ID Post
        },
        {
            postId: '2',
            postContent: 'Nội dung bài post - 2',
            postCreateTime: '2004-02-10',
            postAcceptTime: '02:00:00 2004-02-11',
            postLike: 3,
            postComment: 4 // Lấy từ đối tượng Comment thuộc ID Post
        },
        {
            postId: '3',
            postContent: 'Nội dung bài post - 3',
            postCreateTime: '2004-02-10',
            postAcceptTime: '02:00:00 2004-02-11',
            postLike: 9,
            postComment: 15 // Lấy từ đối tượng Comment thuộc ID Post
        }
    ];

    const posts_Notaccept = [
        {
            postId: '1',
            postContent: 'Nội dung bài post - 1',
            postCreateTime: '01:00:00 2004-02-10',
        },
        {
            postId: '2',
            postContent: 'Nội dung bài post - 2',
            postCreateTime: '01:00:00 2004-02-10',
        },
        {
            postId: '3',
            postContent: 'Nội dung bài post - 3',
            postCreateTime: '01:00:00 2004-02-10',
        }
    ];

    return (
        <>
            {/* Page Content*/}
            <div className="px-5 my-5">
                <div className="text-center mb-5">
                    <h1 className="display-5 fw-bolder mb-0">
                        <span className="text-gradient d-inline">Danh sách bài đăng</span>
                    </h1>
                </div>
                <div className="row gx-5 justify-content-between mx-3">
                    {/* Experience Section*/}
                    <section className="col">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <h2 className="text-success fw-bolder mb-0">Đã được duyệt</h2>
                            {/* Download resume button*/}
                            {/* Note: Set the link href target to a PDF file within your project*/}
                            <Link className="btn btn-primary px-4 py-3" to="create">
                                <div className="d-inline-block bi bi-download me-2" />
                                Đăng Bài
                            </Link>
                        </div>
                        {/* ------------BÀI ĐĂNG----------------- */}
                        {/* Card Layout*/}
                        {posts_accept.map((p) => {
                            return (
                                <div key={p.postId} className="card shadow border-0 rounded-4 mb-5">
                                    <div className="card-body p-5 fs-5">
                                        <div className="row gx-5">
                                            <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                                <div className="bg-light p-2 rounded-4">
                                                    <div className="text-success fw-bolder mb-2">
                                                    ID :       {p.postId}
                                                    </div>
                                                    <ul className="fs-6">
                                                        <li>Lượt thích : {p.postLike}</li>
                                                        <li>Bình luận : {p.postComment}</li>
                                                        <li>Tạo lúc : {p.postCreateTime}</li>
                                                        <li>Duyệt  <p className="text-success fw-bold">{p.postAcceptTime}</p></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 fs-6 d-flex justify-content-between flex-column">
                                                <div>
                                                    <h4>Nội dung bài viết</h4>
                                                    {p.postContent} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo labore nisi, consectetur odit quaerat laborum.
                                                </div>
                                                <div className="mt-2">
                                                    <button className="btn btn-danger me-2">Xóa</button>
                                                    <button className="btn btn-success me-2">Sửa</button>
                                                    <button className="btn btn-info me-2">Chi tiết</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </section>
                    {/* Education Section*/}
                    <section className="col-3">
                        <h2 className="text-secondary fw-bolder mb-4">Chưa được duyệt</h2>
                        {/* Education Card 1*/}
                        {posts_Notaccept.map((p) => {
                            return (
                                <div key={p.postId} className="card shadow border-0 rounded-4 mb-5">
                                    <div className="card-body p-5 fs-5">
                                        <div className="row gx-5">
                                            <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                                <div className="bg-light p-2 rounded-4">
                                                    <div className="text-danger fw-bolder mb-2">
                                                       ID :  {p.postId}
                                                    </div>
                                                    <ul className="fs-6">
                                                        <li className="text-warning">ID : {p.postId}</li>
                                                        <li>Tạo lúc : <p className="text-danger">{p.postCreateTime}</p></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 fs-6 d-flex justify-content-between flex-column">
                                                <div className="mt-3 d-flex">
                                                    <button className="btn btn-outline-danger me-2">Xóa</button>
                                                    <button className="btn btn-outline-info me-2" style={{ whiteSpace: 'nowrap' }}>Chi tiết</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </section>
                    {/* Divider*/}
                    <div className="pb-5" />
                    {/* Skills Section*/}
                    <section>
                        {/* Skillset Card*/}
                        <div className="card shadow border-0 rounded-4 mb-5">
                            <div className="card-body p-5">
                                {/* Professional skills list*/}
                                <div className="mb-5">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                                            <i className="bi bi-tools" />
                                        </div>
                                        <h3 className="fw-bolder mb-0">
                                            <span className="text-gradient d-inline">Professional Skills</span>
                                        </h3>
                                    </div>
                                    <div className="row row-cols-1 row-cols-md-3 mb-4">
                                        <div className="col mb-4 mb-md-0">
                                            <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                SEO/SEM Marketing
                                            </div>
                                        </div>
                                        <div className="col mb-4 mb-md-0">
                                            <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                Statistical Analysis
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                Web Development
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row row-cols-1 row-cols-md-3">
                                        <div className="col mb-4 mb-md-0">
                                            <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                Network Security
                                            </div>
                                        </div>
                                        <div className="col mb-4 mb-md-0">
                                            <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                Adobe Software Suite
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                User Interface Design
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Languages list*/}
                                <div className="mb-0">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                                            <i className="bi bi-code-slash" />
                                        </div>
                                        <h3 className="fw-bolder mb-0">
                                            <span className="text-gradient d-inline">Languages</span>
                                        </h3>
                                    </div>
                                    <div className="row row-cols-1 row-cols-md-3 mb-4">
                                        <div className="col mb-4 mb-md-0">
                                            <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                HTML
                                            </div>
                                        </div>
                                        <div className="col mb-4 mb-md-0">
                                            <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                CSS
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                JavaScript
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row row-cols-1 row-cols-md-3">
                                        <div className="col mb-4 mb-md-0">
                                            <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                Python
                                            </div>
                                        </div>
                                        <div className="col mb-4 mb-md-0">
                                            <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                Ruby
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                Node.js
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default ShowPost;
