import { useState } from 'react';

function EtpPostForm() {
    const [post, setPost] = useState({
        postTitle: '',
        postContent: '',
        postAuthor: '',
        postCategory: '',
        postTags: '',
        postImage: '',
    });

    const [productRvs, setProductRvs] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState('');

    const [listP, setListP] = useState([
        {
            pId: 'p1',
            pName: 'Product 1'
        },
        {
            pId: 'p2',
            pName: 'Product 2'
        },
        {
            pId: 'p3',
            pName: 'Product 3'
        },
        {
            pId: 'p4',
            pName: 'Product 4'
        },
        {
            pId: 'p5',
            pName: 'Product 5'
        },
        {
            pId: 'p6',
            pName: 'Product 6'
        }
    ]);

    const addProductPreview = (pId) => {
        const selectedProduct = listP.find(p => p.pId === pId);
        if (selectedProduct && !productRvs.some(p => p.pId === pId)) {
            setProductRvs(prev => [...prev, selectedProduct]);
            setListP(prev => prev.filter(p => p.pId !== pId));
            setSelectedProduct(''); // Reset the select value
        }
    };

    const removeProductPreview = (pId) => {
        const removedProduct = productRvs.find(p => p.pId === pId);
        if (removedProduct) {
            setProductRvs(prev => prev.filter(p => p.pId !== pId));
            setListP(prev => [...prev, removedProduct]);
        }
    };

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
                                <label htmlFor="productReview" className="form-label">Đính kèm sản phẩm</label>
                                <select
                                    name="productReview"
                                    id="productReview"
                                    className='form-control'
                                    value={selectedProduct}
                                    onChange={(e) => {
                                        setSelectedProduct(e.target.value);
                                        addProductPreview(e.target.value);
                                    }}
                                >
                                    <option value="" disabled>Chưa chọn sản phẩm</option>
                                    {listP.map((p) => (
                                        <option key={p.pId} value={p.pId}>{p.pName}</option>
                                    ))}
                                </select>

                                <div className="list-review d-flex mt-2">
                                    {productRvs.map((pRv) => (
                                        <div className="p-tag btn btn-outline-danger m-1 
                                        " key={pRv.pId}>
                                            <span>{pRv.pName}</span>
                                            <button
                                                type="button"
                                                className="btn btn-dark btn-sm ms-2"
                                                onClick={() => removeProductPreview(pRv.pId)}
                                            >
                                                Xóa
                                            </button>
                                        </div>
                                    ))}
                                </div>
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
                                    onChange={handleChange}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">
                                Đăng bài
                            </button>
                        </form>
        </>
    );
}

export default EtpPostForm;
