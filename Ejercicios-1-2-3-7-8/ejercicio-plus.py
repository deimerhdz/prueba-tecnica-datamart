from ejercicio8 import binary_search
import multiprocessing as mp
import time

def search(list1,list2):
    n = len(list1) - 1
    result =[]
    for item in list2:
        value = binary_search(list1,item,0, n)
        result.append(value)
    return result

if __name__ == '__main__':
    domain = list(range(1000000))
    target = list(range(0,1000000))
    start = time.time()
    search(domain,target)
    end = time.time()
    print(f'caso 1 {end-start}')


    domain = list(range(1000000))
    target2 = list(range(0,1000000))
    p2 = mp.Process(target=search,args=(domain,target2))
    start = time.time()
    p2.start()
    end = time.time()
    print(f'caso 2 {end-start}')
