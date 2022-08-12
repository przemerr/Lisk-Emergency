# Lisk-Emergency
Simple script that calculates forging:enable values in case of losing forging.db. Values are based on the current finalized height of the selected network.
# How to use it
If you lost your forging data. Estimate the height when your node went down. Wait until the finalized height of the selected network is higher than the estimated height of your node crash (If the network is healthy, it usually takes 2 rounds). Then run the script to get the safe numbers.

### Two ways to run the script
- Just paste the script to the window on the https://npm.runkit.com/ ,(you can change the network to testnet, by replacing the mainnet in the first line), click run, scroll down to see the values.
- You can also run the script on your server with nodejs.
