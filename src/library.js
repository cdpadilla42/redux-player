export function convertTime(time) {
  let minutes = 0;
  let seconds = 0;

  if (time % 60 > 0) {
    minutes = Math.floor(time / 60);
    seconds = time - minutes * 60;
  }

  return `${minutes}:${seconds}`;
}
