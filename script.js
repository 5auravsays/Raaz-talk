// 🌸 Saurav Poetry Website

console.log("Website Loaded");

// साल अपने-आप अपडेट होगा (अगर footer में id="year" हो)
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}
