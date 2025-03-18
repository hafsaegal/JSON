const form=document.getElementById("signupForm");
const postForm=document.querySelector("#post-form" )
const imageSelector= document.querySelector("input[type='file']")
const imagePreview= document.querySelector("#img-preview")
 form.addEventListener("submit", (e)=>{})
 
    //e.preventDefault();
console.log(imageSelector)
    
    imageSelector.addEventListener("change",(e)=>{
        console.log(e.target.files)
        //file reader:
        const file=e.target.files[0];
        const fr = new FileReader();

        fr.onload= (evt)=> {
            imagePreview.src= evt.target.result
        }
        fr.readAsDataURL(file)
    })

    postForm.addEventListener("submit", (e) => {});
    // const fd= new FormData (form)
    // console.log(fd.enteries)

//     const jsonObject= {
//         name: form.name.value,
//         email: form.email.value,
//         gender:form.gender.value,
//         DOB:form.DOB.value,
//         password:form.password.value
//     }
//     console.log(jsonObject)


//     data is fetched from endpoint 
//     fetch('http://localhost:3000/people', {
//         method:"POST",
//         body: JSON.stringify(json),
//         headers:
//         {"Content-Type":"application/json"}
//     })
//     Promise.then(response=>{
//         console.log(response)
//     })

    

//  })