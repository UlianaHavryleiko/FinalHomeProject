import { expect } from '@wdio/globals'
import { Key } from 'webdriverio'

describe("FinalHomeProject. Test cases 1-5", () => {

    it("should to sign up", async () => {
    await browser.url('https://github.com/');

    const signUpButton = await $('//body/div[1]/div[1]/header/div/div[2]/div/div/a')
    await browser.pause(2000)
    await signUpButton.click()
    await browser.pause(4000)

    const WelcomeWindow = await $('text-suggester div .sr-only')
    await expect(WelcomeWindow).toHaveText("Welcome to GitHub! Let's begin the adventure")


    let inputEmail = await $("#email")
    await inputEmail.addValue("fakemail@gigle.com")
    await browser.pause(2000)
    
    const ContinueButton = await $('//*[@id="email-container"]/div[2]/button')
    await ContinueButton.click()
    await browser.pause(2000)


    let inputPassword = await $("#password")
    await inputPassword.addValue("ssomepassword12345")
    await browser.pause(2000)

    const Continue2Button = await $('//*[@id="password-container"]/div[2]/button')
    await Continue2Button.click()
    await browser.pause(2000)


    let inputUsername = await $("#login")
    await inputUsername.addValue("commonuser12")
    await browser.pause(2000)

    const Continue3Button = await $('//*[@id="username-container"]/div[2]/button')
    await Continue3Button.click()
    await browser.pause(2000)
    

    let inputAnswer = await $("#opt_in")
    await inputAnswer.addValue("y")
    await browser.pause(2000)

    const Continue4Button = await $('//*[@id="opt-in-container"]/div[2]/button')
    await Continue4Button.click()
    await browser.pause(2000)






    await browser.url('https://github.com/');
    
    const headerThePlace = await $('/html/body/div[1]/div[4]/main/div[4]/div[1]/div/div/div/h2')
    await browser.pause(2000)
    await headerThePlace.scrollIntoView()
    await browser.pause(2000)
    
    let isEnabled2 = await headerThePlace.isEnabled()
    console.log("Is the place header enabled: " + isEnabled2) // outputs: true
    
    const linkStart = await $('a.btn-mktg.btn-large-mktg.btn-muted-mktg')
    let displayed2 = await linkStart.isDisplayed()
    console.log("Is displayed: " + displayed2) // outputs: true
    await linkStart.click()
    await browser.pause(2000)
    
    const headerPick = await $('/html/body/div[1]/div[4]/main/div/div[1]/h1')
    await expect(headerPick).toHaveText("Pick your trial plan")
    
    const EnterpriseCloud = await $('/html/body/div[1]/div[4]/main/div/div[2]/div/div/div[1]/a')
    await EnterpriseCloud.click()
    await browser.pause(2000)
    





    await browser.url('https://github.com/');
        
    const btnSubscribe = await $('/html/body/div[1]/footer/div[1]/div/div[1]/div/a')
    await browser.pause(2000)
    await btnSubscribe.scrollIntoView()
    await browser.pause(2000)
        
    let isEnabled = await btnSubscribe.isEnabled()
    console.log("Is the button Subscribe enabled: " + isEnabled) // outputs: true
        
    let clickable = await btnSubscribe.isClickable()
    console.log("Is clickable: " + clickable) // outputs: true
        
    await btnSubscribe.click()
    await browser.pause(2000)
        
    await expect(browser).toHaveUrl('https://resources.github.com/newsletter/')
        
    const headerSubscribe = await $("#hero-section-brand-heading")
    let displayed = await headerSubscribe.isDisplayed()
    console.log("Is displayed: " + displayed) // outputs: true
        
    const middleOfThePage = await $("#form")
    await middleOfThePage.scrollIntoView()
    await browser.pause(2000)
        
    const WorkEmail = await $('//*[@id=":R8d7m:"]')
    await WorkEmail.addValue("my@company.com")
    await browser.pause(2000)
        
    const County = await $('//*[@id=":R8d7m:"]')
    await County.click()
        
    const Ukraine = await $('//*[@id="country"]/option[225]')
    await Ukraine.scrollIntoView()
    await Ukraine.click()
    await browser.pause(2000)
        
    const check = await $("#gated-agree-marketingEmailOptin1")
    await check.click()
    await browser.pause(2000)
        
    const SubscribeBtn = await $('//*[@id="form"]/form/div/button')
    await SubscribeBtn.click()
    await browser.pause(2000)
        
    const headerThanks = await $("#hero-section-brand-heading")
    await expect(headerThanks).toHaveText("Thanks for subscribing!")





    
    await browser.url('https://github.com/');

    const SearchBtn = await $('span.flex-1')
    await SearchBtn.click()
    await browser.pause(2000)
    
    
    let InputSearch = await $("#query-builder-test")
    await InputSearch.addValue("act")
    await browser.pause(2000)
    await browser.keys(Key.Enter)
    await browser.pause(2000)


    const resultAct = await $('a[href="/nektos/act"]')
    await expect(resultAct).toHaveTextContaining('act')






    
    await browser.url('https://github.com/');
    await browser.pause(2000)
    
    const PricingHeader = await $('li:nth-child(4) a[href="/pricing"]')
    await PricingHeader.click()
    await browser.pause(2000)
    
    const titleGet = await $('h1.h2-mktg')
    await expect(titleGet).toHaveText("Get the complete developer platform.")
    
    const ThePlaceHeader = await $('a[href="#compare-features"]')
    await ThePlaceHeader.scrollIntoView()
    await browser.pause(2000)
    await ThePlaceHeader.click()
    await browser.pause(2000)
    
    const CompareHeader = await $('/html/body/div[1]/div[4]/main/div[4]/h1')
    await expect(CompareHeader).toHaveText("Compare features")
});
});
