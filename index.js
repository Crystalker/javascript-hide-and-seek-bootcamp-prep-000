function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increseRankBy(n) {
  const lis = document.querySelector('#app .ranked-list');
  for(let x = 0; x < lis.length; x++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + 1).toString()
  }
}