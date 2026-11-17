const inputTugas = document.getElementById("inputTugas"); 	
const btnTambah = document.getElementById("btnTambah");    
const daftarTugas = document.getElementById("daftarTugas");

btnTambah.addEventListener("click", function() { 
    const teksTugas = inputTugas.value.trim();

    if (teksTugas === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = teksTugas;

    li.addEventListener("click", function() {
        li.classList.toggle("selesai");
    });

    daftarTugas.appendChild(li);
    inputTugas.value = "";
});