// Shares the local dev server (npm run dev, port 5173) on a public ngrok address.
// Run it in a second terminal while the dev server is running. The token is read from the
// NGROK_AUTHTOKEN environment variable, never written in this file. In PowerShell:
//   $env:NGROK_AUTHTOKEN = "your-token"; node index.js
import ngrok from '@ngrok/ngrok'

const forwarder = await ngrok.forward({
  addr: 'localhost:5173',
  authtoken_from_env: true,
  domain: 'unwieldy-hesitant-judicial.ngrok-free.dev',
})
console.log(`Available at: ${forwarder.url()}`)
