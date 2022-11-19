// import { LanguageDetect } from 'languagedetect';

const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect(); 
console.log(lngDetector.detect('hallo'));