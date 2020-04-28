function videoClickHandler(videoElement, inputElement) {
    videoElement.addEventListener('click', function() {
        let inputs = Array.from(document.getElementsByName('zoomCheck'));
        for (input of inputs) {
            if (input === inputElement) {
                input.checked = true;
            } else {
                input.checked = false;
                input.parentNode.style.display = 'none';
            }
        }
        document.getElementById('closeButton').parentNode.style.display = 'grid';
        document.getElementById('brightness').value = "100";
        document.getElementById('contrast').value = "100";
        const container = document.getElementById('container');
        container.style.gridTemplateColumns = '1fr';
        container.style.gridTemplateRows = '1fr';
        document.getElementById('volume-plot').style.background = 'linear-gradient(90deg, lightblue 0%, white 0%)';
    });
}

function applyOnVideo(property, valueInPercents) {
    let inputs = Array.from(document.getElementsByName('zoomCheck'));
    for (input of inputs) {
        if (input.checked) {
            input.parentNode.style.filter = property + "(" + valueInPercents + "%)";
            input.parentNode.style.webkitFilter = property + "(" + valueInPercents + "%)";
        }
    }
}

function applyBrightness(newValue) {
    applyOnVideo('brightness', newValue);
}

function applyContrast(newValue) {
    applyOnVideo('contrast', newValue);
}

function resetFilterProperties(input) {
    input.parentNode.style.filter = "brightness(100%)";
    input.parentNode.style.webkitFilter = "brightness(100%)";
    input.parentNode.style.filter = "contrast(100%)";
    input.parentNode.style.webkitFilter = "contrast(100%)";
}

function clickAllCamerasButton(btnElement) {
    btnElement.addEventListener('click', function() {
        let inputs = Array.from(document.getElementsByName('zoomCheck'));
        for (input of inputs) {
            input.checked = false;
            input.parentNode.style.display = 'block';
            resetFilterProperties(input);
        }
        btnElement.parentNode.style.display = 'none';
        const container = document.getElementById('container');
        container.style.gridTemplateColumns = '1fr 1fr';
        container.style.gridTemplateRows = '1fr 1fr';
        document.getElementById('video-1').muted = true;
        document.getElementById('video-2').muted = true;
        document.getElementById('video-3').muted = true;
        document.getElementById('video-4').muted = true;
    });
}