function openTab(num, tabElement) {
    // Remove active classes from tabs and contents
    document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
    document.querySelectorAll(".content").forEach(content => content.classList.remove("active"));

    // Add active class to clicked tab and content
    tabElement.classList.add("active");
    document.getElementById("content" + num).classList.add("active");

    // Change panel background color to tab's data-color
    const panel = document.getElementById("panel");
    const newColor = tabElement.getAttribute("data-color");
    panel.style.backgroundColor = newColor;
}