import React from 'react';

/* npm install jsonp */
/* npm install react-share */

import {
    FacebookShareButton,
    FacebookIcon,
  } from "react-share";

function SocialMediaButtons(props) {
    const {url, quote, hashtag} = props; 
    return (
        <div>
          <FacebookShareButton 
              url={url}
              quote={quote}
              hashtag={hashtag}
              className={SocialMediaButtons}>
            <FacebookIcon size={30} borderRadius={15}/>
          </FacebookShareButton> 
        </div>    
    );
}

export default SocialMediaButtons;