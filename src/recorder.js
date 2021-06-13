let completeBlob = null;
let stream = null;
let chunks = [];
let recorder = null;
let options = { mimeType: "video/webm;codecs=vp9" };

document.getElementById("start-btn").addEventListener("click", startRec);
document.getElementById("stop-btn").addEventListener("click", stopRec);

async function startRec() {
  try {
    stream = await navigator.mediaDevices.getDisplayMedia({
      video: {
        mediaSource: "screen",
      },
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44100,
      },
    });

    recorder = new MediaRecorder(stream, options);
    recorder.ondataavailable = (e) => chunks.push(e.data);
    recorder.start();
    recorder.onstop = onStop;
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("stop-btn").style.display = "unset";
  } catch (error) {
    console.error(error);
  }
}

const download = function (data) {
  var link = document.createElement("a");
  link.download = Date.now() + ".webm";
  link.href = data;
  link.click();
};

async function stopRec() {
  try {
    recorder.stop();
    stream.getTracks().forEach((track) => {
      track.stop();
    });
  } catch (error) {
    console.error(error);
  }
}

async function onStop() {
  try {
    document.getElementById("stop-btn").style.display = "none";

    completeBlob = new Blob(chunks, {
      type: "video/webm",
    });
    let downloadBtn = document.getElementById("download-btn");
    let video = document.getElementById("vidPlayer");
    let ObjectURL = URL.createObjectURL(completeBlob);
    video.style.display = "block";
    video.src = ObjectURL;
    downloadBtn.style.display = "unset";
    downloadBtn.addEventListener("click", (e) => {
      e.preventDefault();
      download(ObjectURL);
    });
  } catch (error) {
    console.error(error);
  }
}
