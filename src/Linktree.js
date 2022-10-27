import React from 'react'

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
                <div className='link'  id='books'>
                    <p>Zuri Books</p>
                    <p className='description'>Here you can find books about design and coding and also answers to questions you may have.</p>
                </div>
            </a>
            <a href='https://books.zuri.team/python-for-beginners?ref_id=HassanatB-O'>
                <div className='link' id='book__python'>
                    <p>Python Book</p>
                    <p className='description'>With The Zuri Book you can get vast knowledge about design and coding. The content in this book has been carefully curated by learned developers just for you.</p>
                </div>
            </a>
            <a href='https://background.zuri.team'>
                <div className='link' id='pitch'>
                    <p>Background Checks for Coders</p>
                    <p className='description'>Need to get information on a developer? No need to look further!</p>
                </div>
            </a>
            <a href='https://books.zuri.team/design-rules'>
                <div className='link' id='book__design'>
                    <p>Design Books</p>
                    <p className='description'>Are you a designer? Zuri offers access to free guidelines for you to excel at building art.</p>
                </div>
            </a>
            <div className='icons'>
                <div>
                    <img src='/Image/slack.svg' style={{height: '24px', width: '24px', marginRight: '1rem'}} alt='the slack icon represented by some L looking shapes in different directions (N E W S)'/>
                    <img src='/Image/Icon.svg' alt='the Github icon represented by a 2D cat with a black background'/>
                </div>
            </div>
        </div>
        <hr/>
        <div className='footer'>
            <div>
                <img src='/Image/Zuri-logo.svg' alt='a logo spelling out Zuri Internship in black, bold colors'/>
            </div>
            <p>HNG Internship 9 Frontend Task</p>
            <div>
                <img src='/Image/I4G.svg' alt='a logo with a blue colored globe and INGRESSIVE FOR GOOD written next to it in caps and color black'/>
            </div>
        </div>
    </div>
  )
}
