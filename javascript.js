const form = document.getElementById('form1');

form.noValidate = true;
form.addEventListener('submit', validateForm);


function validateForm(e){
    const form = e.target;
    
    if(form.checkValidity()){
        console.log("valid");
    }
    else{
        e.preventDefault();
        let formEl = [...form.elements].slice(0,-1);

        formEl.forEach(el => {
            if(el.checkValidity()){
                let parent = el.parentElement;
                let errorEl = parent.querySelector('.error-txt');
                
                parent.classList.add('success');
                parent.classList.remove('error');
                errorEl.innerText = "";
            }
            else{
                let parent = el.parentElement;
                let errorEl = parent.querySelector('.error-txt');

                console.log(el.validationMessage);

                parent.classList.add('error');
                parent.classList.remove('success');
                errorEl.innerText = el.validationMessage;
            }
        });
    }
}


