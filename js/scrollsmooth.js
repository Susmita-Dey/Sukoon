const scroll_button = document.querySelector(".smooth-scroll");
for(let i of scroll_button)
{
    i.addEventListener('click',function(e){
        e.preventDefault();
        const target = this.getAttribute('href');
        const target_position = document.querySelector(target);
        target_position.scrollIntoView({scrollTop:target.scrollTop,behavior:'smooth'}); 
    });
} 
