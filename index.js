// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// // rendering through or from DOM
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
// import Fruit from './fruit';
// import Phone from './about';

ReactDOM.render(<App/>, document.getElementById('root'));
// ReactDOM.render(<Fruit fruit= 'Apple'/>, document.getElementById('root'));
// ReactDOM.render(<Phone/> , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// without argument
// var n=() =>
// {
//     var a = 5;
//     if(a==5)
//     {
//         let a = 10;
//     }
//     document.getElementById('root').innerHTML=a;
// }
// n();

// with argument
// var a=(x) =>
// {
//     var a=5;
//     var b = 10;
//     var c= a+b+x;
//     document.getElementById('root').innerHTML = c;
// }

// a(30);

// class Demo{
//     methodone()
//     {
//         var a=5;
//         var b=10;
//         var c=a+b;
//         document.getElementById('root').innerHTML=c;
//     }
// }

// divisible by 11
// var a= (x)=>
// {
//     const a=5;
//     var c;
//     if(a%11===0){
//         c=true;
//     }
//     else{
//         c=false;
//     }
//     document.getElementById('root').innerHTML=c;
// }
// a(10);


// class demo{
//     methodone()
// {
//     var num=parseInt(prompt("Enter a num:"));
//     var rem, sum=0;
//     while(num)
//     {
//       rem = num%10;
//       sum = sum+rem;
//       num = Math.floor(num/10);
//     }
//     return(sum);
//     // document.getElementById('root').innerHTML=sum;
// }
// }
// var mydemo=new demo();
// // mydemo.methodone();

// console.log('The sum is',mydemo.methodone());