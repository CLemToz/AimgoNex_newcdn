/**
 * @Author: Your name
 * @Date:   2025-04-14 10:05:29
 * @Last Modified by:   Your name
 * @Last Modified time: 2025-05-02 23:55:35
 */
document.addEventListener("DOMContentLoaded", function() {
    const featuresContainer = document.querySelector(".features");
    const featureItems = document.querySelectorAll(".feat");

    featureItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            const topPosition = `${index * 100 / 4}%`;

            featuresContainer.style.setProperty("--filled-top-position", topPosition);

            featureItems.forEach(feat => feat.classList.remove("active-feat"));
            item.classList.add("active-feat");
        });
    });
});

// Active quote Style
const quotes = document.querySelectorAll('.quotes-group .quote');

quotes.forEach(quote => {
    quote.addEventListener('click', () => {
        quotes.forEach(quote => quote.classList.remove('active'));

        quote.classList.add('active');
    });
});
