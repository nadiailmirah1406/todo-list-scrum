document.getElementById("daftarTugas").addEventListener("dblclick", function(event) {
    if (event.target.tagName === "LI") {
        event.target.remove();
    }
});