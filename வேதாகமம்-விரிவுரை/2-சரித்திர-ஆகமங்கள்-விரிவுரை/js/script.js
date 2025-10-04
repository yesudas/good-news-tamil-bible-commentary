
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/good-news-collections/வேதாகமம்-விரிவுரை/2-சரித்திர-ஆகமங்கள்-விரிவுரை/sw.js')
        .then(() => console.log("Service Worker Registered"))
        .catch(err => console.log("Service Worker Failed:", err));
}
        
document.addEventListener("DOMContentLoaded", () => {
  const installBtn = document.getElementById("installAppBtn");
  let deferredPrompt;

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = "block";
  });

  installBtn.addEventListener("click", async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      console.log("User choice:", choice.outcome);
      deferredPrompt = null;
    }
  });
});

  let scale = 1;
  const wrapper = document.getElementById("container");

  function applyZoom() {
    wrapper.style.transform = `scale(${scale})`;
    wrapper.style.width = (100 / scale) + "vw";
    wrapper.style.height = (100 / scale) + "vh";
  }

  function zoomIn() {
    scale += 0.1;
    applyZoom();
  }

  function zoomOut() {
    if (scale > 0.3) {
      scale -= 0.1;
      applyZoom();
    }
  }

  function resetZoom() {
    scale = 1;
    applyZoom();
  }

  //applyZoom(); // initialize