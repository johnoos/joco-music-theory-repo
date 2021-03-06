import React, {Component} from 'react';
import SocialMediaButtons from './socialmediabuttons';

class Header extends Component {
    render() {  
        return (
            <>
                <div class="header-media">
                    <SocialMediaButtons 
                        url={"http://bit.ly/musictheorytuition"} 
                        quote={"Music theory tuition online, from Stellenbosch"} 
                        hashtag={"#musictheorytuition"}/></div>
                <div class="header-mid-section"></div>
                <div class="header-title"></div>
            </>
        );
    }
}

export default Header;