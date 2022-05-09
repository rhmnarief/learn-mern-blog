import React from 'react';
import { ICDiscord, ICFacebook, ICGithub, ICInstagram, ICTwitter, LogoKabayan } from '../../../assets';
import './footer.scss';

const Icon = ({img}) =>{
    return (
        <div className='icon-wrapper'>
            <img className='icon-medsos' alt='icon' src={img}></img>
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <img className="logo" src={LogoKabayan} alt="Logo Kabayan Coding" />
                </div>
                <div className="social-wrapper">
                    <Icon img={ICFacebook} />
                    <Icon img={ICTwitter} />
                    <Icon img={ICInstagram} />
                    <Icon img={ICDiscord} />
                    <Icon img={ICGithub} />
                </div>
            </div>
            <div className="copyright">            
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer;
