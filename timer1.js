const myArgs = process.argv.slice(2).filter(myArgs => !isNaN(myArgs) && myArgs >= 0);

myArgs.forEach((myArgs) => {
  setTimeout (() => {
    process.stdout.write('\x07')
    console.log(myArgs);

  }, myArgs * 1000)
  
});

