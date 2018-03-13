def hello():
    return "Hello, Wrold"


def greeting(name="No One"):
    return "Hello, {}".format(name)

if __name__ == '__main__':
    print(hello())
    print(greeting(name='Taq'))  # Hello, Taq
    print(greeting())  # Hello, No One
