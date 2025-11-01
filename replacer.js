function replaceImages() {
    chrome.storage.local.get(['ok']).then((result) => {
        let enabled = result['ok'];
        if (enabled == true) {
            for (const image of document.querySelectorAll('img')) {
                image.src = 'https://lh3.googleusercontent.com/d/18XofteYxRGj4_JBrwMETVE3cNhSjo32t'
                image.style.setProperty('image-rendering', 'pixelated')
                image.style.setProperty('object-fit', 'fill')
            }
            for (const image of document.querySelectorAll('iframe')) {
                image.src = 'https://lh3.googleusercontent.com/d/18XofteYxRGj4_JBrwMETVE3cNhSjo32t'
                image.style.setProperty('image-rendering', 'pixelated')
                image.style.setProperty('object-fit', 'fill')
            }
        }
    });
};

//i am so bad at js
const observer = new MutationObserver((mutations) => {
    replaceImages();
})
observer.observe(document.body, { childList: true, subtree: true });
replaceImages();