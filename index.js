const ngrok = require("@ngrok/ngrok");

async function forwardToApp() {
  const forwarder = await ngrok.forward({
    addr: "localhost:5173",
    authtoken_from_env: true,
    domain: "unwieldy-hesitant-judicial.ngrok-free.dev",
  });
  console.log(`Available at: ${forwarder.url()}`);
}

forwardToApp();