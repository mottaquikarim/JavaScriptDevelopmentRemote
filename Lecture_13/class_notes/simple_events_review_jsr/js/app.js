(function() { // protect the lemmings!
  /*
    write two event handlers: 
      one for mouseover and one for mouseenter
    on the class ".wrap"
    
    Each time one of the above events are triggered, 
    increment either `numMouseOver` or `numMouseEnter`
    
    Update `.data` class to reflect current state of both
    `numMouseOver` AND `numMouseEnter`
    
  */

  const wrapEl = document.querySelector('.wrap');
  const data = document.querySelector('.data')
  
  let numMouseover = 0;
  let numMouseEnter = 0;

  const render = () => {
    data.innerHTML = `
    <div>
      mouseover: ${numMouseover}
    </div>
    <div>
      mouseenter ${numMouseEnter}
    </div>
    `
  }

  /*
  const alwayCallRender = (element, eventName, callback) => {
    element.addEventListener(eventName, (e) => {
      callback(e);
      render();
    });
  }
  */

  const alwaysCallRender = (callback) => {
    return () => {
      callback();
      render();
    }
  }

  render();

  wrapEl.addEventListener('mouseover', e => {
    numMouseover++;
    render();
  });

  wrapEl.addEventListener('mouseenter', alwaysCallRender(e => {
    numMouseEnter++;
  }))
  // alwayCallRender(wrapEl, 'mouseenter', e => {
  //   numMouseEnter++;
  // })
  
})();
