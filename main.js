function ConverterDolar() {
  let valorConvertido = parseFloat(document.getElementById('valor').value)
  let valorConvertidoDolar = valorConvertido * 5.22

  if (isNaN(valorConvertido)) {
    alert('Digite um valor valido')
  } else {
    document.getElementById(
      'valorConvertido'
    ).innerHTML = `O valor convertido é ${valorConvertidoDolar.toFixed(2)}$`
  }
}

function ConverterEuro() {
  let valorConvertido = parseFloat(document.getElementById('valor').value)
  let valorConvertidoEuro = valorConvertido * 6.17

  if (isNaN(valorConvertido)) {
    alert('Digite um valor valido')
  } else {
    document.getElementById(
      'valorConvertido'
    ).innerHTML = `O valor convertido é ${valorConvertidoEuro.toFixed(2)}€ `
  }
}

function ConverterLibra() {
  let valorConvertido = parseFloat(document.getElementById('valor').value)
  let valorConvertidoLibra = valorConvertido * 7.22

  if (isNaN(valorConvertido)) {
    alert('Digite um valor valido')
  } else {
    document.getElementById(
      'valorConvertido'
    ).innerHTML = `O valor convertido é ${valorConvertidoLibra.toFixed(2)}£ `
  }
}

function ConverterBitcoin() {
  let valorConvertido = parseFloat(document.getElementById('valor').value)
  let valorConvertidoBitcoin = valorConvertido * 0.000004

  if (isNaN(valorConvertido)) {
    alert('Digite um valor valido')
  } else {
    document.getElementById(
      'valorConvertido'
    ).innerHTML = `O valor convertido é ${valorConvertidoBitcoin} Ƀ `
  }
}
