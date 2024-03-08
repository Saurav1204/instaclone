import Facebook from '/Users/testuser/Desktop/Saurav/reactjs/instagramclone/src/cloneintagram/Facebook_icon.svg.webp'
import playstore from '/Users/testuser/Desktop/Saurav/reactjs/instagramclone/src/cloneintagram/playstore.png'
import appstore from '/Users/testuser/Desktop/Saurav/reactjs/instagramclone/src/cloneintagram/appstore.png'
import mainimage from '/Users/testuser/Desktop/Saurav/reactjs/instagramclone/src/cloneintagram/mainimage.png'

import './Clonecss.css'
import React from 'react'

export default function Clone() {


  return (
    <div className='container'>
    <div className='page'>
      <img src={mainimage} className='sideimage'></img>

      <div className='pageone'>
        <div className='firspart'>
          <h1 className='title'>instagram</h1>
         <form>
          <input type='text' className='userid' placeholder='phone number,user name or email address' />
          <input type='password' className='password' placeholder='Password' />
          <button className='loginbtn'>Log in</button>
          </form>
          <p className='or'>OR</p>
          <div className='fb'>
            <img src={Facebook} className='facebook' />
            <p className='logofb'>Log in with facebook</p>
          </div>
          <p className='forgotps'>Forgotten your password?</p>
        </div>
        <div className='secondpart'>
          <p className='signup'>Don't have an account?<span> Sign up</span></p>
        </div>
        <div className='thirdpart'>
          <p className='getapp'>Get the app.</p>
        </div>
        <div className='forthpart'>
          <img className='app appone' src={appstore} alt="app link" />
          <img className='app' src={playstore} alt="app link" />
        </div>
      </div>
    </div>
    <div>
      <div className="listoflinks">
        <ul>
          <li><a>Meta</a></li>
          <li><a>About</a></li>
          <li><a>Blog</a></li>
          <li><a>Jobs</a></li>
          <li><a>Help</a></li>
          <li><a>API</a></li>
          <li><a>Privacy</a></li>
          <li><a>Terms</a></li>
          <li><a>Locations</a></li>
          <li><a>Instagram Lite</a></li>
          <li><a>Contact uploading and non-users</a></li>
          <li><a>Meta Verified</a></li>
        </ul>
        <ul>
          <li>
            <select name="language" id="language" className="lang">
              <option value="af">Afrikaans</option>
              <option value="ar">العربية</option>
              <option value="cs">Čeština</option>
              <option value="da">Dansk</option>
              <option value="de">Deutsch</option>
              <option value="el">Ελληνικά</option>
              <option value="en">English</option>
              <option value="en-gb">English (UK)</option>
              <option value="es">Español (España)</option>
              <option value="es-la">Español</option>
              <option value="fa">فارسی</option>
              <option value="fi">Suomi</option>
              <option value="fr">Français</option>
              <option value="he">עברית</option>
              <option value="id">Bahasa Indonesia</option>
              <option value="it">Italiano</option>
              <option value="ja">日本語</option> 
              <option value="ko">한국어</option>
              <option value="ms">Bahasa Melayu</option>
              <option value="nb">Norsk</option>
              <option value="nl">Nederlands</option>
              <option value="pl">Polski</option>
              <option value="pt-br">Português (Brasil)</option>
              <option value="pt">Português (Portugal)</option>
              <option value="ru">Русский</option>
              <option value="sv">Svenska</option>
              <option value="th">ภาษาไทย</option>
              <option value="tl">Filipino</option>
              <option value="tr">Türkçe</option>
              <option value="zh-cn">中文(简体)</option>
              <option value="zh-tw">中文(台灣)</option>
              <option value="bn">বাংলা</option>
              <option value="gu">ગુજરાતી</option>
              <option value="hi">हिन्दी</option>
              <option value="hr">Hrvatski</option>
              <option value="hu">Magyar</option
              ><option value="kn">ಕನ್ನಡ</option>
              <option value="ml">മലയാളം</option>
              <option value="mr">मराठी</option>
              <option value="ne">नेपाली</option>
              <option value="pa">ਪੰਜਾਬੀ</option>
              <option value="si">සිංහල</option>
              <option value="sk">Slovenčina</option>
              <option value="ta">தமிழ்</option>
              <option value="te">తెలుగు</option>
              <option value="ur">اردو</option>
              <option value="vi">Tiếng Việt</option>
              <option value="zh-hk">中文(香港)</option>
              <option value="bg">Български</option>
              <option value="fr-ca">Français (Canada)</option>
              <option value="ro">Română</option>
              <option value="sr">Српски</option>
              <option value="uk">Українська</option>
            </select>
          </li>
          <li>© 2024 Instagram from Meta</li>
        </ul>
      </div>
    
    </div>
  </div>

  )
}


