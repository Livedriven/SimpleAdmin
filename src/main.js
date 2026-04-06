// --- IMPORTAÇÕES ---

import * as storage from './localstorage.js';
import '/src/css/style.css';
import iconeLixeira from '/src/assets/lixeira.png';

// --- ELEMENTOS DO DOM ---

const form = document.querySelector('.js-form');
const clearButton = document.querySelector('.js-clear-button');
const result = document.querySelector('.js-result');
const formatDate = new Intl.DateTimeFormat('pt-BR');
let people = storage.getPeople();

// --- FUNÇÕES ---

// Cria um objeto pessoa com um ID único, nome e data de nascimento formatada, e retorna esse objeto.
function createPerson(nome, birthDate) {
    const id = crypto.randomUUID();
    const birthDateFormatted = formatDate.format(new Date(birthDate + "T00:00:00"));
    return { idUser: id, nome, birthDate: birthDateFormatted };
}

// Atualiza um campo específico de uma pessoa com base no ID e salva as alterações no localStorage
function updatePerson(id, campo, novoValor) {
    const personIndex = people.findIndex(person => person.idUser === id);
    if (personIndex !== -1) {
        people[personIndex][campo] = novoValor;
        storage.savePeople(people);
    }
}

function deletePerson(id) {
    people = people.filter(person => person.idUser !== id);
    storage.savePeople(people);
    renderPeople();
}

// Renderiza a tabela de pessoas na tela, exibindo uma mensagem caso não haja dados disponíveis.
function renderPeople() {
    // Limpa a tela antes de renderizar
    result.textContent = "";

    if (people.length === 0) {
        // Exibir uma mensagem de "Nenhum dado disponível" caso não haja dados para exibir.
        const noDataCell = document.createElement('h2');
        noDataCell.textContent = "Nenhum dado disponível";
        result.appendChild(noDataCell);

    } else {
        const table = document.createElement('table');
        table.classList.add('people-table');

        // --- CABEÇALHO DA TABELA ---
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        headerRow.classList.add('header-row');

        const titleName = document.createElement('th');
        titleName.textContent = "Nome";
        titleName.classList.add('header-cell');
        headerRow.appendChild(titleName);

        const titleDate = document.createElement('th');
        titleDate.textContent = "Data de Nascimento";
        titleDate.classList.add('header-cell');
        headerRow.appendChild(titleDate);

        const titleDelete = document.createElement('th');
        titleDelete.classList.add('header-delete');
        headerRow.appendChild(titleDelete);

        thead.appendChild(headerRow);
        table.appendChild(thead);

        // --- CORPO DA TABELA ---
        const tbody = document.createElement('tbody');
        tbody.classList.add('table-body');

        people.forEach((person) => {
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = person.nome;
            nameCell.classList.add('name-cell');

            // Adiciona um evento de duplo clique à célula do nome para permitir a edição do nome da pessoa.
            nameCell.addEventListener('dblclick', () => {
                const newName = document.createElement('input');
                newName.type = 'text';
                newName.value = person.nome;
                nameCell.textContent = '';
                nameCell.appendChild(newName);
                newName.focus();

                //Quando o campo de edição perde o foco, atualiza o nome da pessoa e re-renderiza a tabela.
                newName.addEventListener('keydown', (event) => {
                    if (event.key === 'Enter') {
                        event.preventDefault();

                        const nameValue = newName.value.trim();

                        if (nameValue !== '' && nameValue !== person.nome) {
                            updatePerson(person.idUser, 'nome', nameValue);
                        }

                        renderPeople();
                    } else if (event.key === 'Escape') {
                        renderPeople();
                    }
                });
            });

            const birthDateCell = document.createElement('td');
            birthDateCell.textContent = person.birthDate;
            birthDateCell.classList.add('birthdate-cell');

            birthDateCell.addEventListener('dblclick', () => {
                const newBirthDate = document.createElement('input');
                newBirthDate.type = 'date';
                const [day, month, year] = person.birthDate.split('/');
                newBirthDate.value = `${year}-${month}-${day}`;
                birthDateCell.textContent = '';
                birthDateCell.appendChild(newBirthDate);
                newBirthDate.focus();

                newBirthDate.addEventListener('keydown', (event) => {
                    if (event.key === 'Enter') {
                        event.preventDefault();
                        const birthDateValue = newBirthDate.value;

                        if (birthDateValue) {
                            const formattedBirthDate = formatDate.format(new Date(birthDateValue + "T00:00:00"));
                            if (birthDateValue && formattedBirthDate !== person.birthDate) {
                                updatePerson(person.idUser, 'birthDate', formattedBirthDate);
                            }
                        }


                        renderPeople();
                    } else if (event.key === 'Escape') {
                        renderPeople();
                    }
                })
            });

            const DeleteCell = document.createElement('td');
            DeleteCell.classList.add('delete-cell');

            const deleteBtn = document.createElement('button');
            const deleteIcon = document.createElement('img');

            deleteBtn.classList.add('delete-btn');
            deleteBtn.type = 'button';

            deleteIcon.src = iconeLixeira;
            deleteIcon.alt = 'Excluir';

            deleteBtn.appendChild(deleteIcon);

            deleteBtn.addEventListener('click', () => {
                if (confirm(`Deseja excluir ${person.nome}?`)) {
                    deletePerson(person.idUser);
                }
            });

            DeleteCell.appendChild(deleteBtn);

            row.appendChild(nameCell);
            row.appendChild(birthDateCell);
            row.appendChild(DeleteCell);

            tbody.appendChild(row);
        });

        table.appendChild(tbody);

        result.appendChild(table);
    }
}

// --- EVENTOS ---

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = form["nome"].value;
    const birthDate = form["birthDate"].value;

    people.push(createPerson(nome, birthDate));

    storage.savePeople(people);
    renderPeople();

    // Limpa os campos do formulário para o próximo cadastro
    form.reset();
});

clearButton.addEventListener('click', () => {
    people = [];
    storage.clearPeople(people);
    renderPeople();
});

window.addEventListener('load', () => {
    renderPeople();
});