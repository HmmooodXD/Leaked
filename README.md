Thanks for cracking uLicense! <3

You dont need a license key to use this product.

# BEFORE INSTALL

1.  Make sure you have Node.js installed in your system. You can check your node version using
    "node -v" and node package manager using npm -v. Node version must be 14.0 or higher!
    We recommend using the current LTS version! You can check what is current LTS from:
    https://nodejs.org/en/

    When you have Nodejs in your system you should update NPM(node package manager) to latest.
    => npm install -g npm@latest

    If you dont have Node.js installed, you should check out these tutorials. (debian guide works on almost any linux distro)
    We recommend following installation guide under "Installing Using NVM" so you can easily select the wanted version!

    Linux: https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-debian-10
    Windows: https://nodejs.org/en/download/

2.  Setup MongoDB in your system.
    Linux: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-debian/
    Windows: https://www.mongodb.com/try/download/community

3.  TMUX/Screen is preferred for linux. You can have 2 instances (one for Discord-bot, and one for dashboard)
    If you havent use screen or tmux before We recommend using tmux since its more user friendly :)

    TMUX GUIDE: https://phoenixnap.com/kb/tmux-tutorial-install-commands

# DASHBOARD GUIDE

1.  Make sure you have Node installed in your system. Check: https://nodejs.org/en/
    => type "node -v" on your terminal. This version MUST be at least 14.0

2.  Fill in the .env config file before installing anything!

3.  Navigate inside dashboard-folder and type "npm i" into your terminal.

4.  Run "npm start" in your terminal. Panel should be running after that.

5.  Remove your first login password from .env or change your password from dashboard
    for security reasons!

6.  Optional: Setup a solid firewall on your VPS & get domain + SSL certificate.