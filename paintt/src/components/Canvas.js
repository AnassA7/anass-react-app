import React, { useRef, useState, useEffect } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState(null);
  const [color, setColor] = useState("#000000");
  const [isErasing, setIsErasing] = useState(false); // Mode gomme
  const [eraserSize, setEraserSize] = useState(10); // Taille de la gomme
  const [isFilling, setIsFilling] = useState(false); // Mode remplissage

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 800;
    canvas.height = 600;
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.strokeStyle = color;
    setContext(ctx);
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    if (!isFilling) {
      const { offsetX, offsetY } = nativeEvent;
      context.beginPath();
      context.moveTo(offsetX, offsetY);
      setIsDrawing(true);
    }
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing || isFilling) return;
    const { offsetX, offsetY } = nativeEvent;
    context.lineTo(offsetX, offsetY);
    context.stroke();
  };

  const stopDrawing = () => {
    context.closePath();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
    if (context && !isErasing) {
      context.strokeStyle = e.target.value;
    }
  };

  // Active ou désactive la gomme
  const toggleEraser = () => {
    setIsErasing(!isErasing);
    setIsFilling(false); // Désactiver le remplissage en mode gomme
    if (context) {
      context.strokeStyle = isErasing ? color : "#FFFFFF";
      context.lineWidth = isErasing ? 3 : eraserSize;
    }
  };

  // Change la taille de la gomme
  const handleEraserSizeChange = (e) => {
    const newSize = e.target.value;
    setEraserSize(newSize);
    if (isErasing && context) {
      context.lineWidth = newSize;
    }
  };

  // Active ou désactive le mode remplissage
  const toggleFill = () => {
    setIsFilling(!isFilling);
    setIsErasing(false); // Désactiver la gomme en mode remplissage
  };

  // Fonction de remplissage par zone
  const fillArea = (x, y) => {
    const canvas = canvasRef.current;
    const ctx = context;
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const targetColor = getColorAtPixel(imageData, x, y);
    const fillColor = hexToRGBA(color);

    if (!colorsMatch(targetColor, fillColor)) {
      floodFill(imageData, x, y, targetColor, fillColor);
      ctx.putImageData(imageData, 0, 0);
    }
  };

  const getColorAtPixel = (imageData, x, y) => {
    const { data, width } = imageData;
    const index = (y * width + x) * 4;
    return [data[index], data[index + 1], data[index + 2], data[index + 3]];
  };

  const colorsMatch = (a, b) => {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
  };

  const hexToRGBA = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b, 255];
  };

  const floodFill = (imageData, x, y, targetColor, fillColor) => {
    const { data, width, height } = imageData;
    const stack = [[x, y]];

    while (stack.length > 0) {
      const [currentX, currentY] = stack.pop();
      const index = (currentY * width + currentX) * 4;

      if (
        currentX >= 0 &&
        currentX < width &&
        currentY >= 0 &&
        currentY < height &&
        colorsMatch(
          [data[index], data[index + 1], data[index + 2], data[index + 3]],
          targetColor
        )
      ) {
        data[index] = fillColor[0];
        data[index + 1] = fillColor[1];
        data[index + 2] = fillColor[2];
        data[index + 3] = fillColor[3];

        stack.push([currentX + 1, currentY]);
        stack.push([currentX - 1, currentY]);
        stack.push([currentX, currentY + 1]);
        stack.push([currentX, currentY - 1]);
      }
    }
  };

  const handleCanvasClick = (e) => {
    if (isFilling) {
      const { offsetX, offsetY } = e.nativeEvent;
      fillArea(offsetX, offsetY);
    }
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onClick={handleCanvasClick}
        style={{
          border: "2px solid #000",
          cursor: isFilling
            ? "crosshair"
            : isErasing
            ? `url('http://localhost:3000/icons/gomme.png') ${eraserSize / 2} ${
                eraserSize / 2
              }, auto`
            : "crosshair",
        }}
      />
      <div style={{ marginTop: "10px" }}>
        <button onClick={clearCanvas} style={{ marginRight: "10px" }}>
          Effacer tout
        </button>
        <button onClick={toggleEraser} style={{ marginRight: "10px" }}>
          {isErasing ? "Désactiver la gomme" : "Activer la gomme"}
        </button>
        <button onClick={toggleFill} style={{ marginRight: "10px" }}>
          {isFilling ? "Désactiver le remplissage" : "Activer le remplissage"}
        </button>
        <input
          type="color"
          value={color}
          onChange={handleColorChange}
          title="Choisir une couleur"
          disabled={isErasing}
          style={{ marginRight: "10px" }}
        />
        {isErasing && (
          <input
            type="range"
            min="5"
            max="50"
            value={eraserSize}
            onChange={handleEraserSizeChange}
            title="Taille de la gomme"
          />
        )}
      </div>
    </div>
  );
};

export default Canvas;
