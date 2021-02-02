// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('google-cookies', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('google-cookies', async function() {
    await driver.get("https://www.google.com/")
    await driver.manage().window().setRect(802, 816)
    await driver.switchTo().frame(0)
    await driver.findElement(By.css(".I47yTd")).click()
    await driver.findElement(By.css("#introAgreeButton .RveJvd")).click()
    await driver.switchTo().defaultContent()
    await driver.findElement(By.name("q")).click()
    await driver.findElement(By.name("q")).sendKeys("devops")
    await driver.findElement(By.name("q")).sendKeys(Key.ENTER)
  })
})
