#!/usr/bin/env node
const webdriver = require('selenium-webdriver');
const {until}= require("selenium-webdriver");
const {WebElement} = require("selenium-webdriver");
const {Key} = require("selenium-webdriver");
const {By} = require("selenium-webdriver");
let driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();
(async function hello(){
    await driver.get('https://stackoverflow.com/');
    driver.wait(function() {
        return driver.executeScript('return document.readyState').then(function(readyState) {
            return readyState === 'complete';
        });
    });
    //await driver.switchTo().frame(0);
    //await driver.findElement(By.id('introAgreeButton')).click();
    //await driver.switchTo().parentFrame();
    await driver.findElement(By.name('q')).sendKeys('[selenium]',Key.ENTER);
    driver.wait(function() {
        return driver.executeScript('return document.readyState').then(function(readyState) {
            return readyState === 'complete';
        });
    });
    let elements = await driver.wait(until.elementsLocated(By.className('question-summary')));
    for(let ele of elements){
        //var texto= ele.findElement(By.className('question-hyperlink')).getText();
        console.log(await ele.findElement(By.className('question-hyperlink')).getText()
            +'==>'+await ele.findElement(By.className('question-hyperlink'))
                .getAttribute('href')+'\n--------------');
    }


})();

console.log(driver.getCurrentUrl());