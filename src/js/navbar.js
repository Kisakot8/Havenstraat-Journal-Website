function showByTag(tag) {
    all = document.getElementsByClassName('article-card');

    for (let index = 0; index < all.length; index++) {
        const article = all[index];
        if (!article.classList.contains(tag)) {
            article.style.display = 'none';
        } else { article.style.display = 'flex'; }
    }

    prevLink = document.querySelector('.current-section');
    prevLink.classList.remove('current-section');

    newLink = document.getElementById(`${tag}-link`);
    newLink.classList.add('current-section');
}

module.exports = showByTag;
