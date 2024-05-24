from nodo import Nodo

class BinaryTree:
    
    def __init__(self,value):
        self.root = Nodo(value)

    def __insert(self,nodo,value):
        if value < nodo.value:
            if nodo.left is None:
                nodo.left = Nodo(value)
            else:
                self.__insert(nodo.left,value)
        else:
            if nodo.right is None:
                nodo.right = Nodo(value)
            else:
                self.__insert(nodo.right,value)

    def __show_elements(self,nodo):
        if nodo is not None:
            print(nodo.value,end=", ")
            self.__show_elements(nodo.left)
            self.__show_elements(nodo.right)

    def __search(self,nodo,term):
        if nodo is None:
            return None
        if nodo.value == term:
            return nodo
        if term < nodo.value:
            return self.__search(nodo.left,term)
        else:
            return self.__search(nodo.right,term)


    def add(self,value):
        self.__insert(self.root,value)

    def list(self):
        self.__show_elements(self.root) 
    
    def search(self,term):
        return self.__search(self.root,term)