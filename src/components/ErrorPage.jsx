import React from 'react'

const ErrorPage = () => {
  return (
    <html className="h-full">
  <body className="flex h-full">
    <div className="max-w-[50rem] flex flex-col mx-auto size-full">
      <header className="mb-auto flex justify-center z-50 w-full py-4">
        <nav className="px-4 sm:px-6 lg:px-8" aria-label="Global">
          <a className="flex-none text-xl font-semibold sm:text-3xl dark:text-white" href="#" aria-label="Brand"><span style={{color:"#C60C30"}}>CODE</span><span style={{color:"black"}}>  N</span><span style={{color:"#073980"}}>  CLOUD</span></a>
        </nav>
      </header>

      <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white">404</h1>
        <h1 className="block text-2xl font-bold text-white"></h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400">Oops, something went wrong.</p>
        <p className="text-gray-600 dark:text-gray-400">Sorry, we couldn't find your page.</p>
        
      </div>

      <footer className="mt-auto text-center py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500">© All Rights Reserved. 2022.</p>
        </div>
      </footer>
    </div>
  </body>
</html>
  )
}

export default ErrorPage