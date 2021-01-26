import React from 'react';
import img from '../images-photos/music-levels.png';

function MusicTheoryCertificationLevels() {
    return (
        <div>
            <p>
                The information below should not be construed to be the syllabus of any exam body. 
                It is merely a reference for learner assessments and goal setting.
            </p>
            <p class="indent">
            <img class="scale-image-to-fit" src={img} alt="alt text"/>
            </p>
        </div>
    );
}

export default MusicTheoryCertificationLevels;