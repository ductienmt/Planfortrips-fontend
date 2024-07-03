import { Link } from "react-router-dom";

function ShowResources() {

    console.log("resources render");
    const enterpriseFakeData = {
      enterpriseType : 'Phương tiện',
      enterpriseName : 'Phương Trang',
      enterpriseImage : 'https://cdn.futabus.vn/futa-busline-web-cms-prod/Zalo_11b66ecb81/Zalo_11b66ecb81.png',
    };
    
       // Xe
  const enterpriseResources = [
    {
      resourcesId: '1',
      resourcesName: '86B-1311.0210',
      resourcesPrice: 1000,
      resourcesDes: 'mô tả tài nguyên : ',
      resourcesRate: 5,
      resourcesCreateTime: '2004-02-10',
      resourcesImg: 'https://cdn.futabus.vn/futa-busline-web-cms-prod/An_Suong_Quang_Dien_599x337_4be337db6a/An_Suong_Quang_Dien_599x337_4be337db6a.png'
    },
    {
      resourcesId: '2',
      resourcesName: '86B-1311.0211',
      resourcesPrice: 1200,
      resourcesDes: 'mô tả tài nguyên : ',
      resourcesRate: 4,
      resourcesCreateTime: '2005-03-15',
      resourcesImg: 'https://cdn.futabus.vn/futa-busline-web-cms-prod/599_x_337_thay_doi_xe_4e9af7842c/599_x_337_thay_doi_xe_4e9af7842c.jpg'
    },
    {
      resourcesId: '3',
      resourcesName: '86B-1311.0212',
      resourcesPrice: 1100,
      resourcesDes: 'mô tả tài nguyên : ',
      resourcesRate: 3,
      resourcesCreateTime: '2006-04-20',
      resourcesImg: 'https://cdn.futabus.vn/futa-busline-web-cms-prod/WEB_KHAI_TRUONG_VP_THUONG_THOI_TIEN_DONG_THAP_02_4a0ea532ef/WEB_KHAI_TRUONG_VP_THUONG_THOI_TIEN_DONG_THAP_02_4a0ea532ef.png'
    },
    {
      resourcesId: '4',
      resourcesName: '86B-1311.0213',
      resourcesPrice: 1300,
      resourcesDes: 'mô tả tài nguyên : ',
      resourcesRate: 4,
      resourcesCreateTime: '2007-05-25',
      resourcesImg: 'https://cdn.futabus.vn/futa-busline-web-cms-prod/WEB_KHAI_TRUONG_TUYEN_BX_NAM_NHA_TRANG_BX_NAM_HUE_7333516dc1/WEB_KHAI_TRUONG_TUYEN_BX_NAM_NHA_TRANG_BX_NAM_HUE_7333516dc1.png'
    },
    {
      resourcesId: '5',
      resourcesName: '86B-1311.0214',
      resourcesPrice: 1400,
      resourcesDes: 'mô tả tài nguyên : ',
      resourcesRate: 5,
      resourcesCreateTime: '2008-06-30',
      resourcesImg: 'https://cdn.futabus.vn/futa-busline-web-cms-prod/An_Suong_Quang_Dien_599x337_4be337db6a/An_Suong_Quang_Dien_599x337_4be337db6a.png'
    }
  ];

    return ( 
        <>
                   <section className="py-5">
  <div className="px-5 mb-5">
    <div className="text-center mb-5">
      <h1 className="display-5 fw-bolder mb-0">
        <span className="text-gradient d-inline">Tài nguyên của bạn</span>
      </h1>
    <Link className="btn btn-outline-success mt-3 fw-bold text-uppercase"
        to={'create'}
    >Thêm tài nguyên</Link>
    </div>
    <div className="container row gx-5 justify-content-center">
        {/* Card Layout*/}
          {enterpriseResources.map((resources) => {
            return (
              <div key={resources.resourcesId} className="card overflow-hidden shadow rounded-4 border-0 mb-5">
          <div className="card-body p-0">
            <div className="row">
              <div className="p-5 col">
                <h2 className="fw-bolder">{resources.resourcesName}</h2>
                <ul>
                  <li>Giá : {resources.resourcesPrice}</li>
                  <li>Ngày tạo : {resources.resourcesCreateTime}</li>
                  <li>Đánh giá : {resources.resourcesRate}</li>
                </ul>
                <p>{resources.resourcesDes} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, velit.</p>
                
              </div>
              <img
                className="img-fluid col-5 m-4"
                src={resources.resourcesImg}
                alt="..."
              />
            </div>
          </div>
                    <div className="f-resources mb-3 d-flex">
                    <button className="me-2 btn btn-primary">Xóa</button>
                    <button className="me-2 btn btn-success">Chỉnh sửa</button>
                    <button className="me-2 btn btn-info">Chi tiết</button>
                    </div>
        </div>
            )
          })}
    </div>
  </div>
</section>
        </>
     );
}

export default ShowResources;