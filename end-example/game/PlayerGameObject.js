class PlayerGameObject extends GameObject {
  playerX
  playerY
  playerSpeed

  constructor(name) {
    super(name)
  }

  start() {
    this.playerX = 125
    this.playerY = 90
    this.playerSpeed = 50
  }

  update() {
    if (Input.keysdown.includes("ArrowUp")) {
      this.playerY -= this.playerSpeed * Time.deltaTime
    }
    if (Input.keysdown.includes("ArrowDown")) {
      this.playerY += this.playerSpeed * Time.deltaTime
    }
    if (Input.keysdown.includes("ArrowLeft")) {
      this.playerX -= this.playerSpeed * Time.deltaTime
    }
    if (Input.keysdown.includes("ArrowRight")) {
      this.playerX += this.playerSpeed * Time.deltaTime
    }

    if (this.playerX < 50) this.playerX = 50
    if (this.playerX > 200) this.playerX = 200
    if (this.playerY < 75) this.playerY = 75

  }

  draw() {
    ctx.beginPath()
    ctx.fillStyle = "green"
    ctx.strokeStyle = "yellow"
    ctx.lineWidth = 5
    ctx.arc(this.playerX, this.playerY, 50, 0, Math.PI * 2)

    ctx.fill()
    ctx.stroke()
  }
}