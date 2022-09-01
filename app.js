let finish = false;
let firstStart= true;


let progressBar = document.querySelector(".circular-progress_active");
progressBar.style.background = `conic-gradient(
    #4d5bf9 ${0}deg,
    #cadcff ${0}deg
)`;


function hideBar(e){
    const checkbox = document.getElementById('box2');
    if(checkbox.checked){
        let progress= document.querySelector('.circular-progress_active');
        progress.className='circular-progress_none'
    }
    else{
        let progress= document.querySelector('.circular-progress_none');
        progress.className = 'circular-progress_active'
    }
}


function animationBar (){
    const checkbox = document.getElementById('box');
    if(checkbox.checked){
        let progressBar = document.querySelector(".circular-progress_active");
        let progressValue = 0;
        let progressEndValue = 100;
        let speed = 50;
        let progress = setInterval(() => {
            finish = false
            progressValue++;
            progressBar.style.background = `conic-gradient(
                #4d5bf9 ${progressValue * 3.6}deg,
                #cadcff ${progressValue * 3.6}deg
            )`;
            if (progressValue == progressEndValue) {
                clearInterval(progress);
                
            }
            }, speed);
            
        }
    else{ 
        progressBar.style.background = `conic-gradient(
            #4d5bf9 ${360}deg,
            #cadcff ${360}deg
        )`;   
    }
}


function moveBar(e){   
         let progressBar = document.querySelector(".circular-progress_active");
        let value = document.querySelector('.item-move__input').value
        let progressValue = +value;
        if(progressValue>100) progressValue = 100
        if(progressValue<0) progressBar=0
        progressBar.style.background = `conic-gradient(
            #4d5bf9 ${progressValue * 3.6}deg,
            #cadcff ${progressValue * 3.6}deg
        )`;

}

document.getElementById('box2').onchange = hideBar
document.getElementById('box').onchange = animationBar
document.querySelector('.item-move__input').onchange = moveBar
