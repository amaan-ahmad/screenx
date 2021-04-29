import "./styles.css";

const title = "ScreenX";

const htmlBody = () => {
  return `
      <h1 class="title"> ${title} </h1>

      <div class="controls" >
        <button id="start-btn">
            Start recording
            </button>
        <button id="stop-btn" style="display:none">
            Stop recording
        </button>
        <button id="download-btn" style="display:none">
            Download
        </button>
      </div>
      <video controls="true" src="" class="video-player" id="vidPlayer" style="display:none">
      </video>
      `;
};

document.getElementById("app").innerHTML = htmlBody();
