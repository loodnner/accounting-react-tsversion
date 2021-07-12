 import {str} from './css.js'
 //把CSS标签样式放在字符串里面
let n = 1; 
const demo = document.querySelector(".demo");
const demo2 = document.querySelector(".demo2");
let id;
let time = 100;
const player = {
  init: () => {
    demo.innerText = str.substr(0, n);
    demo2.innerHTML = str.substr(0, n);
    player.play();
  },
  readString: () => {
    n += 1;
    if (n > str.length) {
      window.clearInterval(id);
      return;
    }
    demo.innerText = str.substr(0, n); //文本形式输出
    demo2.innerHTML = str.substr(0, n); //html标签输出style标签
    demo.scrollTop = demo.scrollHeight;
  },
  play: () => {
    id = setInterval(player.readString, time);
  },
  pause: () => {
    window.clearInterval(id);
  },
  slow: () => {
    player.pause();
    time = 300;
    player.play();
  },
  normal: () => {
    player.pause();
    time = 100;
    player.play();
  },
  fast: () => {
    player.pause();
    time = 0;
    player.play();
  },
};

player.init();
document.querySelector("#btnPause").onclick = player.pause;
document.querySelector("#btnPlay").onclick = player.play;
document.querySelector("#btnSlow").onclick = player.slow;
document.querySelector("#btnNormal").onclick = player.normal;
document.querySelector("#btnFast").onclick = player.fast;
