import "./styles.css";
import { twitterIcon, githubIcon, linkedinIcon } from "./icons";
import {
  title,
  subtitle,
  startBtnText,
  stopBtnText,
  downloadBtnText,
  twitterLink,
  githubLink,
  linkedInLink,
} from "./constants";

const htmlBody = () => {
  return `
    <div class="header">
      <h1 class="title">${title}</h1>
      <p class="subtitle">${subtitle}</p>
      <p>
        Built with ❤ by
        <a href="https://amaan.codes" target="_blank">Amaan Ahmad</a>
      </p>
    </div>
    <div class="container">
      <div class="controls">
        <button id="start-btn">${startBtnText}</button>
        <button id="stop-btn" style="display: none">${stopBtnText}</button>
        <button id="download-btn" style="display: none">${downloadBtnText}</button>
      </div>
      <video
        controls="true"
        src=""
        class="video-player"
        id="vidPlayer"
        style="display: none"
      ></video>
    </div>
    <footer>
      <a href=${twitterLink} target="_blank">
        ${twitterIcon()}
      </a>
      <a href=${githubLink} target="_blank">
        ${githubIcon()}
      </a>
      <a href=${linkedInLink} target="_blank">
        ${linkedinIcon()}
      </a>
    </footer>
  `;
};

document.getElementById("app").innerHTML = htmlBody();
