
var sky = document.getElementsByClassName('clouds')[0];
    screenWidth = window.screen.width,
    boxHeight = 300,
    clouds = [],
    path = "M100.434,26.461c-2.076-6.246-7.969-10.752-14.911-10.752c-4.093,0-7.807,1.577-10.603,4.14C71.763,8.411,61.309,0,48.865,0C37.991,0,28.643,6.428,24.343,15.678c-2.577-2.158-5.893-3.459-9.517-3.459C6.828,12.219,0.308,18.547,0,26.471L100.434,26.461z";
var cloud = function (screenWidth, boxHeight) {
    var yPos = Math.random()*boxHeight,
        xPos = Math.random()*screenWidth,
        speed = Math.random(),
        direction = Math.random(),
        scale = speed,
        scaleString = 'scale(' + scale + ' ' + scale + ')',
        opacity = scale;



    var cloud = document.createElementNS("http://www.w3.org/2000/svg", 'path');//create SVG
    
    cloud.setAttribute('d', path);//set path
    cloud.setAttribute('fill', "white");//color
    cloud.setAttribute('fill-opacity', opacity);

    if(direction > 0.5){//set random direction
        speed = -speed;
    }

    sky.appendChild(cloud);//put clouds in the sky

    this.animate = function(){//animation method
        cloud.setAttribute('transform', 'translate('+ (xPos+=speed) +','+ yPos +')' + scaleString );
        if(xPos > screenWidth + 200){
            xPos = -200;
            yPos = Math.random()*boxHeight;
        }
        if(xPos < -200){
            xPos = screenWidth + 200;
            yPos = Math.random()*boxHeight;
        }
    };
};

var createClouds = function(quantity){
    for (var i = 0; i < quantity; i++) {//create clouds and put them inside array
        clouds.push(new cloud(screenWidth, boxHeight));
    }
};



var render = function(){//call the animate method from each cloud and control flow with requestAnimationFrame
    for (var i = 0; i < clouds.length; i++) {
        clouds[i].animate();

    }
    requestAnimationFrame(render);
};

createClouds(10);
render();