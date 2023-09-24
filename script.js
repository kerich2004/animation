{
  const square = document.querySelector('.style-js .square')
  let margin = 0
  let step = 10

  const animate = () => {
    move()
    requestAnimationFrame(animate)
  }

  animate()

  function move() {
    if (margin == 500) step = -1
    if (margin == 0) step = 10
    margin += step
    square.style.marginLeft = margin + 'px'
  }
}

{
  const canvas = document.querySelector('canvas')
  const ctx = canvas.getContext('2d')
  const square = {
    x: 0, y: 0, width: 150, height: 150,
  }
  const animate = () => {
    moveAndRender()
    requestAnimationFrame(animate)
  }
  let step = 10

  canvas.width = innerWidth - 16

  animate()

  function moveAndRender() {
    if (square.x == 500) step = -1
    if (square.x == 0) step = 10
    square.x += step
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'rgb(228, 63, 219)'
    ctx.fillRect(square.x, square.y, square.width, square.height)
  }
}

{
  const p = document.querySelector('p')
  const lorem = p.innerText

  let i = 0

  p.innerText = ''
  setInterval(typeLetter, 150)

  function typeLetter() {
    p.innerText = lorem.slice(0, i++)
  }
}