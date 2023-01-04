// Scrapping: Tecnica utilizada mediante programas de software para extraer informacion del sitio web
const puppeteer = require('puppeteer');

// Funcion autoejecutable
(async () => {
  console.log('Lanzamos navegador');
  // const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({ headless: false }); // Lanza el navegador y lo muestra
  
  const page = await browser.newPage(); // Abre una pagina
  await page.goto('https://es.wikipedia.org/wiki/Node.js'); // Se dirige a una pagina

  let titulo1 = await page.evaluate(() => {
    const h1 = document.querySelector('h1'); // Selecciono el h1
    console.log(h1.innerHTML);
    return h1.innerHTML; // Lo retorno a mi variable titulo1
  });

  console.log(titulo1);

  console.log('Cerramos navegador');
  browser.close(); // Cierro el navegador
  console.log('Navegador cerrado');
})();