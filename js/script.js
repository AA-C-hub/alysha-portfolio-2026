document.addEventListener("DOMContentLoaded", function () {

    const tabs = document.querySelectorAll(".tab");
    const panel = document.getElementById("panel");

    // 1️⃣ Set each tab's original color from data-color
    tabs.forEach(tab => {
        tab.style.backgroundColor = tab.dataset.color;
    });

    // 2️⃣ Add click event to each tab
    tabs.forEach((tab, index) => {
        tab.addEventListener("click", function () {

            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove("active"));

            // Hide all content
            document.querySelectorAll(".project-content")
                .forEach(content => content.classList.remove("active"));

            // Activate clicked tab
            tab.classList.add("active");

            // Show matching content
            const content = document.getElementById("project-content" + (index + 1));
            if (content) {
                content.classList.add("active");
            }

            // Change panel color
            panel.style.backgroundColor = tab.dataset.color;
        });
    });

    // 3️⃣ Set initial panel color based on active tab
    const activeTab = document.querySelector(".tab.active");
    if (activeTab) {
        panel.style.backgroundColor = activeTab.dataset.color;
    }


    /* ----------------------------
       ACCORDION CAROUSEL CODE
    ---------------------------- */

    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(item => {
        item.addEventListener("click", () => {

            accordionItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");

        });
    });

    Fancybox.bind("[data-fancybox='gallery']", {
        on: {
            reveal: () => {
                document.querySelector('.carousel-track').style.animationPlayState = 'paused';
            },
            closing: () => {
                document.querySelector('.carousel-track').style.animationPlayState = 'running';
            }
        }
    });



});