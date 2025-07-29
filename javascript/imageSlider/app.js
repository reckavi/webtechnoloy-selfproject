const container = document.querySelector('.container');
const btns = document.querySelectorAll('.btn')
const imgList = ["1","2","3","4"]

let index=0
btns.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.classList.contains('btn-left')){
            index--;
            if(index<0){
                index = imgList.length-1;
            }
            container.style.backgroundImage = `url("${imgList[index]}.jpg")`;
            container.style.backgroundPosition = 'center';
            container.style.backgroundSize = 'cover';
            container.style.backgroundAttachment = 'fixed';
        }
        else{
            index++;
            if(index===imgList.length){
                index = 0;
            }
            container.style.backgroundImage= `url("${imgList[index]}.jpg")`;
            container.style.backgroundPosition = 'center';
            container.style.backgroundSize = 'cover';
            container.style.backgroundAttachment = 'fixed';

        }
    })
})