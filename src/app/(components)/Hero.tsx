'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import images from '../(data)/imgInfo'
import { ImageType } from '../(data)/imgInfo'

export default function Hero() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0)
  const [currentImg, setCurrentImg] = useState<ImageType>(
    images[currentImgIndex]
  )

  useEffect(() => {
    setTimeout(() => {
      currentImgIndex < images.length - 1
        ? setCurrentImgIndex((prev) => prev + 1)
        : setCurrentImgIndex(0)
    }, 10000)
    console.log(currentImgIndex)
    setCurrentImg(images[currentImgIndex])
  }, [currentImgIndex])

  return (
    <Image
      src={currentImg.src}
      width={currentImg.width}
      height={currentImg.height}
      alt={currentImg.alt}
      style={{ overflow: 'hidden', width: 'auto', height: 'auto' }}
      priority={true}
    />
  )
}
