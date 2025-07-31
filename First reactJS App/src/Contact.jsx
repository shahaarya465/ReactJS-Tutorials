function Contact() {
    var phone = 1234567890;
    var email = "shahaarya465@gmail.com";
    var contactStyle = { color: 'black', backgroundColor: 'lightblue' };
    return (
        <>
            <h1>Contact</h1>
            Phone is {phone} <br />
            Email is {email}
            <p style={contactStyle}>info page</p>
        </>
    );
}

export default Contact;