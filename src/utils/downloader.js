window.AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext;

export default function downloader(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (xhr.status === 200) {
      var arrayBuffer = xhr.response;
      if (arrayBuffer instanceof ArrayBuffer) {
        var successCallback = (audioBuffer) => callback(audioBuffer);

        var errorCallback = function(error) {
          if (error instanceof Error) {
            window.alert(error.message);
          } else {
            window.alert('Error : "decodeAudioData" method.');
          }
        };
        audioContext.decodeAudioData(arrayBuffer, successCallback, errorCallback);
      }
    }
  };
  xhr.open('GET', url, true);
  xhr.responseType = 'arraybuffer';
  xhr.send(null);
}
