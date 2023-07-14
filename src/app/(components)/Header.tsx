import Hero from './Hero'

export default function Header() {
  return (
    <header style={{ width: '100%' }} className="flex flex-col items-center">
      <Hero />
      <h1 style={{ padding: 0, margin: 0 }}>Stevie Trudell</h1>
      <h2>MUSICIAN</h2>
      <div style={{ width: '50%' }} className="flex justify-around">
        <span>Drums</span>
        <span>Percussion</span>
        <span>Guitar</span>
        <span>Synth</span>
        <span>Ableton Live</span>
        <span>Session Player</span>
        <span>Performance</span>
      </div>
      <h2>AUDIO ENGINEER</h2>
      <div style={{ width: '50%' }} className="flex justify-around">
        <span>Studio Recording</span>
        <span>Live Sound</span>
        <span>Mixing</span>
        <span>Composing</span>
        <span>Producing</span>
      </div>
    </header>
  )
}
