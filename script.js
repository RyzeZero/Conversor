function Converter() {
  let elementValue = document.getElementById("valor");
  let value = elementValue.value;
  let dolar = parseFloat(value);

  let real = dolar * 5;
  //console.log(real);

  const elementValorConvertido = document.getElementById("valorConvertido");
  const valorConvertido = "O resultado em real é R$ " + real;
  elementValorConvertido.innerHTML = valorConvertido;
}