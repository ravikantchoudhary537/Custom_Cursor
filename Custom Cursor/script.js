let cursor = document.getElementById('cursor');
let main = document.getElementById('main');
main.addEventListener('mousemove',function(e){
    cursor.style.left = e.x+"px";
    cursor.style.top = e.y+"px";
})