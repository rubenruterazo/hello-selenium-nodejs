#!/usr/bin/env node
const webdriver = require('selenium-webdriver');
const until = require("selenium-webdriver");
const {Key} = require("selenium-webdriver");
const {By} = require("selenium-webdriver");
let driver = new webdriver.Builder()
	.forBrowser('firefox')
	.build();
(async function hello(){
	await driver.get('https://www.google.com/');
	driver.wait(function() {
		return driver.executeScript('return document.readyState').then(function(readyState) {
			return readyState === 'complete';
		});
	});
	await driver.switchTo().frame(0);
	await driver.findElement(By.id('introAgreeButton')).click();
	await driver.switchTo().parentFrame();
	await driver.findElement(By.name('q')).sendKeys('devops',Key.ENTER);
	console.log(driver.getCurrentUrl());
})();

console.log(driver.getCurrentUrl());

