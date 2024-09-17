To understand Standard Template Library (STL) in C++ or Java Collections in Java, it helps to find the equivalents in JavaScript, which includes built-in data structures like arrays, sets, maps, and objects. Let's dive into some commonly used collections and their JavaScript counterparts.

### 1. **Arrays**
In C++ STL and Java Collections, arrays are essential structures for handling lists of data. JavaScript has its own version of arrays with various built-in methods.

- **C++ STL**: `std::vector`
- **Java**: `ArrayList`
- **JavaScript**: `Array`

**Common Array Methods:**
- `push()`, `pop()` (similar to `push_back()`/`pop_back()` in C++ STL)
- `shift()`, `unshift()` for front insertion/removal
- `slice()`, `splice()` for sub-arrays
- `filter()`, `map()`, `reduce()` for functional transformations

```javascript
let arr = [1, 2, 3, 4, 5];
arr.push(6);    // Add to the end of the array
arr.pop();      // Remove the last element
let subArr = arr.slice(1, 3);  // Extract subarray [2, 3]
```

### 2. **Sets**
A set is a collection of unique elements.

- **C++ STL**: `std::set`
- **Java**: `HashSet`, `TreeSet`
- **JavaScript**: `Set`

**Set Methods:**
- `add()`, `delete()`, `has()`, `clear()`

```javascript
let set = new Set();
set.add(1);
set.add(2);
console.log(set.has(1)); // true
set.delete(1);
console.log(set.has(1)); // false
```

### 3. **Maps (Dictionaries)**
A map is used to store key-value pairs.

- **C++ STL**: `std::map`, `std::unordered_map`
- **Java**: `HashMap`, `TreeMap`
- **JavaScript**: `Map`

**Map Methods:**
- `set()`, `get()`, `delete()`, `has()`, `clear()`

```javascript
let map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
console.log(map.get('key1')); // "value1"
map.delete('key2');
console.log(map.has('key2')); // false
```

### 4. **Stacks and Queues**
JavaScript doesn't have built-in stack or queue classes like Java or C++ STL, but arrays can be easily used as stacks or queues.

- **C++ STL**: `std::stack`, `std::queue`
- **Java**: `Stack`, `Queue`
- **JavaScript**: Use `Array` for both

**Stack Implementation:**
```javascript
let stack = [];
stack.push(1);   // Add to the top of the stack
stack.push(2);
stack.pop();     // Remove from the top
```

**Queue Implementation:**
```javascript
let queue = [];
queue.push(1);    // Add to the back of the queue
queue.push(2);
queue.shift();    // Remove from the front
```

### 5. **Objects (Similar to HashMaps/HashTables)**
JavaScript objects can be used as dictionaries or hashmaps where the keys are strings or symbols.

- **C++ STL**: `std::unordered_map`
- **Java**: `HashMap`
- **JavaScript**: `Object`

```javascript
let obj = { key1: 'value1', key2: 'value2' };
console.log(obj['key1']);   // Access value by key
obj.key3 = 'value3';        // Add new key-value pair
delete obj.key2;            // Delete a key-value pair
```

### 6. **WeakMap and WeakSet**
JavaScript also offers `WeakMap` and `WeakSet`, which are similar to `Map` and `Set` but hold weak references to objects, allowing garbage collection.

- **C++ STL**: Not available
- **Java**: Not available
- **JavaScript**: `WeakMap`, `WeakSet`

```javascript
let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, 'value');
console.log(weakMap.get(obj)); // 'value'
```

### Summary Table

| Concept         | C++ STL           | Java              | JavaScript     |
|-----------------|-------------------|-------------------|----------------|
| **Array**       | `std::vector`      | `ArrayList`       | `Array`        |
| **Set**         | `std::set`         | `HashSet`         | `Set`          |
| **Map**         | `std::map`         | `HashMap`         | `Map`, `Object`|
| **Stack**       | `std::stack`       | `Stack`           | `Array`        |
| **Queue**       | `std::queue`       | `Queue`           | `Array`        |
| **WeakMap/Set** | Not available      | Not available     | `WeakMap`, `WeakSet` |

Each of these collections and methods helps you manage data more effectively, just like STL or Java Collections do in their respective languages.

Would you like a more detailed explanation of any specific data structure?