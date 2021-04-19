class validar {

  constructor() { }

  exprecionLetras(x) {

    const cadena = x
    const result = /^([a-zA-Z| ])*$/.test(cadena);
    console.log('exprecionLetras: ',result)
    return result;

  }

  exprecionNumero(x) {

    const cadena = x
    const result = /^([0-9| ])*$/.test(cadena);
    console.log('exprecionNumero',result)
    return result;

  }

  exprecionHora(x) {

    const cadena = x
    const result = /^([0-9]{1,3}[:][0-9]{1,3})*$/.test(cadena);
    console.log('exprecionHora',result)
    return result;

  }

  exprecionNumeroOLetras(x) {

    const cadena = x
    const result = /^([a-zA-Z0-9| |á|é|í|ó|ú|ñ|Ñ|-|.|?|¿])*$/.test(cadena);
    console.log('exprecionNumeroOLetras: ',result)
    return result;

  }

  exprecionCorreo(x) {
    const cadena = x
    const result = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(cadena);
    console.log('exprecionCorreo: ',result)
    return result;
  }

  exprecionContraseña(x) {
    const cadena = x
    const result = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$+/.test(cadena);
    console.log('exprecionContraseña ',result)
    return result;
  }

  exprecionFecha(x) {
    const cadena = x
    const result = /^([0-9]{0,4}[/|-][0-9]{0,2}[/|-][0-9]{0,2})$/.test(cadena);
    console.log('exprecionFecha ',result)
    return result;
  }

}
module.exports = validar;