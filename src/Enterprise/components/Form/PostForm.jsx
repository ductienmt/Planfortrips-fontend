import { useState } from 'react';

function PostForm() {
    const [post, setPost] = useState({
        postTitle: '',
        postContent: '',
        postAuthor: '',
        postCategory: '',
        postTags: '',
        postImage: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost({
            ...post,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(post);
    };

    return (
        <>
            <div className="container-fluid">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title fw-semibold mb-4">Thêm bài đăng</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="postTitle" className="form-label">
                                    Tiêu đề bài đăng
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="postTitle"
                                    name="postTitle"
                                    value={post.postTitle}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="postContent" className="form-label">
                                    Nội dung bài đăng
                                </label>
                                <textarea
                                    className="form-control"
                                    id="postContent"
                                    name="postContent"
                                    value={post.postContent}
                                    onChange={handleChange}
                                />
                            </div>
                        
                    
                            <div className="mb-3">
                                <label htmlFor="postTags" className="form-label">
                                    Thẻ
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="postTags"
                                    name="postTags"
                                    value={post.postTags}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="postImage" className="form-label">
                                    Hình ảnh
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="postImage"
                                    name="postImage"
                                    value={post.postImage}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="" className="form-label">Chọn sản phẩm review</label>
                                <select className='form-control' multiple>
                                    <option value="">Xe 1</option>
                                    <option value="">Xe 2</option>
                                    <option value="">Xe 3</option>
                                </select>
                                
                            </div>
                            
                            <button type="submit mt-3" className="btn btn-primary">
                                Đăng bài
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostForm;

import { useState } from 'react';

function PostForm() {
    const [post, setPost] = useState({
        postTitle: '',
        postContent: '',
        postAuthor: '',
        postCategory: '',
        postTags: '',
        postImage: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost({
            ...post,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(post);
    };

    return (
        <>
            <div className="container-fluid">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title fw-semibold mb-4">Thêm bài đăng</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="postTitle" className="form-label">
                                    Tiêu đề bài đăng
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="postTitle"
                                    name="postTitle"
                                    value={post.postTitle}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="postContent" className="form-label">
                                    Nội dung bài đăng
                                </label>
                                <textarea
                                    className="form-control"
                                    id="postContent"
                                    name="postContent"
                                    value={post.postContent}
                                    onChange={handleChange}
                                />
                            </div>
                        
                    
                            <div className="mb-3">
                                <label htmlFor="postTags" className="form-label">
                                    Thẻ
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="postTags"
                                    name="postTags"
                                    value={post.postTags}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="postImage" className="form-label">
                                    Hình ảnh
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="postImage"
                                    name="postImage"
                                    value={post.postImage}
                                    onChange={handleChange}
                                />
                            </div>
                            
                            <button type="submit" className="btn btn-primary">
                                Đăng bài
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostForm;
