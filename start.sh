#!/bin/bash

prk=$1
echo "============= start ================="
rm -r artifacts
rm -r cache
rm -r ignition/deployments
rm hardhat.config.js
cp hardhat.config.js.bk hardhat.config.js

sed -i "s/6666666666666666666666666666666/$prk/" "/root/hardhat/hardhat.config.js"

npx hardhat compile


echo y | npx hardhat ignition deploy ./ignition/modules/InkContract.js --network inksepolia


