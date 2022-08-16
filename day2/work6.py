class Calculator:
    def __init__(self):
        self.output = 0

    def __add(self, a, b):
        return a+b

    def __sub(self, a, b):
        return a-b

    def __mul(self, a, b):
        return a*b

    def __div(self, a, b):
        return a/b

    def calculation(self):
        a = int(input("1つ目の値を入力してください >"))
        calc = input("+,-,*,/ >")
        b = int(input("2つ目の値を入力してください >"))
        if calc == "+":
            self.output = self.__add(a, b)
        if calc == "-":
            self.output = self.__sub(a, b)
        if calc == "*":
            self.output = self.__mul(a, b)
        if calc == "/":
            self.output = self.__div(a, b)
        print(self.output)

calculator = Calculator()
calculator.calculation()