describe( 'The edit Profile page', () => {
  
  it( 'search test in google', () => {
    browser.get( 'http://localhost:4200/existencia/');
    browser.sleep( 1000 );

   
    element( (By.className('btn'))).click();
    browser.sleep( 3000 );

    expect(element( (By.className('text-center'))).getText()).toEqual('Informe de Proyectos Existentes');
  } );


  it( 'search test in google', () => {
    browser.get( 'http://localhost:4200/agregar/');
    browser.sleep( 1000 );

   
    element( (By.id('name'))).sendKeys('Proyecto1');
    element( (By.id('tipo'))).sendKeys('Tipo22');
    
    browser.sleep( 3000 );
  } );

  

} );

