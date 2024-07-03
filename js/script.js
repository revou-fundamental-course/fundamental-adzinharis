window.onload = function() {
    
    let userName = prompt("Masukkan nama Anda:");
    
    
    if (userName) {
        
        document.getElementById("welcome-message").textContent = `Hai ${userName}, Selamat Datang`;
    }
}

