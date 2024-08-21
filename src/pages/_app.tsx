import { AllProviders } from '@/provider'
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App(props: AppProps) {
  const { Component, pageProps } = props
  return (
    <AppCacheProvider {...props}>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
        <meta
          name="description"
          content="Aplicación web con Next.js y TypeScript que muestra un mapa interactivo con pins de países, usando datos de la API GraphQL y Leaflet para la visualización."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AllProviders>
        <Component {...pageProps} />
      </AllProviders>
    </AppCacheProvider>
  )
}
