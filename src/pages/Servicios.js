import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Logo from '../assets/zospace-assets/logos/Logo.png';
import NavBar from '../components/NavBar';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Servicios() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <NavBar />
        <section className='py-8 px-4 lg:px-10 bg-gray-800'>

          <div className='hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50'>
            <div className='navbar-backdrop fixed inset-0 bg-gray-800 opacity-80' />
            <nav className='relative flex flex-col py-8 h-full w-full bg-white overflow-y-auto'>
              <div className='flex items-center mb-16 pr-6'>
                <a className='ml-10 text-2xl text-gray-800 font-bold' href='#'>
                  <img
                    className='h-7'
                    src='zospace-assets/logos/zospace-dark-logo.svg'
                    alt=''
                    width='auto'
                  />
                </a>
              </div>
              <div>
                <ul>
                  <li className='mb-1 px-10'>
                    <a
                      className='block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl'
                      href='#'
                    >
                      Product
                    </a>
                  </li>
                  <li className='mb-1 px-10'>
                    <a
                      className='block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl'
                      href='#'
                    >
                      Story
                    </a>
                  </li>
                  <li className='mb-1 px-10'>
                    <a
                      className='block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl'
                      href='#'
                    >
                      Features
                    </a>
                  </li>
                  <li className='mb-1 px-10'>
                    <a
                      className='block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl'
                      href='#'
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className='mt-auto px-10'>
                <div className='pt-6'>
                  <a
                    className='block mb-4 py-4 px-12 text-gray-800 text-center font-bold border border-gray-50 hover:border-gray-100 rounded-full'
                    href='#'
                  >
                    Sign in
                  </a>
                  <a
                    className='block py-4 px-12 text-white text-center font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200'
                    href='#'
                  >
                    Sign up
                  </a>
                </div>
                <p className='mt-6 mb-4 text-lg text-center'>
                  <span>2021 © Zospace. All rights reserved.</span>
                </p>
              </div>
            </nav>
          </div>
        </section>

        <section className='relative py-20 2xl:py-40 bg-gray-800 overflow-hidden'>
          <div className='relative container px-4 mx-auto'>
            <div>
              <div className='flex flex-wrap justify-between my-5'>

                <div className=" text-white rounded-lg bg-gray-600 max-w-md ">
                  <a href="#">
                    <img
                      class="rounded-t-lg max-w-md"
                      src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                      alt=""
                    />
                  </a>
                  <div class="p-6 text-surface">
                    <h5 class="mb-2 text-5xl font-medium">Diseño Grafico</h5>
                    <p class="mb-4 text-base">
                    Diseño que cautiva. Transformamos ideas en imágenes impactantes. ¡Destaca con nuestro servicio de diseño gráfico profesional y creativo!
                    </p>
                  </div>
                </div>
              
                <div className="text-white rounded-lg bg-gray-600 max-w-md">
                  <a href="#">
                    <img
                      class="rounded-t-lg max-w-md"
                      src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                      alt=""
                    />
                  </a>
                  <div class="p-6 text-surface">
                    <h5 class="mb-2 text-5xl font-medium">Impresión Gran Formato</h5>
                    <p class="mb-4 text-base">
                    Impresión que marca la diferencia. Desde banners hasta vallas, ofrecemos calidad y precisión en gran formato para destacar tu marca con impacto visual.
                    </p>
                  </div>
                </div>


                <div className=" text-white rounded-lg bg-gray-600 max-w-md">
                  <a href="#">
                    <img
                      class="rounded-t-lg max-w-md"
                      src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                      alt=""
                    />
                  </a>
                  <div class="p-6 text-surface">
                    <h5 class="mb-2 text-5xl font-medium">Señalética</h5>
                    <p class="mb-4 text-base">
                    Guiando tu camino con claridad y estilo. Nuestra señalética ofrece soluciones visuales efectivas para orientarte y destacar tu espacio con elegancia y funcionalidad.
                    </p>
                  </div>
                </div>


                <div className=" text-white rounded-lg bg-gray-600 max-w-md">
                  <a href="#">
                    <img
                      class="rounded-t-lg max-w-md"
                      src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                      alt=""
                    />
                  </a>
                  <div class="p-6 text-surface">
                    <h5 class="mb-2 text-5xl font-medium">Murales & Decoración</h5>
                    <p class="mb-4 text-base">
                    Transforma espacios con arte vibrante y personalizado. Nuestros murales y decoraciones añaden vida y estilo único a cualquier ambiente, inspirando creatividad y admiración.
                    </p>
                  </div>
                </div>


                <div className=" text-white rounded-lg bg-gray-600 max-w-md">
                  <a href="#">
                    <img
                      class="rounded-t-lg max-w-md"
                      src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                      alt=""
                    />
                  </a>
                  <div class="p-6 text-surface">
                    <h5 class="mb-2 text-5xl font-medium">Diseño Web</h5>
                    <p class="mb-4 text-base">
                    Diseño web que cautiva y convierte. Creamos experiencias digitales excepcionales que destacan tu marca y cautivan a tu audiencia, impulsando el éxito en línea
                    </p>
                  </div>
                </div>


                <div className=" text-white rounded-lg bg-gray-600 max-w-md">
                  <a href="#">
                    <img
                      class="rounded-t-lg max-w-md"
                      src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                      alt=""
                    />
                  </a>
                  <div class="p-6 text-surface">
                    <h5 class="mb-2 text-5xl font-medium">Sublimación Personalizada</h5>
                    <p class="mb-4 text-base">
                    Sublimación que refleja tu estilo único. Transformamos tus ideas en productos personalizados de alta calidad, llenos de color y significado. ¡Deja tu marca con nosotros!
                    </p>
                  </div>
                </div>



                <div className=" text-white rounded-lg bg-gray-600 max-w-md">
                  <a href="#">
                    <img
                      class="rounded-t-lg max-w-md"
                      src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                      alt=""
                    />
                  </a>
                  <div class="p-6 text-surface">
                    <h5 class="mb-2 text-5xl font-medium">Marketing Digital</h5>
                    <p class="mb-4 text-base">
                    En la actualidad, el marketing digital es esencial para el éxito empresarial. Ofrece una variedad de herramientas como SEO, SEM, marketing de contenido, redes sociales, email marketing, marketing de influencers y analítica. Estos servicios ayudan a aumentar la visibilidad, generar leads y mejorar la participación del cliente. Adaptarse a la era digital es clave para destacarse en un mercado competitivo y conectado.
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}

