import React from 'react'
import './Footer.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';


export default function Footer() {
  return (
    <div>
      <div className="footer_icon">
        <FacebookOutlinedIcon />
        <InstagramIcon />
        <YouTubeIcon />
      </div>
      <div className='footerWrapper'>


        <div className="footerData">
          <ul>
            <li>Audio description</li>
            <li>Investor relation</li>
            <li>legal Notice</li>
          </ul>

        </div>
        <div className="footerData">
          <ul>
            <li>Help center</li>
            <li>Jobs</li>
            <li>perforamance</li>
          </ul>
        </div>
        <div className="footerData">
          <ul>
            <li>gift card</li>
            <li>term of use</li>
            <li>cooporate</li>
          </ul>
        </div>
        <div className="footerData">
          <ul>
            <li>media center</li>
            <li>privacy</li>
            <li>contact us</li>
          </ul>
        </div>


      </div>
      <div className="serviceCopy">
        <div className="serviceCode">
          <p>
            Service code
          </p>
        </div>
        <div className="copy-link">
          <p> © copy right 1997-2024 Netflix, inc</p>
        </div>
      </div>

    </div>
  )
}
