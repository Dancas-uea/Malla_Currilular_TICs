fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('malla-container');
    data.forEach(semestre => {
      const div = document.createElement('div');
      div.className = 'semestre';
      div.innerHTML = `<h2>${semestre.semestre}</h2>`;
      semestre.materias.forEach(materia => {
        const matDiv = document.createElement('div');
        matDiv.className = 'materia';
        matDiv.innerHTML = `<strong>${materia.nombre}</strong> — ${materia.creditos} créditos`;
        matDiv.title = materia.prerrequisitos.length
          ? `Prerrequisitos: ${materia.prerrequisitos.join(', ')}`
          : 'Sin prerrequisitos';
        div.appendChild(matDiv);
      });
      container.appendChild(div);
    });
  });
