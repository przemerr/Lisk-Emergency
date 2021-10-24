const network = 'mainnet';
const request = require('request');
request('https://' + network + '.lisk.io/api/node/info', {
	json: true
}, (err, res, body) => {
	if (err) {
		return console.log(err);
	}
	const finalizedHeight = body.data.finalizedHeight;
	const parentBlockHeight = finalizedHeight - 8640;
	request('https://' + network + '-service.lisk.io/api/v2/blocks?height=' + finalizedHeight, {
		json: true
	}, (err, res, body) => {
		if (err) {
			return console.log(err);
		}
		finalizedTimestamp = body.data[0].timestamp;

		request('https://' + network + '-service.lisk.io/api/v2/blocks?height=' + parentBlockHeight, {
			json: true
		}, (err, res, body) => {
			if (err) {
				return console.log(err);
			}
			parentBlockTimestamp = body.data[0].timestamp;
			missedBlocks = Math.ceil((finalizedTimestamp - parentBlockTimestamp) / 10) - (finalizedHeight - parentBlockHeight);
			console.log('Missed blocks: ' + missedBlocks);
			maxPreviouslyForged = (finalizedHeight + missedBlocks);
			console.log('height: ' + finalizedHeight + ', maxHeightPreviouslyForged: ' + maxPreviouslyForged + ', maxHeightPrevoted: ' + finalizedHeight);
		});
	});
});
