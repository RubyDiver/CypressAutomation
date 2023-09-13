class HomePage {
    get_edit_box() {
        return cy.get('.form-control[name*="name"]')
    }

    get_two_way_data_binding() {
        return cy.get('input[name="name"]:nth-child(1)')
    }

    get_gender() {
        return cy.get('#exampleFormControlSelect1')
    }

    get_enterpreneaur() {
        return cy.get('input[value="option3"]')
    }

    get_shop_tab() {
        return cy.get(':nth-child(2) > .nav-link')
    }
}

export default HomePage