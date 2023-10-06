import { NavLink } from "react-router-dom";

function Header() {
    return (
        <>
            <header>
                <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div class="container-fluid">
                        <NavLink to="/" className="navbar-brand">Trang Chủ</NavLink>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <ul class="navbar-nav me-auto mb-2 mb-md-0">
                                <li class="nav-item">
                                    <NavLink to="/ve_chung_toi" className="nav-link active" aria-current="page">Về Chúng Tôi</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/san_pham" className="nav-link active">Sản Phẩm</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/tin_tuc" className="nav-link active">Tin Tức</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/lien_he" className="nav-link active">Liên Hệ</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/gio_hang" className="nav-link active" >Giỏ Hàng</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/thanh_toan" className="nav-link active">Thanh Toán</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
export default Header;