item.onmouseenter = function(){
    this.classList.add('hovered');
    }
    
    item.onmouseleave = function(){
    setTimeout(function(){
    this.classList.remove('hovered');
    }.bind(this),1000)
    }