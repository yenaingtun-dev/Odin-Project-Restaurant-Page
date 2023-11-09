const renderMenuPage = (() => {
    const contentContainer = document.querySelector("#content");
    const menu = document.createElement("div");
    menu.setAttribute("id", "menu");
    menu.setAttribute("data-tab-content", "");
    menu.innerHTML = `
    <div class="menu-container">
    <div class="menu-item">
        <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8fDA%3D" alt="" />
        <div class="item-content">
            <h4>GOAT CHEESE</h4>
            <p>confit fig – Heirloom beetroot</p>
        </div>
    </div>
    <div class="menu-item">
        <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        <div class="item-content">
            <h4>PAN-SEARED HOKKAIDO SCALLOPS</h4>
            <p>green pea – chorizo</p>
        </div>
    </div>
    <div class="menu-item">
        <img src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8fDA%3D" alt="" />
        <div class="item-content">
            <h4>NGAPALI BAY LOBSTER RAVIOLI</h4>
            <p>double boiled consommé</p>
        </div>
    </div>
    </div>`;

    contentContainer.appendChild(menu);
})();

export { renderMenuPage };