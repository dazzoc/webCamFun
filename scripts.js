const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo(){
    // gets the users media pass it the video true and audio false
    // returns a promise so we call .then()
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(localMediaStream => {
            console.log(localMediaStream);

//  DEPRECIATION : 
//       The following has been depreceated by major browsers as of Chrome and Firefox.
//       video.src = window.URL.createObjectURL(localMediaStream);
//       Please refer to these:
//       Deprecated  - https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
//       Newer Syntax - https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject

            video.srcObject = localMediaStream;
            video.play();
          })
          .catch(err => {
            console.error(`OH NO!!!`, err);
          });
};

// function to get video on the canvas
function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;
  
    return setInterval(() => {
      ctx.drawImage(video, 0, 0, width, height);
      // take the pixels out
    //   let pixels = ctx.getImageData(0, 0, width, height);
      // mess with them
      // pixels = redEffect(pixels);
  
      // pixels = rgbSplit(pixels);
      // ctx.globalAlpha = 0.8;
  
      // pixels = greenScreen(pixels);
      // put them back
    //   ctx.putImageData(pixels, 0, 0);
    }, 16);
  }

// paintToCanvas();
getVideo();