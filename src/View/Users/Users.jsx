// Tela de usuários

import { useState } from "react";

// Icone de seta para direita
import { BsChevronDoubleRight } from 'react-icons/bs';


// Biblioteca de carousel e animação de fotos
import Slender from 'react-slick';


const Users = ({ avatar, name, photo1, photo2, photo3 }) => {


     // Hooks da funcionalidade Clique da aparição de fotos.
    const [userPhoto, setUserPhoto] = useState(false);



    // Config da funcionalidade Carousel - Slick
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


                {/* Div responável pelo aparecimento e desaparecimento da galería dos usuários. */}

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