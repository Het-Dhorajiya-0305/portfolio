const btn=document.getElementById('menu-btn');
const menubar=document.getElementById('navbar');

function shoemenu()
{
   if(menubar.style.top==='-100%')
   {
    menubar.style.top='90px';
   }
   else
   {
    menubar.style.top='-100%';
   }
}