import Html exposing (text)
import List

list1 = [1, 2, 3, 4, 5]

list2 = [1..101]

power2 = 
  \n -> n * n

new_list = List.map power2 list2

{-- 

Открыть
http://elm-lang.org/examples/hello-html
И в правом окне заменить текст на содержимое этого файла

Полезные функции
List.filter
List.maximum
List.minimum
List.sum
List.product
List.length
List.drop
List.take

Документация по различным функциям
http://package.elm-lang.org/packages/elm-lang/core/4.0.0/

Документация по функциям для списков
http://package.elm-lang.org/packages/elm-lang/core/4.0.0/List

Задания

Для списка целых чисел от 1 до 101

1. Посчитать сумму всех элементов
2. Посчитать количество элементов
3. Посчитать сумму кубов
4. Посчитать произведение первых 5 элементов
5. Сделать из этого списка новый, который содержит только четные значения
6. Посчитать сумму кубов кратных 4
--}


main =
  text (toString new_list)
