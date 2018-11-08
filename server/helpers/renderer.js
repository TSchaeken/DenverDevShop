import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import App from '../../src/client/App';

export default (req) => {
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      <App />
    </StaticRouter>
  );

  const headTagManager = `
    <!-- Google Tag Manager -->
    <script>{(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5P4N3P3')}</script>
    <!-- End Google Tag Manager -->
  `;
  const bodyTagManager = `
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5P4N3P3" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
  `;

  const helmet = Helmet.renderStatic();
  // const htmlAttrs = helmet.htmlAttributes.toComponent();
  // const bodyAttrs = helmet.bodyAttributes.toComponent();

  // return (
  //     <html {...htmlAttrs}>
  //         <head>
  //             ${headTagManager}
  //             ${helmet.title.toComponent()}
  //             ${helmet.meta.toComponent()}
  //             ${helmet.link.toComponent()}
  //         </head>
  //         <body {...bodyAttrs}>
  //             ${bodyTagManager}
  //             <div id="root">${content}</div>
  //             <script src="bundle.js"></script>
  //         </body>
  //     </html>
  // )

  const data = `
    <html>
      <head>
        ${headTagManager}
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        <link rel="stylesheet" href="./styles.css">
      </head>
      <body ${helmet.bodyAttributes.toString()}>
        ${bodyTagManager}
        <div id="root">${content}</div>
        <script src="./bundle.js"></script>
      </body>
    </html>`;

  return data;
};
