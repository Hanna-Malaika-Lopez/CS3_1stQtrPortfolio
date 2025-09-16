process.stdin.on('data', function (data)  {
    let num = Number(data.toString().trim()); 

    let add;
    for(let i=1; i<=num; i+=add){
        console.log(i);
        add++;
    }
    process.exit(); 
  });