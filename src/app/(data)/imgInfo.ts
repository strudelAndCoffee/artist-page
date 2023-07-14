export interface ImageType {
  index: number
  src: string
  width: number
  height: number
  alt: string
  credit: string
}

const images: ImageType[] = [
  {
    index: 0,
    src: '/imgs/at_drums_1.jpg',
    width: 300,
    height: 450,
    alt: 'Stevie at drums',
    credit: 'Ray Swartz (@raybernarts)',
  },
  {
    index: 1,
    src: '/imgs/at_drums_2.jpg',
    width: 500,
    height: 300,
    alt: 'Stevie at drums',
    credit: 'Diego Whitten (@mdwhitten)',
  },
]

export default images
