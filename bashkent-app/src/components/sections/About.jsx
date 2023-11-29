import React from 'react';
import img from '../../bashkent-image/design/rotate.png';
import about_img from '../../bashkent-image/about/about-img.png';
import about_img_1 from '../../bashkent-image/about/small-img/img-1.png';
import about_img_2 from '../../bashkent-image/about/small-img/img-2.png';
import about_img_3 from '../../bashkent-image/about/small-img/img-3.png';
import { useParams } from 'react-router-dom';

export const About = () => {

    return (
            <section className='about'>
                <div className="container">
                    <div className="section-title">
                        <h1>Haqqımızda</h1>
                        <img src={img} alt="" />
                    </div>
                    <div className="about-row">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="content">
                                    <div className="text">
                                        <p>Başkent Restoran və Şiriniyyat Evi 2004-cü ildən dəyərli müştərilərinin xidmətindədir. Bakı şəhərində Memar Əcəmi, Nəriman Nərimanov, 28 May şöbələri olmaqla 3 restoran və İnşaatçılar şöbəsində isə şiriniyyat evi olaraq fəaliyyət göstərir. Restoran üçün qonaqların məmnuniyyəti ən vacib pirinsiplərdən olduğu üçün daim xidmət keyfiyyətinin artırılması üzərində çalışır. İş fəaliyyəti boyu daim ixtisas təlimləri keçmiş personal ilə müştərilərin həm istirahət edəcəyi, həm də damaq dadına uyğun yemək çeşidləri ilə zəngin məkanlardan biri olmaqda iddialıdır. Restoranlar şəbəkəsində həftə içi və həftə sonu olmaqla səhər yeməyi, biznes görüşlərinizin, təqdimatların keçirilməsi üçün ayrıca otaqlar, dostlarınızla, həmkarlarınızla çay-kofe guşəsində rahatlıqla söhbət etmə imkanı, həmçinin iştən sonra günün gərginliyini üzərinizdən atmağa kömək edəcək canlı musiqi mövcuddur. Dostlarınız, doğmalarınızla zəngin milli, türk və avropa mətbəxinə aid dadlı təamlardan dada, ailənizlə birliktə rahat şəkildə əylənə və istirahət edə bilərsiniz. Restoranların hər birində hər zövqə uyğun menyudan istifadə etməklə hər qonağa özəl yanaşmanı hiss etmək mümkündür.
                                            <br />
                                            BAŞKENT - " Hər gün eyni sevgi və həyəcanla xidmətinizdəyik. Gəlin, qonağımız olun! "</p>
                                    </div>
                                    <a className='btn-general active' href="/About">Ətraflı</a>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="about-img">
                                    <img src={about_img} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="why-us">
                        <div className="title">
                            <h1>Niyə biz?</h1>
                            <img src={img} alt="" />
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6 col-xl-4">
                                <div className="item">
                                    <img src={about_img_1} alt="" />
                                    <span>Ürəkaçan məkan</span>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-4">
                                <div className="item">
                                    <img src={about_img_2} alt="" />
                                    <span>Dadlı yeməklər</span>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-4">
                                <div className="item">
                                    <img src={about_img_3} alt="" />
                                    <span>Gülərüz xidmət</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}
