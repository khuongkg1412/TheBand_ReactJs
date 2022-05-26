import newyork from '../assets/img/places/newyork.jpg';
import paris from '../assets/img/places/paris.jpg';
import sanfran from '../assets/img/places/sanfran.jpg';
import mapp from '../assets/img/map.jpg';
function Content() {
    return (
        <div id="content">
            {/* Khi phân tích cấu trúc page mà thấy có nhiều tiêu đề 
        hiển thị chung một dạng thì nên đặt tên class trùng để tiết kiệm thời gian code  */}
            {/* THE BAND content  */}
            <div id="band" className="content-section">
                <h2 className="section-heading">THE BAND</h2>
                <p className="section-sub-heading">We love music</p>
                <p className="about">
                    We have created a fictional band website. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat.
                </p>
                <div className="row text-center imgAbout">
                    <div className="col-4">
                        <p>Name</p>
                        <img src="https://www.w3schools.com/w3images/bandmember.jpg" className="rounded" alt="img member" width="70%" />
                    </div>
                    <div className="col-4">
                        <p>Name</p>
                        <img src="https://www.w3schools.com/w3images/bandmember.jpg" className="rounded" alt="img member" width="70%" />
                    </div>
                    <div className="col-4">
                        <p>Name</p>
                        <img src="https://www.w3schools.com/w3images/bandmember.jpg" className="rounded" alt="img member" width="70%" />
                    </div>
                </div>
            </div>
            {/* TOUR DATES content  */}
            <div id="tour" className="tour-section">
                <div className="content-section">
                    <h2 className="section-heading text-white">TOUR DATES</h2>
                    <p className="section-sub-heading text-white">
                        Remember to book your tickets!
                    </p>
                    {/* danh sách vé */}
                    <ul className="ticket-list">
                        <li>
                            September <span className="sold-out text-white">Sold out</span>
                        </li>
                        <li>October <span className="sold-out text-white">Sold out</span></li>
                        <li>November <span className="quantity">3</span></li>
                    </ul>
                    {/* danh sách địa điểm */}
                    <div className="rowK place-list">
                        <div className="colK colK-3">
                            <img src={newyork} alt="ny" className="place-img" />
                            <div className="place-content">
                                <h3 className="title-place">New York</h3>
                                <p className="date-place">Fri 27 Nov 2016</p>
                                <p className="detals-place">
                                    Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                                </p>
                                <a href="#" className="buy-tick">Buy Tickets</a>
                            </div>
                        </div>
                        <div className="colK colK-3">
                            <img src={paris} alt="pari" className="place-img" />
                            <div className="place-content">
                                <h3 className="title-place">Paris</h3>
                                <p className="date-place">Sat 28 Nov 2016</p>
                                <p className="detals-place">
                                    Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                                </p>
                                <a href="#" className="buy-tick">Buy Tickets</a>
                            </div>
                        </div>
                        <div className="colK colK-3">
                            <img src={sanfran} alt="sanfran" className="place-img" />
                            <div className="place-content">
                                <h3 className="title-place">San Francisco</h3>
                                <p className="date-place">Sun 29 Nov 2016</p>
                                <p className="detals-place">
                                    Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                                </p>
                                <a href="#" className="buy-tick">Buy Tickets</a>
                            </div>
                        </div>
                        <div className="clear" />
                    </div>
                </div>
            </div>
            {/* BEGIN: CONTACT content  */}
            <div id="contact" className="content-section">
                <h2 className="section-heading">CONTACT</h2>
                <p className="section-sub-heading">Fan? Drop a note!</p>
                <div className="rowK contact-formK">
                    {/* begin: địa điểm và liên hệ  */}
                    <div className="colK colK-2 thong-tin">
                        <p className="nope">
                            <i className="fas fa-map-marker-alt nope2" />Chicago, US
                        </p>
                        <p className="nope">
                            <i className="fas fa-phone-alt nope2" />Phone:<a href="tel:+00 151515">
                                +00 151515</a>
                        </p>
                        <p className="nope">
                            <i className="fas fa-envelope nope2" />Email:<a href="mailto:mail@mail.com">
                                mail@mail.com</a>
                        </p>
                    </div>
                    {/* end: địa điểm và liên hệ  */}
                    {/* begin: form input thông tin */}
                    <div className="colK colK-2 input-thong-tin">
                        <form>
                            <div className="rowK">
                                <div className="colK colK-2">
                                    <input type="text" placeholder="Name" className="input-ne" />
                                </div>
                                <div className="colK colK-2">
                                    <input required type="email" placeholder="Email" className="input-ne" />
                                </div>
                                {/* là cái after gì đó nằm ở đây nè nhe */}
                            </div>
                            <div className="rowK" style={{ marginTop: '8px' }}>
                                <div className="colK colK-full">
                                    <input required type="text" placeholder="Message" className="input-ne" />
                                </div>
                                {/* là cái after gì đó nằm ở đây nè nhe */}
                            </div>
                            <input required className="submit-ne" type="submit" defaultValue="SEND" style={{ marginTop: '16px' }} />
                        </form>
                    </div>
                    {/* end: form input thông tin */}
                </div>
            </div>
            {/* END: CONTACT content  */}
            {/* BEGIN: MAP  */}
            <div className="map-section">
                <img src={mapp} alt="map image" />
            </div>
            {/* END: MAP  */}
        </div>
    );
}

export default Content;