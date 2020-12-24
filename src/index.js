import './styles.css';
import './css/styles.css';
import fetchObject from "./js/fetch.js";
import x from './js/refs.js';
// console.log(x.form)
const {form, searchBtn, gallery} = x;
console.log(form, searchBtn, gallery);

fetchObject.getFetch();