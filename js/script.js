


const accordionitems = document.querySelectorAll(".accordion-item");


accordionitems.forEach(item => {
    const title = item.querySelector(".accordion-title");
    const content = item.querySelector(".accordion-content");

    title.addEventListener('click', () => {
        for(var i = 0; 1 < accordionitems.length; i++){

            if(accordionitems[i] != item){
                accordionitems[i].classList.remove('active');
            }else{
                item.classList.toggle('active');

            }

        }
    })
});



