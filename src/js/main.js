async function checkAndRedirect() {
  if (window.location.search) return;

  while (true) {
    try {
      const response = await fetch("https://willianleiton.onrender.com/is_online").catch(() => null);

      if (response && response.ok) {
        window.location.href = "https://willianleiton.onrender.com";
        break;
      }
    } catch {}

    await new Promise((resolve) => setTimeout(resolve, 3000));
  }
}

checkAndRedirect();
