function mailme() {
    var email_v = document.getElementById('email_entry').value;
    var name_v = document.getElementById('name_entry').value;

    Email.send({
        Host: "smtp.gmail.com",
        Username: "john.steven8081@gmail.com",
        Password: "mrselassie@8081",
        To: email_v,
        From: "john.steven8081@gmail.com",
        Subject: "Website: Contact Made!!",
        Body: "Hi, This is an automated message",
    })
    .then(function (message) {
        alert("Mail has been sent successfully")
    });
}