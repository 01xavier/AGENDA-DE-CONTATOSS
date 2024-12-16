// Captura o formulário e a tabela
const contactForm = document.getElementById('contactForm');
const contactTableBody = document.querySelector('#contactTable tbody');

// Adiciona evento ao formulário
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o recarregamento da página
    
    // Captura os valores dos campos
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Cria uma nova linha
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const phoneCell = document.createElement('td');

    // Adiciona os valores às células
    nameCell.textContent = name;
    phoneCell.textContent = phone;

    // Adiciona as células à linha
    row.appendChild(nameCell);
    row.appendChild(phoneCell);

    // Adiciona a linha à tabela
    contactTableBody.appendChild(row);

    // Limpa os campos do formulário
    contactForm.reset();
});