const textoInput = document.getElementById('textoInput');
const gerarBtn = document.getElementById('gerarBtn');
const qrCodeDiv = document.getElementById('qrcode');
const downloadBtn = document.getElementById('downloadBtn');

// Clique no botão
gerarBtn.addEventListener('click', gerarQR);

// Também gera ao apertar Enter
textoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') gerarQR();
});

function gerarQR() {
    const conteudo = textoInput.value.trim();
    if (!conteudo) return;

    qrCodeDiv.innerHTML = '';
    downloadBtn.style.display = 'none';

    QRCode.toCanvas(conteudo, { width: 160 }, (erro, canvas) => {
        if (erro) return console.error(erro);
        qrCodeDiv.appendChild(canvas);

        downloadBtn.href = canvas.toDataURL('image/png');
        downloadBtn.download = 'qrcode.png';
        downloadBtn.style.display = 'block';
    });
}