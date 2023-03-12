function autoplay() {
    var t = setTimeout(function(){
        var button = document.querySelector('[title="Play"]') || false;
        if (button) {
            console.log('Click', button)
            button.click()
        }
    }, 999)
}
document.addEventListener('DOMContentLoaded', (event) => {
    autoplay()
})