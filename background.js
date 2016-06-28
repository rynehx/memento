chrome.browserAction.onClicked.addListener(function(){

  var check ='if(document.getElementById("memento")){document.getElementById("memento").remove();}else{';

  var setBody = 'var body = document.getElementsByTagName("html")[0];';
  var lastChild = 'var LastChild = body.lastChild;';
  var createElement = 'var newElement = document.createElement("iframe");';
  var idElement = 'newElement.id = "memento";';
  var windowSize = 'var width = window.innerWidth; var height = window.innerHeight;';


  var style = [
  'newElement.innerHTML = "Hello";',
  'newElement.src = "https://bravaudio.herokuapp.com/#/";',
  'newElement.style["font-size"] = "80px";',
  'newElement.style["color"] = "white";',
  'newElement.style["display"] = "flex";',
  'newElement.style["justify-content"] = "center";',
  'newElement.style["align-items"] = "center";',
  'newElement.style["background"] = "black";',
  'newElement.style["border-style"] = "dashed";',
  'newElement.style["border-width"] = "1px";',
  'newElement.style["position"] = "fixed";',
  'newElement.style["height"] = height+"px";',
  'newElement.style["width"] = width+"px";',
  'newElement.style["z-index"] = 2147483647;',
  'newElement.style["cursor"] = "crosshair";',
  'newElement.style["opacity"] = "0.8";'];

  var injectElement = 'body.insertBefore(newElement, LastChild);';

  var setup = setBody + lastChild + createElement + idElement;



  var styling = style.reduce(function(base,el){
    return base + el;
  });

  var inject = injectElement;

  var total = check + setup+ windowSize + styling + inject+"}";

  chrome.tabs.executeScript({code: total});


});
