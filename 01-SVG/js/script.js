function domForEach(selector, callback) {
    document.querySelectorAll(selector).forEach(callback);
  }
  function domOn(selector, event, callback, options) {
    domForEach(selector, ele => ele.addEventListener(event, callback, options));
  }
    
  domOn('.rectangle', 'click', evt => {
    //const ele = evt.currentTarget;
    evt.currentTarget.style.color = 'pink';
  });

/* let rectangle = document.getElementById('rectangle');

rectangle.addEventListener('click', function onClick(event) {
  event.target.style.backgroundColor = 'pink';
});*/


/* domOn('dl:not(.donut)', 'mouseover', evt => {
  evt.currentTarget.classList.add('highlight');
});
domOn('dl:not(.donut)', 'mouseout', evt => {
  evt.currentTarget.classList.remove('highlight');
}); */