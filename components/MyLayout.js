import Head from 'next/head'

const Layout = (props) => (
  <div>
    <Head>
      <title>Tarasenko Petro</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="title" content="Tarasenko Petro, Full stack web developer"/>
      <meta name="description" content="Tarasenko Petro, Full stack web developer"/>
      <meta name="keywords" content="Tarasenko, Тарасенко, Тарасенко Петро, Javascript, React, Full stack, web developer"/>
      <meta name="google-site-verification" content="dsZjSYVxxdaLnD8rhZflboiCknWiZRCvRLwbv8aJ1l0" />

      <meta property="og:type" content="other"/>
      <meta property="og:title" content="Tarasenko Petro"/>
      <meta property="og:description" name="description" content="Full Stack JavaScript Developer"/>
      <meta property="og:url" content="https://www.tarasenkolab.com/"/>
      <meta property="og:image" content="https://www.tarasenkolab.com/static/screenshot.png"/>
      <meta name="robots" content="INDEX, FOLLOW"/>
      <meta name="author" content="Tarasenko Petro"/>

      <meta name="keywords" content="Tarasenko, Тарасенко, Тарасенко Петро, Javascript, React, Full stack, web developer"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
    </Head>
    {props.children}
    <style jsx global>{`
      body: {
        color: '#000';
      }
    `}
    </style>
  </div>
)

export default Layout
