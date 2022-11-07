import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

export default function Linktree() {
  return (
    <div className='linktree--div'>
        <div>
            <div>
                <img src='Image/New Note.png' alt='a memoji of a dark skin hijabi with a nose ring smiling with teeth' id='profile-img'/>
                <img src='Image/share.svg' className='share--icon' alt='the share icon'/>
                <img src='Image/ellipsis.svg' className='ellipsis' alt='the ellipsis icon represented with three grey periods'/>
            </div>
        </div>
        <h2 id='twitter' style={{clear: 'right'}}>Ayobusarii</h2>
        <h2 id='slack'>HassanatB-O</h2>
        <div className='links-div'>
             <a href='https://twitter.com/Ayobusarii'>
                <p className='link' id='btn__zuri'>Twitter Link</p>
            </a>
            <a href='https://training.zuri.team/'>
                <p className='link' id='btn__zuri'>Zuri Team</p>
            </a>
            <a href='http://books.zuri.team'>
                <p className='link' id='books'>Zuri Books</p>
            </a>
            <a href='https://books.zuri.team/python-for-beginners?ref_id=HassanatB-O'>
                <p className='link' id='book__python'>Python Books</p>
            </a>
            <a href='https://background.zuri.team'>
                <p className='link' id='pitch'>Background Checks for Coders</p>
            </a>
            <a href='https://books.zuri.team/design-rules'>
                <p className='link' id='book__design'>Design Books</p>
            </a>
            <Link to='/contact'>
                <p className='link' id='contact'>Contact Me</p>
            </Link>
            <div className='icons'>
                <div>
                    <img src='/Image/slack.svg' style={{height: '24px', width: '24px', marginRight: '1rem'}} alt='the slack icon represented by some L looking shapes in different directions (N E W S)'/>
                    <img src='/Image/Icon.svg' alt='the Github icon represented by a 2D cat with a black background'/>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
