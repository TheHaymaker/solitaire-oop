(function(){
  var canvas = document.querySelector('.card-canvas');

  var ctx = canvas.getContext('2d');

  var img = new Image();

  img.src = 'https://raw.githubusercontent.com/TheHaymaker/solitaire-oop/master/assets/card-sprite.png';

  console.log(img);

  // Diamonds
  // Big Diamond on card
  ctx.drawImage(img, 160, 249, 138, 138, 5, 58, 30, 88);


  var img = new Image();

  img.src = 'https://raw.githubusercontent.com/TheHaymaker/solitaire-oop/master/assets/card-sprite.png';

  console.log(img);

  // Diamonds
  // Number on Card
  ctx.drawImage(img, 820,239, 55, 51, 3, 8, 12, 32);

  var img = new Image();

  img.src = 'https://raw.githubusercontent.com/TheHaymaker/solitaire-oop/master/assets/card-sprite.png';

  console.log(img);

  // Diamonds
  // small diamond on Card
  ctx.drawImage(img, 711, 319, 53, 49, 25, 8, 12, 32);

})();


// Next steps:

// Map out Sprite locations
// in an object / dictionary
// for easy reference in rendering functions later on
