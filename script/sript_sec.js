import template from "../template.hbs";
import * as data from "../data/data.json";
console.log(data)
document.getElementById("root").innerHTML = template(data);