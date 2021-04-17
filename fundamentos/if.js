// **Las comparaciones en JS se bifurca en dos caminos:
// ** "== verifica el valor, ""=== verifica el valor y el tipo de dato"
let a = 1
let b = "1"
let c = 1
if(a === b)
{
    console.log("a = b")
}else if (a === c)
{
    console.log(" a = c")
}else
{
    console.log("Nunca voy aparecer")
}
// **Operador ternario en JS
(a == b) ?  console.log("a = b") : console.log('a != b')