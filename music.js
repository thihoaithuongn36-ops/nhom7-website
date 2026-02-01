<!-- music.js -->
<script>
window.onload = function () {
    let music = document.getElementById("bgMusic");

    if (localStorage.getItem("musicPlaying") === "true") {
        music.play();
    }
};

function toggleMusic() {
    let music = document.getElementById("bgMusic");
    if (music.paused) {
        music.play();
        localStorage.setItem("musicPlaying", "true");
    } else {
        music.pause();
        localStorage.setItem("musicPlaying", "false");
    }
}
</script>
