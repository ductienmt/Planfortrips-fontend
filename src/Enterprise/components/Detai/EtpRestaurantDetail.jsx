import React, { useState } from "react";
import { useParams } from "react-router-dom";

function EtpRestaurantDetail() {
    let { rtrId } = useParams();

    const [restaurant, setRestaurant] = useState({
        restaurantName: 'Nhà hàng Hải Sản Biển Đông',
        restaurantDes: 'Chuyên các món hải sản tươi sống, chất lượng cao.',
        restaurantLocation: '123 Đường Biển, Quận 1, TP. Hồ Chí Minh',
        restaurantRate: 4.5,
        thumbnail: 'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=600'
    });

    const [menu, setMenu] = useState([
        {
            foodId: 'f001',
            foodName: 'Chân gà'
        },
        {
            foodId: 'f002',
            foodName: 'Gà bóng đêm'
        },
        {
            foodId: 'f003',
            foodName: 'Sting 10 tẩy'
        },
        {
            foodId: 'f004',
            foodName: 'Gỏi cá'
        }
    ]);

    const [isAddingFood, setIsAddingFood] = useState(false);

    const handleAddingFood = (foodName) => {
        const newFood = {
            foodId: `f00${menu.length + 1}`,
            foodName: foodName
        };
        setMenu([...menu, newFood]); 
        setIsAddingFood(false);
    };

    const toggleAddFoodForm = () => {
        setIsAddingFood(!isAddingFood);
    };

    return (
        <>
            <h5>Trang chi tiết Nhà hàng Có ID là : <span className="fs-6 text-danger">{rtrId}</span></h5>

            <div className="restaurant-detail-content">
                <div className="row">
                    <div className="col-4 thumnail">
                        <img className="img-fluid"
                            src={restaurant.thumbnail} alt="Restaurant Thumbnail" />
                    </div>

                    <div className="col-8">
                        <div className="mb-3">
                            <label htmlFor="restaurantName" className="form-label">Tên quán ăn</label>
                            <p id="restaurantName">{restaurant.restaurantName}</p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="restaurantDes" className="form-label">Mô tả</label>
                            <p id="restaurantDes">{restaurant.restaurantDes}</p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="restaurantLocation" className="form-label">Địa điểm</label>
                            <p id="restaurantLocation">{restaurant.restaurantLocation}</p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="restaurantRate" className="form-label">Đánh giá</label>
                            <p id="restaurantRate">{restaurant.restaurantRate}</p>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Danh sách món ăn : </label>
                            <div className="food-container row g-2">
                                {menu.map((f, index) => (
                                   <span className="food-item col-2" key={f.foodId}>{f.foodName}</span>
                                ))}
                            </div>
                        </div>

                        <div className="mb-3">
                            <button className="btn btn-outline-info" onClick={toggleAddFoodForm}>
                                Thêm món ăn
                            </button>
                        </div>

                        {isAddingFood && (
                            <div className="mb-3">
                                <label htmlFor="newFoodName" className="form-label">Tên món ăn mới:</label>
                                <input type="text" id="newFoodName" className="form-control" />
                                <button className="btn btn-primary mt-3" onClick={() => handleAddingFood(document.getElementById('newFoodName').value)}>Lưu</button>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </>
    );
}

export default EtpRestaurantDetail;
