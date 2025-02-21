document.addEventListener("DOMContentLoaded", async () => {
  const progressBar = document.getElementById("progress-bar");
  let progress = 0;
  let serverReady = false;

  async function checkServer() {
    try {
      const response = await fetch("https://willianleiton.onrender.com/is_online");
      if (response.ok) {
        serverReady = true;
        clearInterval(serverCheckInterval);
        progress = 100;
        progressBar.style.transition = "width 1s ease-in-out";
        progressBar.style.width = "100%";

        setTimeout(() => {
          window.location.href = "https://willianleiton.onrender.com";
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
