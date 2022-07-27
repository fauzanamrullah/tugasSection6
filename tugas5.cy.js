/// <reference types="cypress" />

describe('Login Test', () => {
    before(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('.login_logo').should('be.visible')
        cy.get('.login_wrapper').should('be.visible')
    })

    it('Should try to login with invalid data', () => {
        cy.get('.login_wrapper-inner').should('be.visible')
        cy.get('#user-name').type('asd')
        cy.get('#password').type('dsa')
        cy.contains('Login').click()
    })

    it('Should display error massage', () => {
        cy.get('h3').should('be.visible').and('contain.text', 'Epic sadface: Username and password do not match any user in this service')
    })

    it('should login to application with valid data', () => {
        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)
            cy.get('#password').clear()
            cy.get('#password').type(password)
            cy.get('#login-button').click()
        })
    })

    it('System should be able direct to main page', () => {
        cy.url().should('include', 'inventory.html')
    })
})

describe('Product click test', () => {
    it('Should be able to click product from product name', () => {
        cy.get('#item_4_title_link').click()

        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user-name').type(username)
            cy.get('#password').type(password)
            cy.get('#login-button').click()
        })

        cy.get('#item_4_title_link').click()
    })

    it('System should be able direct to product page', () => {
        cy.url().should('include', 'inventory-item.html?id=4')
        cy.get('img').should('be.visible')
        cy.get('.inventory_details_desc_container').should('be.visible')
    })

    it('back to product menu', () => {
        cy.get('#back-to-products').click()

        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user-name').type(username)
            cy.get('#password').type(password)
            cy.get('#login-button').click()
        })
    })

    it('System should be able direct to main page', () => {
        cy.url().should('include', 'inventory.html')
    })

    it('Should be able to click product from image', () => {
        cy.get('#item_4_img_link').click()

        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user-name').type(username)
            cy.get('#password').type(password)
            cy.get('#login-button').click()
        })

        cy.get('#item_4_img_link').click()
    })

    it('System should be able direct to product page', () => {
        cy.url().should('include', 'inventory-item.html?id=4')
        cy.get('img').should('be.visible')
        cy.get('.inventory_details_desc_container').should('be.visible')
    })

    it('back to product menu', () => {
        cy.get('#back-to-products').click()

        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user-name').type(username)
            cy.get('#password').type(password)
            cy.get('#login-button').click()
        })
    })

    it('System should be able direct to main page', () => {
        cy.url().should('include', 'inventory.html')
    })
})

describe('Cart system test', () => {

    it('Should be able to input item to cart', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click()
    })

    it('Should be able go to cart page', () => {
        cy.get('.shopping_cart_link').click()

        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user-name').type(username)
            cy.get('#password').type(password)
            cy.get('#login-button').click()
        })

        cy.get('#add-to-cart-sauce-labs-bike-light').click()

        cy.get('#add-to-cart-sauce-labs-backpack').click()

        cy.get('.shopping_cart_link').click()
    })

    it('System should be able direct to cart page and can see the item', () => {
        cy.url().should('include', 'cart.html')
        cy.get('.title').should('be.visible').and('include.text', 'Your Cart')
        cy.get('.cart_item').should('be.visible')
    })

    it('Should be able to remove item from cart page', () => {
        cy.get('#remove-sauce-labs-backpack').click()
    })

    it('Should be able to continue shopping', () => {
        cy.get('#continue-shopping').click()

        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user-name').type(username)
            cy.get('#password').type(password)
            cy.get('#login-button').click()
        })
    })

    it('System should be able direct to main page', () => {
        cy.url().should('include', 'inventory.html')
    })
})

describe('Logout test', () => {
    it('Should be able to logout', () => {
        cy.get('#react-burger-menu-btn').click()
        cy.get('.bm-menu').should('be.visible')
        cy.get('#logout_sidebar_link').click()
    })

    it('System should be able to see login page', () => {
        cy.get('.login_logo').should('be.visible')
        cy.get('.login_wrapper').should('be.visible')
    })
})