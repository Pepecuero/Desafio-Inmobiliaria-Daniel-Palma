const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:"https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      rooms: 5,
      m: 500
    }
  ];

  const propiedades = document.querySelector(".propiedades");
  const totalPropiedades = document.querySelector("#cantidad");
  const boton = document.querySelector("#boton");
  
  
  function formatoHtml(inmueble) {
    return `
      <div class="propiedad">
        <div class="img" style="background-image: url('${inmueble.src}')"></div>
        <section>
          <h5>${inmueble.name}</h5>
          <div class="d-flex justify-content-between">
              <p>Cuartos: ${inmueble.rooms}</p>
              <p>Metros: ${inmueble.m}</p>
          </div>
          <p class="my-3">${inmueble.description}</p>
          <button class="btn btn-info ">Ver más</button>
        </section>
      </div>
    `;
  };
  
  function filtro() { 
    const cuartos = document.querySelector("#cuartos").value;
    const mtsDesde = document.querySelector("#min").value;
    const mtsHasta = document.querySelector("#max").value;
  
    if (cuartos==0 || mtsDesde==0 || mtsHasta==0){
      alert(" Todos los campos son requeridos\n\ Los valores deben ser mayor a cero");
      return;
    }
    console.log(cuartos, mtsDesde, mtsHasta)
  
    let html = "";
    let contador = 0;
    for (const inmueble of propiedadesJSON) { 
      
      if (inmueble.rooms >= cuartos && inmueble.m >= mtsDesde && inmueble.m <= mtsHasta) {
        html += formatoHtml(inmueble);
        contador ++;
      }
    }
    propiedades.innerHTML = html;
    totalPropiedades.innerHTML = contador;
  }
  
  boton.addEventListener('click', filtro) 
  
  
  function muestraPropiedades() {
    let html = "";
    for (const todas of propiedadesJSON) { 
      html += formatoHtml(todas);
    }
    propiedades.innerHTML = html;
    totalPropiedades.innerHTML = propiedadesJSON.length;
  }
  
  muestraPropiedades(propiedades);