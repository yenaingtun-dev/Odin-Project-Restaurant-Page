const pageLoad = (() => {
    const contentContainer = document.querySelector("#content");
    const header = document.createElement("header");
    header.innerHTML = `
    <nav>
    <h2>Odin-Project-Restaurant-Page</h2>
    <ul class="links">
        <li data-tab-target="#home" class="tab red">Home</li>
        <li data-tab-target="#menu" class="tab">Menu</li>
        <li data-tab-target="#contact" class="tab">Contact</li>
    </ul>
    </nav>`;

    contentContainer.appendChild(header)
})();