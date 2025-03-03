const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Tarea1', function() {
  this.timeout(30000);
  let driver;
  let vars;
  
  beforeEach(async function() {
    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(new (require('selenium-webdriver/chrome').Options)().headless()) // Run in headless mode
      .build();
    vars = {};
  });

  afterEach(async function() {
    await driver.quit(); // Quit instead of closing
  });

  it('Tarea1', async function() {
    await driver.get("http://localhost:8080/");
    await driver.manage().window().setRect({ width: 974, height: 1032 });
    await driver.findElement(By.id("num1")).sendKeys("1");
    await driver.findElement(By.id("num2")).sendKeys("1");
    await driver.findElement(By.css(".button-group > button:nth-child(1)")).click();
    await driver.findElement(By.css(".button-group > button:nth-child(2)")).click();
  });
});
