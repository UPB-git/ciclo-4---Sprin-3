const calcularIMC = async (peso, estatura) => {
    try {
      const response = await fetch(
        "https://misiontic2022upb.vercel.app/api/calculate-your-body-mass-index/limits"
      );
      let limits = await response.json();
      let x;
      if (peso === 0 || estatura === 0) {
        return { formula: 0 };
      } else {
        x = parseFloat((peso / estatura ** 2).toFixed(0));
        return {
          formula: x
        };
      }
    } catch (err) {
      console.error(err);
    }
  };
  
  const registrarIMC = async (value) => {
    try {
        let indice = -1;
      let response = await fetch(
        "https://misiontic2022upb.vercel.app/api/calculate-your-body-mass-index/imc-ranges"
      );
      let rangosIMC = await response.json();
        if (value < 0 || value > 50) {
        return "fuera_de_rango";
      } else {
        for (let i = 0; i <= rangosIMC.length; i++) {
          if (value >= rangosIMC[i].de && value <= rangosIMC[i].hasta) {
            return rangosIMC[i].etiqueta;
          }
        }
      }
    } catch (err) {
      console.error(err);
    }
  };
  
  calcularIMC(0, 1.8).then((formula) => {
    console.log(formula);
  });
  
  registrarIMC(21).then((rango) => {
    console.log(rango);
  });

  module.exports.registrarIMC = registrarIMC;
  module.exports.calcularIMC = calcularIMC;
 