const converter = () => {
  var in_val = document.querySelector("#in_val");
  var in_unit = document.querySelector("#in_unit");
  var out_val = document.querySelector("#out_val");
  var out_unit = document.querySelector("#out_unit");

  console.log(in_val);
  console.log(in_unit);
  console.log(out_val);
  console.log(out_unit);

  // meter and centimeter
  if (in_unit.value == "meter" && out_unit.value == "centimeter") {
    out_val.value = in_val.value * 100;
  }
  //centimeter to meter
  else if (in_unit == "centimeter" && out_unit == "meter") {
    //divide by 100
    out_val = in_val / 100;
  }
  //kilometer to meter
  else if (in_unit == "kilometer" && out_unit == "meter") {
    //multiply by 1000
    let output_val = in_val * 1000;
    out_val.value = output_val;
  }
  //meter to kilometer
  else if (in_unit == "meter" && out_unit == "kilometer") {
    //divide by 1000
    let output_val = in_val / 1000;
    out_val.value = output_val;
  }
  //kilometer and centimeter
  else if (in_unit == "kilometer" && out_unit == "centimeter") {
    //multiply by 100000
    let output_val = in_val * 100000;
    out_val.value = output_val;
  }
  //centimeter and kilometer
  else if (in_unit == "centimeter" && out_unit == "kilometer") {
    //divide by 100000
    let output_val = in_val / 100000;
    out_val.value = output_val;
  }
  //meter and inch
  else if (in_unit == "meter" && out_unit == "inch") {
    //multiply by 39.37
    let output_val = in_val * 39.37;
    out_val.value = output_val;
  }
  //inch and meter
  else if (in_unit == "inch" && out_unit == "meter") {
    //divide by 39.37
    let output_val = in_val / 39.37;
    out_val.value = output_val;
  }
};
