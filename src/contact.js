const renderContactPage = (() => {
    const contentContainer = document.querySelector("#content");
    const contact = document.createElement("div");
    contact.setAttribute("id", "contact");
    contact.setAttribute("data-tab-content", "");
    contact.innerHTML = `<div class="hero">
    <h1>Contact us</h1>
    </div>
    <div class="contact-container">
        <div class="info">
            <div class="address">
                <p>
                1024 Oakwood Ave<br />San
                Diego, CA 22434
                </p>
            </div>
            <div class="hours">
                <p>
                <span>Mon-Thurs:</span>8am-8pm<br /><span>Fri-Sun:</span
                >8am-11pm
                </p>
            </div>
            <div class="phone">
                <p>(222)-888 5555</p>
            </div>
        </div>
    </div>`;
    contentContainer.appendChild(contact);
})();

export { renderContactPage };