
import _ from "lodash";
import Player from '@vimeo/player';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', _.throttle(updateTime, 1000));

function updateTime ({seconds}) {
   localStorage.setItem("videoplayer-current-time", seconds);        
}

const time = Number(localStorage.getItem("videoplayer-current-time"));      


player.setCurrentTime(time).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
