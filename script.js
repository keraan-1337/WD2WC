function mailme() {
    var email_v = document.getElementById('email_entry').value;
    var name_v = document.getElementById('name_entry').value;

    Email.send({
        Host: "smtp.gmail.com",
        Username: "keraan.sadan@younglings.africa",
        Password: "i_wish_this_was_my_real_password_bro",
        To: email_v,
        From: "keraan.sadan@younglings.africa",
        Subject: "Website: Contact Made!!",
        Body: "Hi, This is an automated message",
    })
    .then(function (message) {
        alert("Mail has been sent successfully")
    });
}
