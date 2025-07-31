document.getElementById('planoForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  const tema = formData.get('tema') || 'Tema não informado';
  const serie = formData.get('serie') || 'Ano/Série não especificado';
  const unidade = formData.get('unidade') || 'Unidade temática sugerida automaticamente';
  const objetos = formData.get('objetos') || 'Objetos serão definidos conforme o conteúdo';
  const aulas = formData.get('aulas') || '1';
  const carga = formData.get('carga') || '45';
  const explicativo = formData.get('explicativo') ? 'Sim' : 'Não';
  const imagens = formData.get('imagens') ? 'Sim' : 'Não';
  const observacoes = formData.get('observacoes') || 'Nenhuma observação adicionada.';

  const plano = `
    <h2>Plano de Aula — ${tema} | ${serie}</h2>
    <p><strong>Unidade Temática:</strong> ${unidade}</p>
    <p><strong>Objetos de Conhecimento:</strong> ${objetos}</p>
    <p><strong>Número de Aulas:</strong> ${aulas}</p>
    <p><strong>Carga Horária por Dia:</strong> ${carga} min</p>
    <p><strong>Deseja Texto Explicativo?</strong> ${explicativo}</p>
    <p><strong>Incluir Imagens?</strong> ${imagens}</p>
    <p><strong>Observações:</strong> ${observacoes}</p>
    <p><em>Este plano foi gerado com base nos dados fornecidos e pode ser complementado com sugestões da BNCC.</em></p>
  `;

  document.getElementById('resultado').innerHTML = plano;
});
