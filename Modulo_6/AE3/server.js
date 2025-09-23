import moment from 'moment';
import { sumar } from './funciones.js';

console.log('Server started at:', moment().format('YYYY-MM-DD HH:mm:ss'));

console.log(sumar(5, 3));