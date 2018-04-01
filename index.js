function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list li');
  for(let x = 0; x < lis.length; x++) {
    lis[x].innerHTML = (parseInt(lis[x].innerHTML) + n).toString()
  }
}

function deepestChild() {
  //return document.querySelector('#grand-node div div div div');
  let node = document.querySelector('#grand-node')
  let nextNode = node.children[0];
  if (nextNode == true) {
    node = nexNode;
  }
  return nexNode;
}