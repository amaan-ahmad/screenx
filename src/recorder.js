let completeBlob = null;
let stream = null;
let chunks = [];
let recorder = null;

document.getElementById("start-btn").addEventListener("click", startRec);
document.getElementById("stop-btn").addEventListener("click", stopRec);

async function startRec() {
  try {
    stream = await navigator.mediaDevices.getDisplayMedia({
      video: {
        mediaSource: "screen",
      },
    });

    recorder = new MediaRecorder(stream);
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
  link.download = Date.now() + ".mp4";
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
      type: chunks[0].type,
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
