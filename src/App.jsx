import { Suspense } from 'react';
import './App.css'
import Countries from './components/countries/Countries'

function App() {

  const loadCountries = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/all')
    return res.json();
  }

    let countriesPromise = loadCountries();

  return (
  <>
    <Suspense fallback={<h2>Countries Loading...</h2>}>
      <Countries countriesPromise={countriesPromise}></Countries>
    </Suspense>
  </>
  )
}

export default App
