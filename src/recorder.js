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
        mediaSource: "screen"
      }
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

async function stopRec() {
  try {
    recorder.stop();
    document.getElementById("stop-btn").style.display = "none";
    stream.getTracks().forEach((track) => {
      track.stop();
    });
  } catch (error) {
    console.error(error);
  }
}

async function onStop() {
  try {
    completeBlob = new Blob(chunks, {
      type: chunks[0].type
    });
    let downloadBtn = document.getElementById("download-btn");
    let video = document.getElementById("vidPlayer");
    let ObjectURL = URL.createObjectURL(completeBlob);
    video.style.display = "block";
    video.src = ObjectURL;
    downloadBtn.style.display = "unset";
    downloadBtn.href = ObjectURL;
    downloadBtn.download = Date.now() + ".mp4";
  } catch (error) {
    console.error(error);
  }
}
