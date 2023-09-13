class ProductPage {
    get_checkout_button() {
        return cy.get('a.btn.btn-primary')
    }
}

export default ProductPage