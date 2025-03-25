import React from 'react'
import './appDownload.css'
import { assets } from '../../assets/assets'

const appDownload = () => {
  return (
    <div className='appDownload' id='appDownload'>
      <p>For Better Experience Download <br />FastBite App</p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default appDownload
