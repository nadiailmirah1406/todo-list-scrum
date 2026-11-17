const daftarTugasUntukHitung = document.getElementById("daftarTugas");
const jumlahTugas = document.getElementById("jumlahTugas");

function perbaruiJumlahTugas() {
    const totalTugas = daftarTugasUntukHitung.children.length;
    jumlahTugas.textContent = "Jumlah tugas: " + totalTugas;
}

perbaruiJumlahTugas();

const pengamatTugas = new MutationObserver(perbaruiJumlahTugas);

pengamatTugas.observe(daftarTugasUntukHitung, {
    childList: true
});