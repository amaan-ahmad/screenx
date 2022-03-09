let unSeekableBlob = null;
let stream = null;
let chunks = [];
let recorder = null;
let options = { mimeType: "video/webm;codecs=vp9,opus" };

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
    recorder.onstop = onStop;
    stream.getTracks().forEach((track) => {
      track.onended = onTracksEnd;
    });
    recorder.start();
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("stop-btn").style.display = "unset";
  } catch (error) {
    console.error(error);
  }
}

function onTracksEnd() {
  const allTracksEnded = stream
    .getTracks()
    .every((track) => track.readyState === "ended");
  if (allTracksEnded) {
    recorder.stop();
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
    const tracks = stream.getTracks();
    console.log(tracks);
    tracks.forEach((track) => {
      track.stop();
    });
  } catch (error) {
    console.error(error);
  }
}

async function onStop() {
  try {
    document.getElementById("stop-btn").style.display = "none";
    unSeekableBlob = new Blob(chunks, {
      type: "video/webm",
    });
    getSeekableBlob(unSeekableBlob, prepareDownload);
  } catch (error) {
    console.error(error);
  }
}

function prepareDownload(newBlob) {
  let downloadBtn = document.getElementById("download-btn");
  let video = document.getElementById("vidPlayer");
  let ObjectURL = URL.createObjectURL(newBlob);
  video.style.display = "block";
  video.src = ObjectURL;
  downloadBtn.style.display = "unset";
  downloadBtn.addEventListener("click", (e) => {
    e.preventDefault();
    download(ObjectURL);
  });
}

// Thanks for the answer https://stackoverflow.com/a/67823820/8986598
function getSeekableBlob(inputBlob, callback) {
  // EBML.js copyrights goes to: https://github.com/legokichi/ts-ebml
  if (typeof EBML === "undefined") {
    throw new Error("Please link: https://cdn.webrtc-experiment.com/EBML.js");
  }
  var reader = new EBML.Reader();
  var decoder = new EBML.Decoder();
  var tools = EBML.tools;
  var fileReader = new FileReader();
  fileReader.onload = function (e) {
    var ebmlElms = decoder.decode(this.result);
    ebmlElms.forEach(function (element) {
      reader.read(element);
    });
    reader.stop();
    var refinedMetadataBuf = tools.makeMetadataSeekable(
      reader.metadatas,
      reader.duration,
      reader.cues
    );
    var body = this.result.slice(reader.metadataSize);
    var newBlob = new Blob([refinedMetadataBuf, body], {
      type: "video/webm",
    });
    callback(newBlob);
  };
  fileReader.readAsArrayBuffer(inputBlob);
}
