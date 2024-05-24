from binaryTree import BinaryTree

binaryTree = BinaryTree(1)

binaryTree.add(2)
binaryTree.add(3)
binaryTree.add(4)
binaryTree.add(5)
binaryTree.add(6)
binaryTree.add(7)

binaryTree.list()

value = int(input("Ingresa un valor a buscar"))
nodo = binaryTree.search(value)
if nodo is None:
    print(f"the value: {value} does not exist")
else:
    print(f"found value: {nodo.value}")