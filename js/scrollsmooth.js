const scroll_button=document.getElementsByClassName(".smooth-scroll");
for(let i of scroll_button)
{
    i.addEventListener('click',function(e){
        e.preventDefault();
        const target=this.getAttribute('href');
        const target_position=document.querySelector(target);
        console.log(target_position)
        target_position.scrollIntoView({scrollTop:target.scrollTop,behavior:'smooth'}); 







    });
} 