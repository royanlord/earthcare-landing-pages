// window.addEventListener('scroll', event => {
//   let navLinks = document.querySelectorAll('nav ul li a');
//   let fromTop = window.scrollY;

//   navLinks.forEach(link => {
//     let section = document.querySelector(link.hash);

//     if (
//       section.offsetTop <= fromTop &&
//       section.offsetTop + section.offsetHeight > fromTop
//     ) {
//       link.classList.add('active');
//     } else {
//       link.classList.remove('active');
//     }
//   });
// });

// const menuItems = document.querySelectorAll('.menu a');

// menuItems.forEach(item => {
//   item.addEventListener('click', function() {
//     // Menghapus class 'active' pada menu sebelumnya
//     const currentActive = document.querySelector('.menu a.active');
//     currentActive.classList.remove('active');

//     // Menambahkan class 'active' pada menu yang sedang diklik
//     this.classList.add('active');
//   });
// });

// sticky nav
var nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if(document.documentElement.scrollTop > 450) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky")
  }
})


// scrollspy active nav menu
let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav li a");

window.onscroll = () => {
    section.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");
      
      if(top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector("nav li a[href*=" + id + "]").classList.add("active");
        })
      }
    })
}






function handleGetFormData () {
  const name = document.getElementById("name").value;
  const city = document.getElementById("city").value;
  const email = document.getElementById("email").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;

  return obj = {
    name,
    city,
    email,
    zipCode,
    status
  }
}

function isNumber(zipCode) {
  return isNaN(zipCode) ? false : true;
}

function checkboxIsChecked() {
  return document.getElementById("status").checked;
}

function validateFormData(obj) {
  if(obj !== null && isNumber(obj.zipCode) && checkboxIsChecked()) {
    return true;
  }
  return false;
}

// const btnSubmit = document.getElementById("submit-form");
// btnSubmit.addEventListener('click', function submit(event) {
//   event.preventDefault();
//   if(validateFormData(handleGetFormData())) {
//     document.getElementById("warning").innerText = " "
//   } else {
//     document.getElementById("warning").innerHTML = "<i class='fa-solid fa-circle-exclamation'></i> Periksa form anda sekali lagi";
//   }
// })

// const form = document.getElementById("form-contact");
// const btnSubmit = document.getElementById("submit-form");

// function submit(event) {
//   event.preventDefault();
//   event.stopPropagation();
//   if(validateFormData(handleGetFormData())) {
//     document.getElementById("warning").innerText = " "
//   } else {
//     document.getElementById("warning").innerHTML = "<i class='fa-solid fa-circle-exclamation'></i> Periksa form anda sekali lagi";
//   }
// }

// function disableRefresh(event) {
//   event.preventDefault();
//   event.stopPropagation()
// }

// form.addEventListener('submit', submit, true);
// function submit() {
//   if(validateFormData(handleGetFormData())) {
//     document.getElementById("warning").innerText = " "
//   } else {
//     document.getElementById("warning").innerHTML = "<i class='fa-solid fa-circle-exclamation'></i> Periksa form anda sekali lagi";
//   }
// }

// document.getElementById("submit-form").addEventListener("click", function(event){
//   event.preventDefault();
//   submit();
// });

// btnSubmit.addEventListener('click', submit, true);


function submit() {
  const props = handleGetFormData();
  const hasil = validateFormData(props);
  if (hasil == false) {
    document.getElementById("warning").innerHTML = "<i class='fa-solid fa-circle-exclamation'></i> Periksa form anda sekali lagi";
  } else {
    document.getElementById("warning").innerText = "";
    document.getElementById("name").value = "";
    document.getElementById("city").value = "";
    document.getElementById("email").value = "";
    document.getElementById("zip-code").value = "";
    document.getElementById("status").checked = "";
  }
}

document.getElementById("submit-form").addEventListener("click", function(event) {
  event.preventDefault();
  submit();
});