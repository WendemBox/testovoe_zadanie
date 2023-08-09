// Импортируем мемо и SVGProps из библиотеки React
import { memo } from "react";
import React from "react";

// Компонент иконки Ellipse2Icon
const Ellipse2Icon = function (props) {
  return (
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Рисуем круг белый */}
      <circle cx={12} cy={12} r={12} fill="#ECEFF2" />
    </svg>
  );
};

// Оборачиваем компонент Ellipse2Icon в мемоизированную версию
const Memo = memo(Ellipse2Icon);

// Экспортируем мемоизированную иконку Ellipse2Icon
export { Memo as Ellipse2Icon };
