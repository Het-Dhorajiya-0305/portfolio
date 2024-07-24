const btn=document.getElementById('open-btn');
const menubar=document.getElementById('navbar');

menubar.style.left='-100%';

btn.addEventListener('click',showmenu);

function showmenu()
{
   console.log("hello");
   if(menubar.style.left==='-100%')
   {
    menubar.style.left='0px';
   }
   else
   {
    menubar.style.left='-100%';
   }
}