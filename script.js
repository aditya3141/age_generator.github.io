
  const btn = document.querySelector('.btn').addEventListener('click', function(){
    const name = document.querySelector('.name').value;
    const ans = document.querySelector('.year').value;
    const year = [ans];
    const age = [];
  for(let i = 0; i < year.length; i++){
    age.push(2022 - year[i]);
    document.querySelector('.hidden').style.display = 'inline-block';
    document.querySelector('.overlay').style.display = 'inline-block';

    if(name === ans){
      document.querySelector('.show-age').textContent = 'Hey This Not Age';
    }
  }
    document.querySelector('.show-age').textContent = `Hey ${name}  Your Age is ${age}`;
  })


  document.querySelector('.reset').addEventListener('click', function(){
    const name = document.querySelector('.name').value = '';
    const ans = document.querySelector('.year').value = '';
  })

  document.querySelector('.close-modal').addEventListener('click', function(){
    document.querySelector('.hidden').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
  })