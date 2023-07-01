const { exec } = require('child_process');

exec('curl -fsSL https://code-server.dev/install.sh | sh', (error, stdout, stderr) => {
  if (error) {
    console.error(`An error occurred: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Command execution failed: ${stderr}`);
    return;
  }
  console.log(`Command executed successfully:\n${stdout}`);
});
