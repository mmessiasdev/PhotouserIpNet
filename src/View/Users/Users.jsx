// 1 - Criar Json
// 2 - Mapaer Json 

import { useState } from "react";
import Slider from "react-slick";

import { BsChevronDoubleRight } from 'react-icons/bs';




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
                <div className="userName" onClick={() => setUserPhoto((o) => !o)}>
                    <div className="avatar"><img src={avatar} alt="" srcset="" /></div>
                    <div className="name">{name}</div>
                    <BsChevronDoubleRight className="iconUser"/>
                </div>

                {userPhoto && (
                    <div className="photoDiv" data-aos="fade-right">
                        <Slider {...settings}>
                            <div className="divPhotoUsers">
                                <img src={photo1} alt="" />
                            </div>
                            <div className="divPhotoUsers">
                                <img src={photo2} alt="" />
                            </div>
                            <div className="divPhotoUsers">
                                <img src={photo3} alt="" />
                            </div>
                        </Slider>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Users;