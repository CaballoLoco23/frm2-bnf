/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'

const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})

// Uncomment to use Edge Runtime
// export const runtime = 'edge'


// Frame raíz
 app.frame('/', (c) => {
   const { buttonValue } = c;
   return c.res({
    image: '/img-frame1.png',
    intents: [
      <Button action='/perro' value='perro'>A</Button>,
      <Button action='/cafe' value='cafe'>B</Button>,
      <Button action='/sintoniza' value='sintoniza'>C</Button>,
    ]
   })
  })

  app.frame('/perro', (c) => {
    const { buttonValue } = c;
    return c.res({
     image: '/img-frame2.png',
     imageAspectRatio: '1.91:1',
     intents: [
      <Button action='/perro' value='perro'>A</Button>,
      <Button action='/cafe' value='cafe'>B</Button>,
      <Button action='/sintoniza' value='sintoniza'>C</Button>,
     ]
    })
   })

   app.frame('/cafe', (c) => {
    const { buttonValue,  } = c;
    return c.res({
     image: '/img-frame3.png',
     imageAspectRatio: '1:1',
     intents: [
      <Button action='/perro' value='perro'>A</Button>,
      <Button action='/cafe' value='cafe'>B</Button>,
      <Button action='/sintoniza' value='sintoniza'>C</Button>,
     ]
    })
   })

   app.frame('/sintoniza', (c) => {
    const { buttonValue } = c;
    return c.res({
     image: '/img-frame4.png',
     intents: [
       <Button action='/donde'>Donde?</Button>,
     ]
    })
   })

   app.frame('/donde', (c) => {
    const { buttonValue } = c;
    return c.res({
     image: '/img-frame5.png',
     imageAspectRatio: '1:1',
     intents: [
       <Button.Link href='https://www.youtube.com/@BuenasNochesFarcaster'>Youtube</Button.Link>,
       <Button.Reset>Inicio</Button.Reset>,
     ]
    })
   })




devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
