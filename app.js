var sortPricing = function() {
    var carouselItems = Array.from(document.getElementsByClassName('carousel-item'));
    console.log("A. " + document.getElementsByClassName('carousel-item')[0].innerHTML);

    carouselItems.sort(comparePricing);
  
    var newCarouselInnerHTML = "";

    carouselItems.forEach(element => console.log(element));
    carouselItems.forEach(element => { newCarouselInnerHTML += element.outerHTML });

    var carouselContainer = document.getElementById('carousel-inner-id');
    carouselContainer.innerHTML = newCarouselInnerHTML;

  }

var sortRating = function() {
    var carouselItems = Array.from(document.getElementsByClassName('carousel-item'));
    console.log("A. " + document.getElementsByClassName('carousel-item')[0].innerHTML);

    carouselItems.sort(comparePricing);
  
    var newCarouselInnerHTML = "";

    carouselItems.forEach(element => console.log(element));
    carouselItems.forEach(element => { newCarouselInnerHTML += element.outerHTML });

    var carouselContainer = document.getElementById('carousel-inner-id');
    carouselContainer.innerHTML = newCarouselInnerHTML;

  }

var comparePricing = function(a, b) {

  var aPricing = parseInt(a.getElementsByClassName('pricing')[0].innerHTML.substring(1));
  var bPricing = parseInt(b.getElementsByClassName('pricing')[0].innerHTML.substring(1));

   if (aPricing < bPricing) {
    return -1;
   } else if (aPricing == bPricing) {
    return 0;
   } else {
    return 1;
   }
}

var compareRating = function(a, b) {

  var aRating = parseInt(a.getElementsByClassName('pricing')[0].innerHTML.substring(1));
  var bRating = parseInt(b.getElementsByClassName('pricing')[0].innerHTML.substring(1));

   if (aRating < bRating) {
    return -1;
   } else if (aPricing == bPricing) {
    return 0;
   } else {
    return 1;
   }
}

