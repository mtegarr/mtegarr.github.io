let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active')
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


function SendMail() {
  var params = {
    from_name : document.getElementById("fullName").value,
    email : document.getElementById("email").value,
    phone_number : document.getElementById("phone").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value
  }
  emailjs.send("service_juomkym", "template_y0h1sik", params).then(function (res) {
    alert("success! " + res.status);
  })
}


const skillItems = document.querySelectorAll('.skill-item');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close');
const popupTitle = document.getElementById('popup-title');
const popupPercentage = document.getElementById('popup-percentage');

skillItems.forEach(skillItem => {
    skillItem.addEventListener('click', () => {
        const skillName = skillItem.querySelector('h2').textContent;
        const percentage = skillItem.getAttribute('data-percent');
        
        popupTitle.textContent = skillName;
        popupPercentage.textContent = `You master ${percentage}%`;

        popup.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Close pop-up when clicking outside the content
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
