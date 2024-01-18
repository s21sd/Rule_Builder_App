
// function addCustomModification() {
//     const container = document.getElementById('customModificationsContainer');

//     const customModificationInput = document.createElement('input');
//     customModificationInput.type = 'text';
//     customModificationInput.name = 'customModifications[]'; // Use an array to collect multiple custom modifications
//     customModificationInput.placeholder = 'Enter custom modification';

//     container.appendChild(customModificationInput);
// }
// function generateQueryForms() {
//     const numQueries = document.getElementById('numQueries').value;
//     const container = document.getElementById('queryFormsContainer');
//     container.innerHTML = '';  // Clear previous forms

//     for (let i = 1; i <= numQueries; i++) {
//         const form = document.createElement('div');
//         form.innerHTML = `
//                     <label for="field${i}">Field:</label>
//                     <input type="text" id="field${i}" name="field${i}" required>

//                     <label for="operator${i}">Operator:</label>
//                     <input type="text" id="operator${i}" name="operator${i}" required>

//                     <label for="value${i}">Value:</label>
//                     <input type="text" id="value${i}" name="value${i}" required>
//                 `;
//         container.appendChild(form);
//     }
// }
// function showHideDropdowns() {
//     const condition = document.getElementById('condition').value;
//     const atLeastContainer = document.getElementById('atLeastContainer');
//     const atMostContainer = document.getElementById('atMostContainer');

//     if (condition === 'AtLeast') {
//         atLeastContainer.style.display = 'block';
//         atMostContainer.style.display = 'none';
//     } else if (condition === 'AtMost') {
//         atLeastContainer.style.display = 'none';
//         atMostContainer.style.display = 'block';
//     } else {
//         atLeastContainer.style.display = 'none';
//         atMostContainer.style.display = 'none';
//     }
// }

// function submitQueries() {
//     const form = document.getElementById('queryForm');
//     const formData = new FormData(form);

//     fetch('/query', {
//         method: 'POST',
//         body: formData,
//     })
//         .then(response => response.json())
//         .then(data => {
//             if (data.success) {
//                 displayResult(data.data);
//             } else {
//                 alert('Error: ' + data.error);
//             }
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
// }

// function displayResult(result) {
//     const resultDiv = document.getElementById('result');
//     resultDiv.innerHTML = '<h2>Query Result:</h2>';

//     if (result.length === 0) {
//         resultDiv.innerHTML += '<p>No matching records found.</p>';
//     } else {
//         const table = document.createElement('table');
//         const headerRow = document.createElement('tr');

//         Object.keys(result[0]).forEach(colName => {
//             const th = document.createElement('th');
//             th.textContent = colName;
//             headerRow.appendChild(th);
//         });

//         table.appendChild(headerRow);

//         result.forEach(record => {
//             const row = document.createElement('tr');
//             Object.values(record).forEach(value => {
//                 const td = document.createElement('td');
//                 td.textContent = value;
//                 row.appendChild(td);
//             });
//             table.appendChild(row);
//         });

//         resultDiv.appendChild(table);
//     }
// }
