const { exec } = require('child_process');

exec('curl -fsSL https://code-server.dev/install.sh | sh', (error, stdout, stderr) => {
  if (error) {
    console.error(`An error occurred: ${error.message}`);
    return;
  }
  console.log(stdout);
});
