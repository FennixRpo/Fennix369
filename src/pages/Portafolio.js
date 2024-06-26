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

export default function Portafolio() {
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
        <section className='bg-gray-800 py-20 2xl:py-40 overflow-hidden'>
          <div className='container mx-auto px-4'>
            <div className='max-w-xl mx-auto mb-12 lg:mb-28 text-center'>
              <span className='text-lg text-blue-400 font-semibold'>
                Nuestros trabajos
              </span>
              <h2 className='mt-8 text-5xl text-white font-bold font-heading'>
                Más de 20 años en el negocio.
              </h2>
            </div>
            <div className='flex flex-wrap -mx-5'>
              <div className='w-full lg:w-1/3 px-5 pt-10 lg:pt-20 pb-10'>
                <ul>
                  <li className='pb-5 border-b border-gray-500'>
                    <a
                      className='inline-block py-6 px-12 bg-gray-600 rounded-lg text-lg text-white font-bold'
                      href='#'
                    >
                      Abstraction 3D
                    </a>
                  </li>
                  <li className='py-6 border-b border-gray-500'>
                    <a
                      className='inline-block py-6 px-12 text-lg text-gray-300'
                      href='#'
                    >
                      Commercial
                    </a>
                  </li>
                  <li className='py-6 border-b border-gray-500'>
                    <a
                      className='inline-block py-6 px-12 text-lg text-gray-300'
                      href='#'
                    >
                      Photography &amp; Film
                    </a>
                  </li>
                  <li>
                    <a
                      className='inline-block py-6 px-12 text-lg text-gray-300'
                      href='#'
                    >
                      All projects
                    </a>
                  </li>
                </ul>
              </div>
              <div className='w-full lg:w-2/3 px-5'>
                <div className='flex flex-wrap -px-4'>
                  <div className='w-full md:w-1/3 p-4'>
                    <img
                      className='h-96 w-full object-cover'
                      src='https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80'
                      alt=''
                    />
                  </div>
                  <div className='w-full md:w-2/3 p-4'>
                    <img
                      className='h-96 object-cover w-full'
                      src='https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=959&q=80'
                      alt=''
                    />
                  </div>
                  <div className='w-full md:w-2/3 p-4'>
                    <img
                      className='h-96 object-cover w-full'
                      src='https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80'
                      alt=''
                    />
                  </div>
                  <div className='w-full md:w-1/3 p-4'>
                    <img
                      className='h-96 w-full object-cover'
                      src='https://images.unsplash.com/photo-1617791160588-241658c0f566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=959&q=80'
                      alt=''
                    />
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

