const form = document.getElementById ('form-agenda');

const contato = [];
const numero = [];

let linhas = '';

form.addEventListener ('submit', function (e)
{
    e.preventDefault();
    adicionaLinha ();
    atualizaNumero ();
}
)

function adicionaLinha () 
{
    const inputNovoContato = document.getElementById ('novo-contato');
    const inputNovoNumero = document.getElementById ('novo-numero');

    if (contato.includes(inputNovoContato.value))
    {
        alert (`Este contato - ${inputNovoContato.value} - já está na sua lista.`);
    }

    else 
    {
        contato.push (inputNovoContato.value);
        numero.push (parseFloat(inputNovoNumero.value));
    
        let linha = '<tr>';
        linha += `<td> ${inputNovoContato.value} </td>`;
        linha += `<td> ${inputNovoNumero.value} </td>`;
        linha += `</tr>`;
    
        linhas += linha;
    }

    inputNovoContato.value = ``;
    inputNovoNumero.value = ``;
}

function atualizaNumero ()
{
    const corpoTabela = document.querySelector ('tbody');
    corpoTabela.innerHTML = linhas;
}