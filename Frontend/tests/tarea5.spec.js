const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Tarea5', function() {
  this.timeout(30000);
  let driver;
  let vars;

  beforeEach(async function() {
    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(new (require('selenium-webdriver/chrome').Options)().headless()) // [Added] Headless mode for CI
      .build();
    vars = {};
  });

  afterEach(async function() {
    await driver.quit(); // Ensure proper cleanup
  });

  it('Tarea5', async function() {
    await driver.get("http://localhost:8080/");
    await driver.manage().window().setRect({ width: 974, height: 1032 });

    await driver.findElement(By.id("num1")).sendKeys("10");
    await driver.findElement(By.id("num2")).sendKeys("10");
    await driver.findElement(By.id("subtract-button")).click();
    await driver.findElement(By.css(".button-group > button:nth-child(2)")).click();

    await driver.findElement(By.id("num1")).sendKeys("10");
    await driver.findElement(By.id("num2")).sendKeys("10");
    await driver.findElement(By.css(".button-group > button:nth-child(1)")).click();
    await driver.findElement(By.id("subtract-button")).click();
    await driver.findElement(By.css(".button-group > button:nth-child(1)")).click();
  });
});
