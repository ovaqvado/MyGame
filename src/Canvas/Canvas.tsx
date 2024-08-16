import React from "react";
import style from "../App.module.css";

interface CanvasProps extends React.CanvasHTMLAttributes<HTMLCanvasElement> {}

const Canvas: React.FC<CanvasProps> = (props) => (
  <canvas className={style.canvas_box} width="1200px" />
);

export default Canvas;
