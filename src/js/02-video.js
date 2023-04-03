import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const CURRENT_TIME = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (event) {
  localStorage.setItem(CURRENT_TIME, event.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME)) || 0);