describe('Open e-commerce catalogs', () => {
	const hotlineMainPageUrl = 'https://hotline.ua/';
	const ekUrl = 'https://ek.ua/ua/';

	it('open Hotline and verify page opened', () => {
    const inputPlaceholderText = 'Знайти товар, магазин, бренд';
    const catalogButtonText = 'Каталог';
    const logoAltText = 'Hotline - порівняти ціни в інтернет-магазинах України'; 

		cy.visit(hotlineMainPageUrl);
    cy.get('.header-catalog-button').should('be.visible').should('contain', catalogButtonText);
    cy.get('img').should('be.visible').should('have.attr', 'alt', logoAltText);
	});

	it('open EK and verify page opened', () => {
		cy.visit(ekUrl);
    cy.get('a[title="E-Katalog"]').should('be.visible');
    cy.get('#ek-search-form').should('be.visible');
    cy.get('.sp-carousel-viewport').should('be.visible');
	});
});
