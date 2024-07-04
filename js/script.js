window.onload = function() {
    
    let userName = prompt("Masukkan nama Anda:");
    
    
    if (userName) {
        
        document.getElementById("welcome-message").textContent = `Hai ${userName}, Selamat Datang`;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('messageForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const nama = document.querySelector('input[name="nama"]').value;
        const tanggal = document.querySelector('input[name="tanggal"]').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const pesan = document.querySelector('input[name="pesan"]').value;

        document.getElementById('displayNama').textContent = nama;
        document.getElementById('displayTanggal').textContent = tanggal;
        document.getElementById('displayGender').textContent = gender;
        document.getElementById('displayPesan').textContent = pesan;
    });
});