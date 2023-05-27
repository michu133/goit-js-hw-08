import { throttle } from 'lodash';

console.log(throttle);

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(handleTimeUpdate, 1000));

function handleTimeUpdate(event) {
  const currentTime = event.seconds;

  localStorage.setItem('videoplayer-current-time', currentTime.toString());
}

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

window.addEventListener('load', function () {
  const savedTime = localStorage.getItem('videoplayer-current-time');

  if (savedTime) {
    player.setCurrentTime(parseFloat(savedTime));
  }
});
