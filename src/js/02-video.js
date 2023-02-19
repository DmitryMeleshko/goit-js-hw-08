import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

player.on('play', function() {
    console.log('played the video!');
});
player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});



const onTimeUpdate = function (data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data.seconds));

    let time = Number(localStorage.getItem(STORAGE_KEY));

    console.log(time);
};

player.on ('timeupdate', throttle(onTimeUpdate, 1000));

const currentTime = localStorage.getItem(STORAGE_KEY);

player.setCurrentTime(currentTime)
