## How to install latest Node.js in Raspberry Pi (Raspbian OS)?
  1. Go to https://nodejs.org and look for the current version of node.js. At this moment, for me version `9.5.0` is the current version.
  2. Open Terminal and Type
     * `curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -`
     * _**Note:**_ in future if you see the current version 10.x.x then in the URL above replace setup_9.x with `setup_10.x`
     * `sudo apt-get install nodejs`
     * `sudo apt-get install npm`
     * `sudo npm i -g npm`
     * In order for some npm packages to work (such as those that require building from source), you will need to install the build-essentials package.
     * `sudo apt-get install build-essential`
     
## Install BCM2835 in Raspberry Pi
  1. Go to : http://www.airspayce.com/mikem/bcm2835 and check for the latest version of the library. For me it is `bcm2835-1.55` now.
  2. Open Terminal and type: `wget http://www.airspayce.com/mikem/bcm2835/bcm2835-1.55.tar.gz`
  3. `tar zxvf bcm2835-1.55.tar.gz` : This will unzip this file.
  4. `cd bcm2835-1.55` : Go to this directory
  5. `./configure`
  6. `make`
  7. `sudo make check`
  8. `sudo make install`

## How to run this code?
### Method 1 (from git):
  * To install git on your Raspberry Pi, open terminal and Type:  
     * `sudo apt-get install git-core` 
  * `git clone https://github.com/apal21/Raspberry-Pi-DHT11-Node.js`
  * `cd Raspberry-Pi-DHT11-Node.js`
  * `npm install`
  * `node index.js` or `npm run test`
  
### Method 2 (Using NPM):
  * `mkdir DHT11 && cd DHT11`
  * `npm init --yes`
  * `nano index.js` and paste the content of this repo's index.js file.
  * `npm install node-dht-sensor`
  * `node index.js`
