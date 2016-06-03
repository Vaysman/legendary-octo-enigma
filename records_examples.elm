import Html exposing (text)


x1 = 0
y1 = 0

x2 = 1
y2 = 3

p1 = { x = 0, y = 0, k = 5.5 }
p2 = { x = 1, y = 3 }

p3 = { p1 | x = 6, y = -3 }

sum {x} =
   x

main =
  text (toString(sum p3))
