replaceToggle = document.querySelector('#replacetoggle')

chrome.storage.local.get(['ok']).then((result) => {
    replaceToggle.checked = result['ok'];
})

replaceToggle.addEventListener('change', function() {
    chrome.storage.local.set({'ok': this.checked})
});