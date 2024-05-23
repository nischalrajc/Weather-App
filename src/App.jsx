import './App.css'
import Highlights from './components/Highlights'
import Temperature from './components/Temperature'

function App() {

  return (
    <h1 className="bg-blue-950 h-screen flex justify-center">

      <div className="mt-40 w-1/5 h-1/3">
        <Temperature />
      </div>

      <div className='w-1/3 h-1/3 p-10 mt-40 grid grid-cols-2 gap-6'>
        <h2 className='text-slate-200 col-span-2'>Today's Highlights</h2>
        <Highlights />
        <Highlights />
        <Highlights />
        <Highlights />
      </div>
    </h1>
  )
}

export default App
