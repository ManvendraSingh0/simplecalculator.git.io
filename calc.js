const buttons = document.querySelectorAll('button');
const screen = document.getElementById('screen');
for(let button of buttons )
{
    
    button.addEventListener('click',(e)=>{
        // console.log(button.innerText);
        if(screen.value=='invalid operation')
        {
            screen.value="";
        }
        const buttonText=button.innerText;
        if(buttonText=='C')
        {
            screen.value="";
        }
        else if(buttonText =='x')
        {
            screen.value+='*';
        }
        else if(buttonText=='=')
        {
            try{
                screen.value=eval(screen.value);
            }
            catch(e)
            {
                screen.value='invalid operation';
                // screen.value="";
                
            }
        }
        // console.log(e.target.innerText); same as above
        else
        screen.value+=buttonText;
        
    })
}