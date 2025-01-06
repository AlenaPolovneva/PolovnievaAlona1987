$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 3000,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  });

  const btn = document.querySelector ('.js-mobile-menu-btn')
  const menu = document.querySelector ('.js-menu')
  btn.addEventListener ('click', (e) =>{
    btn.classList.add ('active');
    menu.classList.add ('active');
  });
