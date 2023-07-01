const { execSync } = require('child_process');

function installCodeServer() {
  try {
    execSync('curl -fsSL https://code-server.dev/install.sh | sh');
    console.log('code-server installed successfully.');

    // Execute code-server
    execSync('code-server');
  } catch (error) {
    console.error('An error occurred while installing code-server:', error);
  }
}

installCodeServer();


