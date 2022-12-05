const { connection } = require('../../db');
const productRepository = require('./customerRepository');

exports.getAll = () => {
  return productRepository.getAll();
}

exports.filter = (name, cat, sort) => {
  return productRepository.filter(name, cat, sort);
}

exports.get = (id) => productRepository.get(id);

exports.getNewest = () =>{
  return productRepository.getNewest();
}
