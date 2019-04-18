export default function calSize(width, height) {
  const rate = width / height
  const isVertival = rate < 1
  const minHeight = 60
  const maxHeight = 180
  const minWidth = 60
  const maxWidth = isVertival ? 180 : 240

  if (rate === 1) {
    return [180, 180, 180, 180]
  }

  if (isVertival) { // height > width, vertical image
    width = maxWidth
    height = maxWidth / rate
  } else { // height < width
    height = maxHeight
    width = maxHeight * rate
  }

  while (true) {
    if (isVertival) {
      if (height < maxHeight || width <= minWidth) {
        return [width, height, width, maxHeight] // final result
      } else {
        width--
        height = width / rate
      }
    } else {
      if (width < maxWidth || height <= minHeight) {
        return [width, height, maxWidth, height] // final result
      } else {
        height--
        width = height * rate
      }
    }
  }
}
