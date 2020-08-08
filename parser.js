window.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  let linksArray = []; // сюда первоначально будут сложены все ссылки

  // функция для поиска и добавления в массив ссылок из всех тэгов <a>
  function recursy (element) {
    element.childNodes.forEach(node => {
      if (node.nodeName.match(/^A/))  {
          linksArray.push(node.href);
      } else {
        recursy(node);
      }
    });
  }
  recursy(body);

  const part = "https://leroymerlin.ru/catalogue/"; // подстрока для поиска

  // убираю "" и undefined из массива linksArray
  function filterFromTrash(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != "" && arr[i] != undefined) {
        result.push(arr[i]);
      }
    }
    return result;
  }

  let newArr = filterFromTrash(linksArray);

  // оставляю только те ссылки, которые содержат подстроку
  function filterBySubstring(arr, part) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(part) > -1 && arr[i] !== part && arr[i] !== part && !(arr[i].includes("https://leroymerlin.ru/catalogue/#"))) {
          result.push(arr[i]);
        }
    }
    return result;
  }

  let newArrBySubstring = filterBySubstring(newArr, part); // новый отфильрованный массив 

  let finalArray = [...new Set(newArrBySubstring)]; // конечный массив с уникальными ссылками 
  finalArray.forEach(elem => {
    console.log(elem);
  })
})