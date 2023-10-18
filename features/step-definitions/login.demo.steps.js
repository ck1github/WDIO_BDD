const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^User is on login page$/, async() => {
    await browser.url('https://the-internet.herokuapp.com/login')
});
// When(/^User enter username and password$/, async() => {
//     await $('#username').setValues('tomsmith')
//     await $('#password').setValues('SuperSecretPassword!')
// });

When(/^User enters (.*) and (.*)$/, async(username, password) => {
   await $('#username').setValue(username)
    await $('#password').setValue(password)
});

When(/^Click on login button$/, async() => {
    await $('button[type="submit"]').click()
});

// Then(/^User is navigate to the home page$/, async() => {
//     await expect($('flash')).toHaveTextContaining('You logged into a secure area!')
// });

Then(/^This (.*) is display$/, async(message) => {
	await expect($('#flash')).toHaveTextContaining(message)
});