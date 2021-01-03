var pi = 0.0;
function f(x){
  return Math.sqrt(1 - x*x);
}
function exec() {
  const dx = 1e-6;
  const start = new Date();
  for(var i = 0;i < 1000;i++)
    for(var x = 0.0;x <= 1.0;x += dx)
      pi += f(x);
  const end = new Date();
  pi = pi * dx * 4 / 1000;
  const tusage = "Time usage "+(end.getTime()-start.getTime())+" ms";
  console.log(pi+"\n"+tusage);
}
exec();