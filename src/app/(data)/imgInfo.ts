export interface ImageType {
  index: number
  src: string
  width: number
  height: number
  alt: string
}

const images: ImageType[] = [
  {
    index: 0,
    src: '/imgs/at_drums_1.jpg',
    width: 300,
    height: 450,
    alt: 'Stevie at drums',
  },
  {
    index: 1,
    src: '/imgs/at_drums_2.jpg',
    width: 500,
    height: 300,
    alt: 'Stevie at drums',
  },
]

export default images
