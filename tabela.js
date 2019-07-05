function renderTabela(matriz){
    let html = "<table>";

    html += "<tr>";

    html += "<th>a1</th>";
    html += "<th>a22</th>";
    html += "<th>a3</th>";

    html += "</tr>";

    for(let i = 0; i < matriz.length; i++){
        html += "<tr>";
        html += "<td>" + matriz[i][j] + "</td>";
        for(let j = 0; j < matriz[0].length; j++){
            html += "<td>" + matriz[i][j] + "</td>";
        }

        html += "</tr>";
    }

    html += "</table>";


    document.getElementById("tabela").innerHTML = html;
}
