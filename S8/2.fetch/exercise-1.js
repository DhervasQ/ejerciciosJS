// const get = async () => {
//     try {
//         const respuesta = await fetch('https://api.agify.io?name=michael');
//         const res = await respuesta.json();
//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
// }

fetch("https://api.agify.io?name=michael")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
