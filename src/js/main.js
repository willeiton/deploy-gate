console.log('yeah');

async function checkAndRedirect() {
  if (!window.location.search) {
    try {
      const response = await fetch("https://willianleiton.onrender.com/is_online");
      if (response.ok) {
        window.location.href = "https://willianleiton.onrender.com/";
      }
    } catch (error) {
      console.error("Server is not online:", error);
    }
  }
}

checkAndRedirect();
