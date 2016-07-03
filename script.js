

if(document.getElementById("memento")){
  document.getElementById("memento").remove();
}else{

  var body = document.getElementsByTagName("html")[0];
  var LastChild = body.lastChild;

  var frameTopLeft;
  var frameBottomRight;

  var getCoord = function(tl,br){//sets the top left and bottom right
    var x1,x2,y1,y2;
    if(tl[0]<br[0]){ x1=tl[0];x2=br[0]; }else{ x1=br[0];x2=tl[0]; }
    if(tl[1]<br[1]){ y1=tl[1];y2=br[1]; }else{ y1=br[1];y2=tl[1]; }
    return [[x1,y1],[x2,y2]];
  };


  var createFrame = function(firstCoord,secondCoord){
    if(!document.getElementById("snap-frame")){

      var coord = getCoord(firstCoord,secondCoord);
      var borderWidth = 2;
      var frame = document.createElement("div");
      frame.id = "snap-frame";
      frame.style['width'] = coord[1][0] - coord[0][0] + "px";
      frame.style['height'] = coord[1][1] - coord[0][1] + "px";
      frame.style['position'] = "fixed";
      frame.style['top'] = coord[0][1]-borderWidth + "px";
      frame.style['left'] = coord[0][0]-borderWidth + "px";
      frame.style['border-style'] = "dashed";
      frame.style['border-width'] = borderWidth + "px";
      content.appendChild(frame);
    }
  };




  //content
  var content = document.createElement("div");
  content.id = "memento";
  content.style["display"] = "flex";
  content.style["justify-content"] = "center";
  content.style["align-items"] = "center";
  content.style["position"] = "fixed";
  content.style["height"] = "100%";
  content.style["width"] = "100%";
  content.style["z-index"] = 2147483647;
  content.style["cursor"] = "crosshair";

  //background
  var background = document.createElement("div");
  background.id = "memento-background";
  background.style["height"] = "100%";
  background.style["width"] = "100%";
  background.style["z-index"] = 2147483647;
  background.style["background"] = "black";
  background.style["opacity"] = "0.1";
  content.appendChild(background);



  content.addEventListener('mousedown', function(ev){
      //on mouse down create a frame element
      console.log(ev);
      frameTopLeft = [ev.clientX, ev.clientY];
  });

  content.addEventListener('mouseup', function(ev){
      //on mouse down create a frame element
      console.log(ev);
      frameBottomRight = [ev.clientX, ev.clientY,];
      createFrame(frameTopLeft,frameBottomRight);

  });
  //

  //frame


  //





  // var frame = document.createElement("iframe");
  // frame.id = "memento-frame";
  // // var width = window.outerWidth;
  // // var height = window.outerHeight;
  // frame.src = "https://mementochrome.herokuapp.com/";
  // frame.style["display"] = "flex";
  // frame.style["justify-content"] = "center";
  // frame.style["align-items"] = "center";
  // frame.style["background"] = "black";
  // frame.style["border-style"] = "dashed";
  // frame.style["position"] = "fixed";
  // frame.style["height"] = "100%";
  // frame.style["width"] = "100%";
  // frame.style["z-index"] = 2147483647;
  // frame.style["opacity"] = "1";



  body.insertBefore(content,LastChild);
}
