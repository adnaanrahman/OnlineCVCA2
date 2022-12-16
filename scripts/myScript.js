// Navbar Hover Effect
item.onmouseenter = function(){
    this.classList.add('hovered');
    }
    
    item.onmouseleave = function(){
    setTimeout(function(){
    this.classList.remove('hovered');
    }.bind(this),1000)
    }

// Contact Me Popup Window
function buttonSubmit() {
    alert("Form has been submitted");
}
