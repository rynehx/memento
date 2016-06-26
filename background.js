chrome.browserAction.onClicked.addListener(function(){

  var setBody = 'var body = document.getElementsByTagName("html")[0];';

  var lastChild = 'var LastChild = body.lastChild;';

  var createElement = 'var newElement = document.createElement("div");';
  var idElement = 'newElement.id = "memento";';

  var windowSize = 'var width = window.innerWidth-20; var height = window.innerHeight-20;';


  var style = ['newElement.style["background"] = "blue";',
  'newElement.style["border-style"] = "dashed";',
  'newElement.style["border-width"] = "10px";',
  'newElement.style["position"] = "fixed";',
  'newElement.style["height"] = height+"px";',
  'newElement.style["width"] = width+"px";',
  'newElement.style["z-index"] = 9001;',
  'newElement.style["cursor"] = "crosshair";'];

  var injectElement = 'body.insertBefore(newElement, LastChild);';

  var setup = setBody + lastChild + createElement + idElement;



  var styling = style.reduce(function(base,el){
    return base + el;
  });

  var inject = injectElement;

  var total = setup+ windowSize + styling + inject;

  chrome.tabs.executeScript({
      code: total
  });

  // chrome.tabs.executeScript(null,
  //     {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
  // window.close();
  //




});
