import React, { useState } from "react";
import "../Admin/styles/AdminLogin.css";

function LoginAdmin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === "Admin" && password === "123") {
            alert("Đăng nhập thành công");
            window.location.href = "/admin/home"; // Redirect to home page
        } else {
            alert("Đăng nhập thất bại");
        }
    };

    return (
        <section className="background-radial-gradient-admin">
            <div className="container">
                <div className="row">
                    <div className="col-left">
                        <h1 className="title1">
                            Admin page of <br />
                            <span>Plan For Trips</span>
                        </h1>
                        <p className="description">
                            Trên cát vàng, bước chân ai khẽ,
                            Gió biển thì thầm lời gọi mời.
                            Bầu trời xanh, mây trôi lặng lẽ,
                            Hồn phiêu lãng theo những chân trời
                        </p>
                    </div>

                    <div className="col-right">
                        <div id="radius-shape-1" className="radius-shape"></div>
                        <div id="radius-shape-2" className="radius-shape"></div>

                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-header">
                                        <h2>Login Form</h2>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input
                                            type="text"
                                            id="username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-footer">
                                        <button type="submit" className="btn">Sign up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoginAdmin;