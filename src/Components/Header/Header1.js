import { memo } from "react";

// Импортируем стили сброса и иконки
import resets from "../../_resets.module.css";
import { Ellipse1Icon } from "./Ellipse1Icon.js";
import { Ellipse2Icon } from "./Ellipse2Icon.js";
import classes from "./Header1.module.css";

// Определение компонента Header1 с использованием мемов
const Header1 = memo(function Header1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      {/* Выводим прямоугольник, если hide.rectangle1 равен false */}
      {!props.hide?.rectangle1 && <div className={classes.rectangle1}></div>}

      {/* Отображаем иконку Ellipse2 */}
      <div className={classes.ellipse2}>
        <Ellipse2Icon className={classes.icon} />
      </div>

      {/* Отображаем иконку Ellipse1 */}
      <div className={classes.ellipse1}>
        <Ellipse1Icon className={classes.icon2} />
      </div>

      {/* Выводим текст из props.text.test, если он существует, иначе выводим 'testLab' */}
      {props.text?.test != null ? (
        props.text?.test
      ) : (
        <div className={classes.test}>testLab</div>
      )}

      {/* Группируем неименованные блоки текста */}
      <div className={classes.frame14}>
        {/* Выводим текст из props.text.unnamed, если он существует, иначе выводим 'Как это работает' */}
        {props.text?.unnamed != null ? (
          props.text?.unnamed
        ) : (
          <div className={classes.unnamed}>Как это работает</div>
        )}

        {/* Выводим текст из props.text.unnamed2, если он существует, иначе выводим 'Стоимость' */}
        {props.text?.unnamed2 != null ? (
          props.text?.unnamed2
        ) : (
          <div className={classes.unnamed2}>Стоимость</div>
        )}

        {/* Выводим текст из props.text.unnamed3, если он существует, иначе выводим 'Вопросы и ответы' */}
        {props.text?.unnamed3 != null ? (
          props.text?.unnamed3
        ) : (
          <div className={classes.unnamed3}>Вопросы и ответы</div>
        )}

        {/* Выводим текст из props.text.unnamed4, если он существует, иначе выводим 'Форма' */}
        {props.text?.unnamed4 != null ? (
          props.text?.unnamed4
        ) : (
          <div className={classes.unnamed4}>Форма</div>
        )}
      </div>
    </div>
  );
});

export default Header1;
