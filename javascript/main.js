import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import Navigation from './navigation.jsx';
//import Body from './body.jsx';
import Footer from './body.jsx';

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(<Navigation />, document.getElementById('nav'));
//ReactDOM.render(<Body  products={PRODUCTS} />, document.getElementById('body'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
