const form = document.getElementsByTagName('form')[0];

form.addEventListener('submit', (event) => {
    let valid = 1;
    let error_text = '';
    const full_name = document.querySelector("#full_name").value;
    if (full_name == '') {
        error_text += 'enter full name </br>';
        valid = 0;
    }
    console.log(full_name)
    const email = document.querySelector("#email").value;
    if (email == '') {
        error_text += 'enter your email </br>';
        valid = 0;
    }
    console.log(email);
    const phone_number = document.querySelector("#phone_number").value;
    if (full_name == '') {
        error_text += 'enter your phone number </br>';
        valid = 0;
    }
    console.log(phone_number)
    const gendervalues = document.getElementsByName('gender');

    let gender = '';
    for (let i = 0; i < gendervalues.length; i++) {
        if (gendervalues[i].checked) {
            gender = gendervalues[i].value
        }
    }
    console.log(gender);
    if (gender == '') {
        error_text += 'enter your gender </br>';
        valid = 0;
    }
    const address = document.querySelector("#address").value;
    if (address == '') {
        error_text += 'enter your address </br>';
        valid = 0;
    }
    console.log(address);
    const pincode = document.querySelector("#pincode").value;
    if (pincode == '') {
        error_text += 'enter your pincode </br>';
        valid = 0;
    }
    console.log(pincode);
    const password = document.querySelector("#password").value;
    if (password == '') {
        error_text += 'enter  your password </br>';
        valid = 0;
    }
    console.log(password)
    const confirm_password = document.querySelector("#confirm_password").value;
    if (confirm_password == '' ) {
        error_text += 'enter confirm password </br>';
        valid = 0;
    }
    console.log(confirm_password);
    const i_agree = document.querySelector("#i_agree").checked ? document.querySelector("#i_agree").value : '';
    console.log(i_agree);
    if (i_agree == '') {
        error_text += 'you have not checked Agreement </br>';
        valid = 0;
    }
    if(valid ==0){
        document.querySelector(".error_msg").style.display='block';
        document.querySelector(".error_msg").innerHTML=error_text;
        document.querySelector(".error_msg").style.color="#ff0000";
    }
    if(valid ==1){
        document.querySelector("#show_name").innerText =full_name;
        document.querySelector("#show_email").innerText =email;
        document.querySelector("#show_phone_number").innerText =phone_number;
        document.querySelector("#show_gender").innerText =gender;
        document.querySelector("#show_address").innerText =address;
        document.querySelector("#show_pincode").innerText =pincode;
        document.querySelector("#show_password").innerText =password;
        document.querySelector("#show_confirmpassword").innerText =confirm_password;
        document.querySelector("#show_checked").innerText =i_agree;
    }
    event.preventDefault();
})