'use strict';

function uuidify(str) {
	if (str.length !== 32) {
		throw new Error('length is not 32');
	}

	const a = str.substring(0, 8);
	const b = str.substring(8, 12);
	const c = str.substring(12, 16);
	const d = str.substring(16, 20);
	const e = str.substring(20, 32);
	return `${a}-${b}-${c}-${d}-${e}`;
}

module.exports = uuidify;
