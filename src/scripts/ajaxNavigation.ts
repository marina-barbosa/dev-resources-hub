function ajaxNavigation(url: string, callback?: () => void) {
  let root = document.getElementById('root');

  if (!root) return;

  root.innerHTML = '';
  let ajax = new XMLHttpRequest();
  ajax.open('GET', url);

  ajax.onreadystatechange = () => {
    if (ajax.readyState == 4 && ajax.status == 200) {
      root.innerHTML = ajax.responseText;
      if (callback) callback();
    }
    if (ajax.readyState == 4 && ajax.status == 404) {
      root.innerHTML = 'Requisição finalizada, porém o recurso não foi encontrado. Erro 404.';
    }
  };
  ajax.send();
}