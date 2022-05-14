for(let i=1; i<=16; ++i) {
  let gridRow = document.createElement("div");
  gridRow.setAttribute('class', 'grid-row');
  gridRow.setAttribute('id', `grid-row-${i}`);
  document.getElementById('container').appendChild(gridRow);
}

for(let i=1; i<=16; ++i) {
  let searchId = `grid-row${i}`;
  for(let j=1; j<=16; ++j){
    let grids = document.createElement("div");
    grids.setAttribute('class', 'grids');
    document.getElementById(`grid-row-${i}`).appendChild(grids);
  }
}
