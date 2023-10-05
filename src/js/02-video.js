import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime) {
  player.setCurrentTime(parseFloat(savedTime));
}

const saveCurrentTime = throttle(async () => {
  const currentTime = await player.getCurrentTime();
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000);

player.on('timeupdate', saveCurrentTime);
