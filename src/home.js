const renderHomePage = (() => {
    const contentContainer = document.querySelector("#content");
    const home = document.createElement("div");
    home.classList.add("tab-content");
    home.innerHTML = `<div id="home" class="active" data-tab-content>
    <div class="hero">
        <h1>Odin Restaurant!</h1>
        <p>The beginnings in 1998 were modest, as Le Planteur was hidden at the far end of a narrow and bumpy lane in Yangon. Finding the restaurant was almost like going on a treasure hunt.</p>
        <div class="btn-container">
            <a data-tab-target="#menu" class="order-now">Menu</a>
        </div>
    </div>
    </div>`;

    contentContainer.appendChild(home);
})();

export { renderHomePage };