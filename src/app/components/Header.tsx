export default function Header() {
  return (
    <header style={{ width: '100%' }} className="flex flex-col items-center">
      <h1 style={{ padding: 0, margin: 0 }}>Stevie Trudell</h1>
      <div style={{ width: '50%' }} className="flex justify-around">
        <span>Drums</span>
        <span>Guitar</span>
        <span>Synth</span>
        <span>Recording</span>
        <span>Performing</span>
        <span>Producing</span>
      </div>
    </header>
  )
}
