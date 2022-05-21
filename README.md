# Algorithms
This is repository to store my labs in Algorithms.

## Lab1 
### Hashes
Lab1 is Ideal Hashing. <br />I created hash function based on algorithm described in [Introduction to Algorithms 3rd Edition ](https://www.flipkart.com/introduction-algorithms-3rd/p/itmdwxyrafdburzg?pid=9788120340077&affid=sandeepgfg).<br />Was added some custom logic in hash function to remove collisions.

Type of values: **Real numbers**

#### functions.js
isPrime: (n: number) => bool - returns true if n is prime<br />
getPrime: (n: number) => number - returns next prime number after n<br />
getSignMantissaExponent(value: number) => [sign, mantissa, exp] => gets parameters(sign, mantissa, exp) which are used in hashing value<br />
hashHelper: (value:number, a: number, b: number, c: number, hashes: Array) => function for hashing value and adding in to the HashTable or SecondaryHashTable<br />

#### HashTable.js
class Hashtable contains constructor for hashing the array, functions for adding value and printing the hashTable.<br />
main() => void - function to start the app

#### SecondaryHashTable.js
class SecondaryHashTable similar to HashTable class but has methods for rehashing to avoid collisions.

## Lab2
### Trees
Lab2 is Trees. <br />
I need to implement B Tree and Interval Tree(Based on Red-Black tree)

Type of values: **Complex numbers**

#### BTree.js
This file contains classes BTreeNode and BTree.<br />
I created functions for inserting, traversing and searching in BTree

#### IntervalTree.js
There I created classes **Interval**, **Node**, **IntervalTree**.<br />
I used article [Javascript red-black tree](https://dev.to/igorok/javascript-red-black-tree-4703) and added logic for working with complex numbers intervals to create Interval Tree.

#### Complex.js
**Complex** is class for complex nums which can compare them using **getComplexModule** function.

#### Main.js
functions to read data from txt files and filling trees with data.
