const url = "https://servicodados.ibge.gov.br/api/v2/censos/nomes/"
const tbody = document.querySelector('tbody')

async function getIBGE() {
    const name = document.getElementById("nameSelect").value
    if(validaInputLetras(name)){
        const sexo = document.getElementById("sexoSelect").value
        const $pesq = document.getElementById("pesquisa")
        let params = new URLSearchParams() // Utilizado para montar a URL no formato correto
        if (sexo == 'F' || sexo == 'M') {
            params.append('sexo', sexo)
        }
        let urlCompleta = url + name
        if (params.toString()) { // Se tiver parâmetros ele monta a URL
            urlCompleta += "?" + params.toString()
        }
        await fetch(urlCompleta)
            .then((res) => res.json()) // Transforma no formato json
            .then((data) => {
                console.log(data)
                if(data.length == 0) tbody.innerHTML = 'Nao existe dados para esse nome'
                preencheTabela(data[0]['res']) // Manda somente os dados necessários para construção da tabela
            })
            .catch((err) => console.log(err))
        console.log(sexo)
        $pesq.innerHTML = `${name}`
    }else{
        tbody.innerHTML = 'Nome invalido'
    }
}

function validaInputLetras(valor) {
    const regex = /^[A-Za-z]+$/; // Regex para validar apenas letras sem espaços, números ou caracteres especiais

    if (regex.test(valor)) {
        console.log("Valido")
        return true
    } else {
        console.log("Invalido")
        return false
    }
}

function preencheTabela(relatorios) {
    tbody.innerHTML = ''
    const tr = document.createElement('tr')
    const td1 = document.createElement('td')
    td1.innerHTML = "Periodo"
    tr.appendChild(td1)
    const td2 = document.createElement('td')
    td2.innerHTML = "Frequência"
    tr.appendChild(td2)
    tbody.appendChild(tr)

    relatorios.forEach(function (relatorio) {

        const tr = document.createElement('tr')
        for (const campo in relatorio) {
            const td = document.createElement('td')
            td.innerHTML = relatorio[campo]
            tr.appendChild(td)
        }
        tbody.appendChild(tr)
    })
}