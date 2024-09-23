import HomePage from "../pages/homePage";
import ProductPage from "../pages/productPage";

describe('Registration Flow', () => {
    before(function () {
        cy.clearAllCookies();
        HomePage.registerAccount();
    });

it('Should Add Product to Cart and Logout ', function () {
    ProductPage.addProductsToCart();
})
})
