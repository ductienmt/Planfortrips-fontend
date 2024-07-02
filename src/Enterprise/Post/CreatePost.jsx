function CreatePost() {
    console.log("Create render");
    return ( 
        <>
            <h2>Tạo bài đăng</h2>
            <form action="">
                <div className="form-group">
                <label htmlFor="" className="form-label">Nội dung</label>
                <textarea className="form-control"/>
                </div>
                <div className="form-group mt-2">
                <input type="file" className="form-control mt-2"/>
                </div>
                <button className="d-block btn btn-primary mt-3">Đăng Bài</button>
            </form>
        </>
     );
}

export default CreatePost;