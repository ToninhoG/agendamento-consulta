const horariosDisponiveis = ["08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

document.getElementById('data').addEventListener('change', function() {
    const selectHorario = document.getElementById('horario');
    selectHorario.innerHTML = "";
    horariosDisponiveis.forEach(horario => {
        let option = document.createElement('option');
        option.value = horario;
        option.text = horario;
        selectHorario.appendChild(option);
    });
});

document.getElementById('formAgendamento').addEventListener('submit', function(event) {
    event.preventDefault();

    const data = document.getElementById('data').value;
    const horario = document.getElementById('horario').value;
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;

    if (!data || !horario || !nome || !telefone || !email) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    document.getElementById('resumo').innerHTML = `
        <h3>Consulta Agendada!</h3>
        <p><strong>Data:</strong> ${data}</p>
        <p><strong>Horário:</strong> ${horario}</p>
        <p><strong>Paciente:</strong> ${nome}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Email:</strong> ${email}</p>
    `;
});
