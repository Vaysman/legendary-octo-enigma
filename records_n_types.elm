import Html exposing (text)
import List
import String

list1 = [1, 2, 3, 4, 5]

list2 = [True, True, False]

power2 = 
  \n -> n * n
  
even_odd =
  \n -> if n % 2 == 0 then "even" else "odd"

new_list = List.map power2 list1


{-- 
Типы

Открыть
http://elm-lang.org/examples/hello-html
И в правом окне заменить текст на содержимое этого файла

1. Описать типы list1, list2, power2, even_odd и new_list
2. Описать функцию которая возврящает логическое значение в зависимости от того, 
   является ли число кратным 3. Тип функции указать.
3. Описать функцию которая превращает список целых чисел в спиской чисел с плавающей запятой.
   Тип функции указать.

--}

{--
Records
Описывать типы тут не нужно.

4. Описать запись которая описывает прямую в 3х мерном пространстве. Координаты задать числами с плавающей запятой.
5. Описать функцию которая вычисляет длинну линии.
6*. Описать функцию которая увеличивает длинну линии на 3.

--}


main =
  text (toString new_list)
