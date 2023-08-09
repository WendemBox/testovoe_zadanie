// Импортируем мемо из библиотеки React
import { memo } from "react";
import React from "react";

// Компонент иконки Ellipse1Icon
const Ellipse1Icon = function (props) {
  return React.createElement(
    "svg",
    {
      ...props,
      preserveAspectRatio: "none",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    // голубой круг
    React.createElement("circle", { cx: 12, cy: 12, r: 12, fill: "#2A6CEA" })
  );
};

// Оборачиваем компонент Ellipse1Icon в мемоизированную версию
const Memo = memo(Ellipse1Icon);

// Экспортируем мемоизированную иконку Ellipse1Icon
export { Memo as Ellipse1Icon };
