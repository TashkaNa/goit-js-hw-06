const form = document.querySelector(".login-form");

function onFormSubmit(e) { 
  e.preventDefault();
  const email = e.currentTarget.elements.email.value;
  const password = e.currentTarget.elements.password.value;
  const formData = {
    email,
    password,
  };
  if (email === '' || password === '') {
    return alert('Будь ласка коректно заповніть усі поля форми');
  } console.log(formData);
    e.currentTarget.reset();
}
form.addEventListener('submit', onFormSubmit)

  //#2 by use of ternary expression

//   email === '' || password === ''
//     ? alert('Будь ласка коректно заповніть усі поля форми')
//     : console.log(formData);
//   e.currentTarget.reset();
//}

  //#3 tip to remember - output data into console using new FormData and forEach()

  // const formData = new FormData(e.currentTarget);
  // formData.forEach((value, name) => { 
  //   console.log(name, value);
  //  })

