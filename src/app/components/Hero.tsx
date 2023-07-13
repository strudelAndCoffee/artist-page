import Image from 'next/image'

export default function Hero() {
  return (
    <div>
      <Image
        src="/imgs/at_drums_1.jpg"
        width={300}
        height={450}
        alt="stevie at drums"
        style={{
          width: '100%',
          overflow: 'hidden',
        }}
      />
    </div>
  )
}
