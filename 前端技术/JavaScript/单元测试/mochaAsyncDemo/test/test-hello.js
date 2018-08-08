const assert = require('assert');

const hello = require('../hello');

describe('#hello.js', () => {
	
	describe("test async hello function", function (done) {
		it('#async with done', (done) => {
			(async function () {
				try {
					let r = await hello();
					assert.strictEqual(r, 15);
					done();
				} catch (e) {
					done(e);
				}
			})();
		})
	})
});