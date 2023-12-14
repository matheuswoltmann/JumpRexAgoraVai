document.addEventListener("DOMContentLoaded", function() {
    const rankingData = [
        { posição: 1, nome: "João", pontuação: 3500 },
        { posição: 2, nome: "Maria", pontuação: 4000 },
        { posição: 3, nome: "Carlos", pontuação: 2800 }
        // Adicione mais objetos com dados de ranking conforme necessário
    ];

    const rankingTable = document.getElementById("ranking-body");

    rankingData.forEach(function(item) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.posição}</td>
            <td>${item.nome}</td>
            <td>${item.pontuação}</td>
        `;
        rankingTable.appendChild(row);
    });
});
