// Background timer worker for Fartlek Trainer
// This is implemented inline in index.html but provided here separately for reference

let timerId = null;

self.onmessage = function(e) {
  if (e.data.command === 'start') {
    if (timerId) clearInterval(timerId);
    timerId = setInterval(() => {
      self.postMessage({type: 'tick'});
    }, 1000);
  } else if (e.data.command === 'stop') {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  }
};
