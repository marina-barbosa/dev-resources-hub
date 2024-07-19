// async function fetchNavigation(url: string): Promise<void> {

//   const rootElement = document.getElementById('root');
//   if (rootElement) {
//     rootElement.innerHTML = '';
//   } else {
//     console.error('Div root não encontrada.');
//     return;
//   }

//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(`Requisição finalizada, porém o recurso não foi encontrado. Erro ${response.status}.`);
//     }

//     const data = await response.text();
//     rootElement.innerHTML = data;

//   } catch (error) {
//     if (error instanceof Error) {
//       rootElement.innerHTML = error.message;
//     } else {
//       rootElement.innerHTML = 'Algo deu errado.';
//     }
//   }
// }
