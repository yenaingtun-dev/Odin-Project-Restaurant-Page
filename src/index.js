import { _pageLoad } from "./pageload"
import { _renderHomePage } from "./home";
import { _renderMenuPage } from "./menu";
import { _renderContactPage } from "./contact";

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

// Navigation tabs
tabs.forEach((tab) =>
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove("active");
        });
        tabs.forEach((tab) => {
            tab.classList.remove("red");
        });
        tab.classList.add("red");
        target.classList.add("active");
    })
);