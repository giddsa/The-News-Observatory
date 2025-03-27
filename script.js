document.addEventListener("DOMContentLoaded", function () {
    fetch("news.json")
        .then(response => response.json())
        .then(newsData => {
            let newsContainer = document.getElementById("news");

            newsData.forEach(news => {
                let newsItem = document.createElement("div");
                newsItem.className = "news-item";
                newsItem.innerHTML = `
                    <h3>${news.title}</h3>
                    <p>${news.date}</p>
                    <img src="${news.image}" alt="${news.title}">
                    <p><a href="index2.html?id=${news.id}">اقرأ المزيد</a></p>
                `;
                newsContainer.appendChild(newsItem);
            });
        })
        .catch(error => {
            console.error("⚠️ خطأ في تحميل الأخبار:", error);
            document.getElementById("news").innerHTML = "<p>⚠️ تعذر تحميل الأخبار!</p>";
        });
});