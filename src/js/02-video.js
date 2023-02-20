import Player from '@vimeo/player';
import lodashThrottle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTime = function (data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
  const time = Number(localStorage.getItem('videoplayer-current-time'));
};

player.on('timeupdate', lodashThrottle(currentTime, 1000));

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
        defualt: break;
    }
  });
