from turtle import *
penup()
goto(-150, -150)
pendown()
begin_fill()
fillcolor("yellow")
for i in range(2):
    forward(300)
    left(90)
    forward(200)
    left(90)
end_fill()

penup()
goto(-175, 50)
pendown()
begin_fill()
fillcolor("brown")
forward(350)
left(120)
forward(350)
left(120)
forward(350)
left(120)
end_fill()

penup()
goto(-50, -150)
pendown()
begin_fill()
fillcolor("brown")
for i in range(2):
    forward(50)
    left(90)
    forward(100)
    left(90)
end_fill()

penup()
goto(50, -50)
pendown()
begin_fill()
fillcolor("light blue")
for i in range(4):
    forward(40)
    left(90)
end_fill()

penup()
goto(-100, -50)
pendown()
begin_fill()
fillcolor("light blue")
for i in range(4):
    forward(40)
    left(90)
end_fill()


exitonclick()