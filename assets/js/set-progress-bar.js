document.querySelectorAll('.progress-bar').forEach(function(progressBar) {
    var valueNow = progressBar.getAttribute('aria-valuenow');
    var valueMin = progressBar.getAttribute('aria-valuemin');
    var valueMax = progressBar.getAttribute('aria-valuemax');

    var percentage = (valueNow - valueMin) / (valueMax - valueMin) * 100;

    progressBar.style.minWidth = percentage + '%';
    progressBar.style.maxWidth = percentage + '%';
    progressBar.style.width = percentage + '%';
});
