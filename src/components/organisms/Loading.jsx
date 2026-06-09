import { useEffect, useRef } from "react";
import '../../stylesheets/Loading.module.css';

function Loading() {
  const canvasRef = useRef(null);
  const canvas2Ref = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const canvas2 = canvas2Ref.current;
    const ctx2 = canvas2.getContext("2d");

    const cw = window.innerWidth;
    const ch = window.innerHeight;
    const charArr = "abcdefghijklmnopqrstuvwxyz".split("");
    const fontSize = 10;
    const maxColumns = cw / fontSize;

    let fallingCharArr = [];

    canvas.width = canvas2.width = cw;
    canvas.height = canvas2.height = ch;

    function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    function randomFloat(min, max) {
      return Math.random() * (max - min) + min;
    }

    function Point(x, y) {
      this.x = x;
      this.y = y;
    }

    Point.prototype.draw = function (ctx) {
      this.value = charArr[randomInt(0, charArr.length - 1)].toUpperCase();
      this.speed = randomFloat(1, 5);

      ctx2.fillStyle = "rgba(255,255,255,0.8)";
      ctx2.font = fontSize + "px sans-serif";
      ctx2.fillText(this.value, this.x, this.y);

      ctx.fillStyle = "#0F0";
      ctx.font = fontSize + "px sans-serif";
      ctx.fillText(this.value, this.x, this.y);

      this.y += this.speed;
      if (this.y > ch) {
        this.y = randomFloat(-100, 0);
        this.speed = randomFloat(2, 5);
      }
    };

    for (let i = 0; i < maxColumns; i++) {
      fallingCharArr.push(new Point(i * fontSize, randomFloat(-500, 0)));
    }

    function update() {
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(0, 0, cw, ch);

      ctx2.clearRect(0, 0, cw, ch);

      let i = fallingCharArr.length;
      while (i--) {
        fallingCharArr[i].draw(ctx);
      }

      requestAnimationFrame(update);
    }

    update();
    return () => {
      cancelAnimationFrame(update);
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0 }} />
      <canvas
        ref={canvas2Ref}
        style={{ position: "absolute", top: 0, left: 0 }}
      />
    </div>
  );
}

export default Loading;

