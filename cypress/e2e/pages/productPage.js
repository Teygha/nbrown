import { productCart } from "../../fixtures/selectors";

class ProductPage {
    static addProductsToCart() {
      const validCouponText = 'BOOHOO10 has been applied to your order'
      cy.get(productCart.boohooLogo).click();
      cy.get(productCart.trendsCategory).click();
      cy.get(productCart.lacewigProduct).click();
      cy.get(productCart.productSize).click().wait(2000);
      cy.url().should('include', '/lace-wide-leg-drawstring-trouser/HZZ10533.html?color=105');
      cy.get(productCart.addtocartBtn).click().wait(2000);
      cy.get(productCart.boohooLogo).click();
      cy.get(productCart.trendsCategory).click();
      cy.get(productCart.petiteeyelashProduct).click();
      cy.get(productCart.productSize).click().wait(2000);
      cy.url().should('include', '/petite-eyelash-lace-column-maxi-skirt-/HZZ10743.html?color=105');
      cy.get(productCart.addtocartBtn).click().wait(2000);
      cy.get(productCart.cartBtn).click();
      cy.get(productCart.cartView).click();
      cy.get(productCart.checkoutBtn).click();
      cy.get(productCart.couponField).click().type('BOOHOO10');
      cy.get(productCart.couponValidation).click();
      cy.contains(validCouponText).should('be.visible');
      cy.get(productCart.boohooHome).click();
      cy.get(productCart.accountLogo).click();
      cy.get(productCart.logoutBtn).click();
      cy.url().should('include', '/login');
    }
  }
  
  export default ProductPage;
  