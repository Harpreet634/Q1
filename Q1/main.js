/* When the button displayed in the browser is clicked, the following should happen:
1.) the background colour of the page changes to  #BADA55
2.) an H1 is created and added to the page that contains the text ‘Thanks for a fun semester!”
3.) The button text changes to clicked 
4.) Good luck on your final exam is removed from the page. 
*/


let btn = document.querySelector('button');
let body=document.querySelector('body');

btn.onclick= function(){
    //1.) the background colour of the page changes to  #BADA55
    body.style.backgroundColor='#BADA55';
    //an H1 is created and added to the page that contains the text ‘Thanks for a fun semester!”
    let h1=document.createElement('h1');
    h1.innerHTML="Thanks for a fun semester!" ;
    body.appendChild(h1);
    //3.) The button text changes to clicked 
    btn.textContent="Clicked";
    //Good luck on your final exam is removed from the page. 
    let p =document.querySelector('p');
    p.remove();
}