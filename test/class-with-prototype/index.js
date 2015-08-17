/**
 *
 * (c) Anthony Matarazzo <email@anthonymatarazzo.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';


var Browser = require('zombie'),
	expect = require('expect');

// TODO: this is a quick and dirty test - clean it up and be more thorough

describe('Classical Prototypal Inheritance:', function() {

	var browser = new Browser();

	before(function() {
		return browser.visit('file://index.html');
	});

	describe('inherit class with prototype', function() {

		it('is an instance of SuperClass', function() {
			browser.assert.evaluate('obj instanceof SuperClass');
		});

		it('is an instance of ParentClass', function() {
			browser.assert.evaluate('obj instanceof ParentClass');
		});

		it('is an instance of ChildClass', function() {
			browser.assert.evaluate('obj instanceof ChildClass');
		});

		it('called run on SuperClass', function() {
			browser.assert.evaluate('obj._superCalled === true');
		});

		it('called run on ParentClass', function() {
			browser.assert.evaluate('obj._parentCalled === true');
		});

		it('called run on ChildClass', function() {
			browser.assert.evaluate('obj._childCalled === true');
		});

	});

});