import { browser, element, by, WebElement, protractor } from "protractor";
import {createWriteStream} from 'fs';
import { timingSafeEqual } from "crypto";
import { Alert } from "selenium-webdriver";

describe('This is a sample application to test consumption', function(){

 /* it('This is a sample application to test Caffeine consumption', function(){
    //browser.get('http://www.globalsqa.com/angularJs-protractor/ConsumptionCalculator/');
      browser.get(browser.params.testUrl);
      element(by.xpath('/html/body/form[1]/p/input')).sendKeys(5);
     // browser.sleep(5000);
      element(by.xpath('/html/body/form[1]/div/p[3]')).getText().then(function(coffeMsg){
        console.log('Text present on screen is : ' + coffeMsg);
        element(by.xpath('/html/body/form[2]/p/input')).sendKeys(8);
          browser.sleep(5000);
        let flag:boolean = false;
        element(by.css('#cigarette')).isDisplayed().then(function(flag){
          console.log('Value: ' + flag);
        if(flag){
          console.log('Cigar Symbol is dsiplayed');
        }
        else{
          console.log('Cigar Symbol is NOT displayed');
        }
        });
        
      
      });
 }); */

/*
 it('This is a sample application to test Tobbacoo consumption', async function(){
  await browser.get(browser.params.testUrl);
  browser.navigate();
  var ele:WebElement;
  element(by.model('yourName')).sendKeys(protractor.Key.DELETE);
  element(by.model('yourName')).sendKeys('text');
  ele = await element(by.xpath('/html/body/div[2]/div[1]/div[2]/span[1]/code'));
  await browser.actions().mouseMove(ele).perform();
  browser.sleep(5000);
   });
   */

   it('This is to test the calendar of the object in protractor', function(){
    browser.get(browser.params.testUrl);
    //browser.actions().mouseMove(element(by.xpath('/html/body/div[1]/md-content/div[1]/docs-demo[1]/div/div/section/demo-include/div/md-content/div[2]/div[1]/md-datepicker/div/input'))).perform();
   // element(by.name('basic-usage')).click();

    browser.takeScreenshot().then(function(png){
      //element(by.xpath('/html/body/div[1]/md-content/div[1]/docs-demo[1]/div/div/section/demo-include/div/md-content/div[2]/div[1]/md-datepicker/div/input')).clear();
      let startDate : WebElement; 
      startDate = element(by.xpath('/html/body/div[1]/md-content/div[1]/docs-demo[1]/div/div/section/demo-include/div/md-content/div[2]/div[1]/md-datepicker/div/input'));
      startDate.clear();
      browser.sleep(5000);
      browser.executeScript('arguments[0].value="2/28/2019";',startDate);
            
      element(by.xpath('/html/body/div[1]/md-content/div[1]/docs-demo[1]/div/div/section/demo-include/div/md-content/div[2]/div[1]/md-datepicker/div/input')).sendKeys(protractor.Key.TAB);
      browser.sleep(5000);
      var stream = createWriteStream('pic1.png');
      stream.write(new Buffer(png,'base64'));
      stream.end();
    });
  });

  
/*
it('CheckBox selected of the object in protractor', function(){
browser.get(browser.params.testUrl);
browser.manage().window().maximize();
let flag:boolean;
element(by.xpath('/html/body/div/md-content/div[1]/docs-demo[3]/div/div/section/demo-include/div/div/div/div[2]/div/fieldset/div/div[5]/label/input')).click();
element(by.xpath('/html/body/div/md-content/div[1]/docs-demo[3]/div/div/section/demo-include/div/div/div/div[2]/div/fieldset/div/div[2]/label/input')).click();
element(by.xpath('/html/body/div/md-content/div[1]/docs-demo[3]/div/div/section/demo-include/div/div/div/div[2]/div/fieldset/div/div[4]/label/input')).click();

browser.sleep(2000);

let checkBoxVals:WebElement;
checkBoxVals = element(by.xpath('/html/body/div/md-content/div[1]/docs-demo[3]/div/div/section/demo-include/div/div/div/div[3]/code'));
    console.log('VAL : '+ checkBoxVals);


});
*//*
it('Testing different scenerios', function(){
browser.get(browser.params.testUrl);
browser.manage().window().maximize();
element(by.name('quest')).sendKeys('Daddy');
browser.sleep(3000);
element(by.model('weapon')).sendKeys('Pen?');
browser.sleep(3000);
element(by.xpath('/html/body/div[1]/md-content/div[1]/docs-demo[6]/div/div/section/demo-include/div/div/form/div[2]/md-checkbox[1]/div[1]')).isEnabled().then(function(val){
console.log('Test: ' + val);
//element(by.xpath('/html/body/div[1]/md-content/div[1]/docs-demo[6]/div/div/section/demo-include/div/div/form/div[3]/button[2]')).click();
let alt:Alert;
let altText:string;
browser.sleep(5000);
if(browser.ExpectedConditions.alertIsPresent()){
  alt = browser.switchTo().alert();
  alt.getText().then(function(altText){
    console.log('Final Text: ' + altText);
    if(altText.toUpperCase().indexOf('IN')){
      console.log('VALID: INN ');
    }
    else{
      console.log('VALID: ');
    }
  });

}
else{
  console.log('Exit');
}


});

});*/
});
