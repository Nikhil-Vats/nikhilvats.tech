---
id: 6
title: Competitive Coding Q1 - Min Stack
series: Competitive Coding - Code along!
articleNo: 1
date: April 10, 2020
description: This is the first post of my new series Competitive Coding - Code along! I plan to add more questions (with solutions) and algorithms to this series as we go on. In this post, we will learn to design a Min stack i.e. a stack that supports pop, push, peek/top, retrieveMinElem in constant or O(1) time.
featuredImage: min-stack.png
---
### Question
Design a stack that supports push, pop, top, and retrieving the minimum element in constant or O(1) time.

1. push(x) -- Push element x onto stack.
2. pop() -- Removes the element on top of the stack.
3. top() -- Get the top element.
4. getMin() -- Retrieve the minimum element in the stack.

Note - If you are confused about what O(1)/constant time means, I have written a [separate comprehensive post](https://nikhilvats.tech/blog/merge-sort) covering the topic time complexity.

Now then, let's get to it! 

### Approach
#### What is a stack?
A stack is a linear data structure that follows a particular order in which the operations are performed. A simple example is a stack of plates placed over one another in a canteen. The plate which is at the top is the first one to be removed, i.e. the plate which has been placed at the bottommost position remains in the stack for the longest period of time. So, it can be simply seen to follow LIFO (Last in first out) order. If you want to learn more about it, take a look at this video -

<iframe width="560" height="315" src="https://www.youtube.com/embed/vZEuSFXSMDI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

We will use the inbuilt **stack** in the C++ STL(Standard template library) rather than implementing it ourselves. 

**stack** data structure has the following functions -
1. empty() – Returns whether the stack is empty
2. size() – Returns the size of the stack
3. top() – Returns a reference to the topmost element of the stack
4. push(x) – Adds the element ‘x’ at the top of the stack
5. pop() – Deletes the topmost element of the stack

#### Problem
All the above operations take O(1) time. Now, in our problem, there's just 1 additional constraint which is we have to keep track of the minimum element also. This poses the following problems -

1. While pushing we have to update the minimum element in case the new element is less than all the existing ones. This can be done simply by checking whether the newly inserted element is less than the current minimum element, if it is we can simply update the minimum element.

2. When popping, if the topmost element is minimum, we have to recalculate the minimum element but this recalculation takes O(n) time as we have to loop through all the elements to find the minimum one. To find the next minimum element in O(1) time, we will change the push, top and pop operations.

#### Solution
Let **s** be the stack, **x** be the element to be inserted and **minElem** be the current minimum element. Occasionally, we will denote the previous minimum element (before it was updated) by **prevMinElem**.
- **Push Operation**
```
    void push(x) {
    1. if(s.empty()) {
    2.    s.push(x);
    3.    minElem = x;
    4. } else if(x < minElem) {     // then x is the new minimum element
    5.     s.push(2*x-minElem);
    6.     minElem = x;
    7. } else
    8.     s.push(x);
    }
```

A. In line 5, we push **2*x - minElem** and not **x**, this is to keep track of previous the minimum element as we will see in a minute.

B. Note that, the topmost element i.e. 2*x - minElem is less than x (the new min element) because -
x < minElem (the old one)

=> x - minElem < 0

=> x - minElem + x < x (Add x on both sides)

=> **2x -  minElem < x**

Hence, now the **topmost element of stack** is less than **minElem**.

- **Pop Operation**
```
    void pop() {
    1. if(s.empty())
    2.    cout<<"Stack empty";
    3. else {
    4.     int top = s.top();
    5.     s.pop();
    6.     if(top < minElem)
    7.         minElem = 2*minElem - top;
    8. }
    }
```

A. In **Line 6**, we check if the element to be removed is less than the minimum element, this will happen if the last element inserted was the minimum element, so, as explained in push operation above, we stored **2*x - minElem in the topmost element** and updated the **minElem to store x**.

B. **Line 7** is the key step if we expand the expression above -
  minElem = 2*minElem - (2*x - prevMinElem)
  minElem = 2*x - (2*x - prevMinElem)
  minElem = prevMinElem
  Hence we have updated the minElem to store the prevMinElem.

- **Top Operation**

We have to update the top operation as well because if **x** was less than **minElem**, we pushed **2*x-minElem** in the stack and stored x in **minElem**. Hence, we change the top operation in the following manner -
```
int top() {
1. int top = s.top();
2. if(top < minElem)
3.     return minElem;
4. else
5.     return top;
}
```

A. In **line 2**, we check if top < minElem, if it is the case then we return minElem as we know that we pushed **2*x-prevMinElem** in the stack (hence top = 2*x - minElem) and **x** in **minElem**. 

B. If top is not < minElem, then we simply return minElem.

You are welcome to try the problem in your IDE now. If you are stuck anywhere, come back to the blog. 

### Code
```
class MinStack {
public:
    stack<int> s;
    int minElem;
    MinStack() {
        cout<<"Stack initialized";
    }
    
    void push(int x) {
        if(s.empty()) {
            minElem = x;
            s.push(x);
        } else if(x < minElem) {
            s.push(2*x-minElem);  
// push 2*x-minElem to keep track of prevMinElem
            minElem = x;
// update minElem to store x
        } else {
            s.push(x);
        }
    }
    
    void pop() {
        if(s.empty()) {
            cout<<"Stack empty";
        }
        int top = s.top();
        s.pop();
        if(t < minElem) {
            minElem = 2*minElem-top; // update minElem to prevMinElem
        }
    }
    
    int top() {
        int t = s.top();
        if(t < minElem)
            return minElem; 
        else
            return t;
    }
    
    int getMin() {
        return minElem;
    }
};
```

The hard part is over, take a bow! Let's come to time complexity now. We can easily see that the time complexity for each operation is O(1) since there is no loop, etc. and we are simply comparing numbers and performing basic stack operations that have time complexity O(1).

Tell me on [twitter](twitter.com/NikhilVatss) if you liked this article or have any suggestions or reviews. 