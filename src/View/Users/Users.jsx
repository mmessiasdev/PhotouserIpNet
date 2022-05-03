import { useState } from "react";
import { BsChevronDoubleRight } from 'react-icons/bs';

import Slender from 'react-slick'


const Users = ({ avatar, name, photo1, photo2, photo3 }) => {

    const [userPhoto, setUserPhoto] = useState(false);

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true
    }

    return (
        <div className="contUsers">
            <div className="user">
                <article title="userName" className="userName" onClick={() => setUserPhoto((o) => !o)}>
                    <div className="avatar"><img src={avatar}/></div>
                    <div className="name" id="name">{name}</div>
                    <BsChevronDoubleRight className="iconUser" />
                </article>

                {userPhoto && (
                    <div className="photoDiv" id="photoDiv" data-aos="fade-right">
                        <Slender {...settings}>
                            <div className="divPhotoUsers">
                                <img src={photo1} alt="userPhoto" />
                            </div>
                            <div className="divPhotoUsers">
                                <img src={photo2} alt="" />
                            </div>
                            <div className="divPhotoUsers">
                                <img src={photo3} alt="" />
                            </div>
                        </Slender>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Users;