const form=document.getElementById("signupForm")
 form.addEventListener("submit", (e)=>{
    e.preventDefault();
    // const fd= new FormData (form)
    // console.log(fd.enteries)

    const jsonObject= {
        name: form.name.value,
        email: form.email.value,
        gender:form.gender.value,
        DOB:form.DOB.value,
        password:form.password.value
    }
    console.log(jsonObject)

    fetch('http://localhost:3000/people', {
        method:"POST",
        body: JSON.stringify(json),
        headers:
        {"Content-Type":"application/json"}
    })
    Promise.then(response=>{
        console.log(response)
    })

    

 })