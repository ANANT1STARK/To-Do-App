// const { response } = require("express");

const sure = (id)=>{
  let chechbox = document.getElementById(id);
  let bar =  chechbox.nextElementSibling
  
//   console.log(bar)
 
  if (chechbox.checked==true){
    let user_final = confirm("Are you sure did you done it ? ")
    if (user_final==true){
        bar.classList.toggle('text-decoration-line-through')
            // chechbox.remove()
            // bar.remove()
            chechbox.setAttribute('disabled',true)
    }
  }
}


const delete_it = (id)=>{
    let user_final = confirm('Are you sure\nDid you want to remove that goal?')
    if (user_final==true){
      id.remove()
    }
}


const url = document.getElementById('url').textContent;
console.log(url)
async function delete_goal(id) {
  alert('Refresh the page to see conflicts : >')
  
  
  const response = await fetch(`/To-Do/${url}`, {
      method: 'DELETE',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({id_ :id})
    
    });

  // Awaiting for the resource to be deleted
  


  }
 