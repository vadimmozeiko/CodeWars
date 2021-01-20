function bmi(weight, height) {

    let calculate = weight / (height * height)

    const amIobese = calculate <= 18.5 ? 'Underweight' : calculate <= 25.0 ? 'Normal' : calculate <= 30.0 ? 'Overweight' : calculate > 30 ? 'Obese' : 'ERROR'
    
    return amIobese
  }

  console.log((bmi(80, 1.80)), "Normal");
  console.log((bmi(72, 1.77)), "Normal");