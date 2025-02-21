const PROJECTS = {
  PORTFOLIO: 'portfolio',
  HANGMAN: 'hangman',
  SCHEDULER: 'scheduler',
  MOVIEDOO: 'moviedoo',
  WILCOMERCE: 'wilcomerce'
}

const PROJECT_URLS = {
  [PROJECTS.PORTFOLIO]: "https://willianleiton.onrender.com",
  [PROJECTS.HANGMAN]: "https://willianshangmanai.onrender.com",
  [PROJECTS.SCHEDULER]: "https://scheduler.onrender.com",
  [PROJECTS.MOVIEDOO]: "https://moviedoo.onrender.com/api",
  [PROJECTS.WILCOMERCE]: "https://moviedoo.vercel.app",
};

document.addEventListener("DOMContentLoaded", async () => {
  // https://willeiton.github.io/deploy-gate/?project=hangman
  // https://willeiton.github.io/deploy-gate/?project=scheduler
  // https://willeiton.github.io/deploy-gate/?project=moviedoo
  const urlParams = new URLSearchParams(window.location.search);
  const project = urlParams.get("project");
  const projectUrl = PROJECT_URLS[project] || PROJECT_URLS[PROJECTS.PORTFOLIO];
  const progressBar = document.getElementById("progress-bar");
  let progress = 0;
  let serverReady = false;

  async function checkServer() {
    try {
      const response = await fetch(`${projectUrl}/is_online`);
      if (response.ok) {
        serverReady = true;
        clearInterval(serverCheckInterval);
        progress = 100;
        progressBar.style.transition = "width 1s ease-in-out";
        progressBar.style.width = "100%";

        setTimeout(() => {
          window.location.href = projectUrl;
        }, 1000);
      }
    } catch (error) {
      console.warn("Server not ready yet...");
    }
  }

  const serverCheckInterval = setInterval(checkServer, 1000);

  const interval = setInterval(() => {
    if (!serverReady) {
      progress += 1;
      if (progress > 100) progress = 100;
      progressBar.style.width = `${progress}%`;
    }
  }, 1000);
});
