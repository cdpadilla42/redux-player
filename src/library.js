export function convertTime(time) {
  let minutes = 0;
  let seconds = 0;

  if (time % 60 >= 0) {
    minutes = Math.floor(time / 60);
    seconds = time - minutes * 60;
  } else {
    seconds = time;
  }

  return `${minutes}:${formatValue(seconds)}`;
}

function formatValue(n) {
  if (n < 10) return `0${n}`;
  return n;
}
