// ==========================================
// TOOLNEST SEARCH
// ==========================================

const toolSearch = document.getElementById("toolSearch");
const searchButton = document.getElementById("searchButton");
const toolCards = document.querySelectorAll(".tool-card");
const toolsGrid = document.getElementById("toolsGrid");

function searchTools() {

    if (!toolSearch || !toolsGrid) return;

    const searchText =
        toolSearch.value.toLowerCase().trim();

    let found = false;

    toolCards.forEach(function(card) {

        const toolName =
            (card.getAttribute("data-tool") || "").toLowerCase();

        const toolText =
            card.textContent.toLowerCase();

        const matches =
            searchText === "" ||
            toolName.includes(searchText) ||
            toolText.includes(searchText);

        if (matches) {

            card.style.display = "flex";
            found = true;

        } else {

            card.style.display = "none";

        }

    });

    // Remove old "no results" message
    const oldMessage =
        document.getElementById("noResults");

    if (oldMessage) {
        oldMessage.remove();
    }

    // Show message when nothing is found
    if (!found && searchText !== "") {

        const message =
            document.createElement("p");

        message.id = "noResults";

        message.textContent =
            "No tools found. Try another search.";

        message.style.gridColumn = "1 / -1";
        message.style.textAlign = "center";
        message.style.padding = "30px";
        message.style.color = "#667085";

        toolsGrid.appendChild(message);
    }

}


// Search button
if (searchButton) {

    searchButton.addEventListener(
        "click",
        searchTools
    );

}


// Search while typing
if (toolSearch) {

    toolSearch.addEventListener(
        "input",
        searchTools
    );


    // Search when pressing Enter
    toolSearch.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                event.preventDefault();

                searchTools();

                // Move user to the tools section
                if (toolsGrid) {

                    toolsGrid.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        }
    );

}


// ==========================================
// MOBILE MENU
// ==========================================

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.querySelector(".nav-links");


if (menuButton && navLinks) {

    // OPEN / CLOSE MENU
    menuButton.addEventListener(
        "click",
        function() {

            navLinks.classList.toggle(
                "menu-open"
            );

        }
    );


    // NAVIGATION LINKS
    const menuItems =
        navLinks.querySelectorAll("a");


    menuItems.forEach(function(link) {

        link.addEventListener(
            "click",
            function(event) {

                const target =
                    link.getAttribute("href");


                // Handle homepage section links
                if (
                    target &&
                    target.startsWith("#")
                ) {

                    event.preventDefault();

                    const section =
                        document.querySelector(target);


                    if (section) {

                        section.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }


                // Close mobile menu
                navLinks.classList.remove(
                    "menu-open"
                );

            }
        );

    });

}


// ==========================================
// BACK TO TOP BUTTON
// ==========================================

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}