document.addEventListener("DOMContentLoaded", () => {
    const currentYearSpan = document.getElementById("currentyear");
    const currentYear = new Date().getFullYear();
    const lastModifiedParagraph = document.getElementById("lastModified");
    currentYearSpan.textContent = "©" + currentYear + " Doug Butler USA";
    lastModifiedParagraph.textContent = "Last Modification: " + document.lastModified;
});
