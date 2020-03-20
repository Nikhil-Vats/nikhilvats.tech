---
title: Complexity Analysis
date: March 18 2020
description: In this article, we will discuss different kinds of complexity analysis like the worst case, best case, and average case. We will also discuss various asymptotic notations which will enable us to analyze the performance of programs.
featuredImage: complexity-analysis.jpg
series: Data Structures and Algorithms - A complete course
articleNo: 2
---
#### Recap
1. Data structures are used for storing data and organizing data in a way such that the required operations like sorting, inserting can be performed efficiently.
2. An algorithm is a finite set of instructions designed to perform a specific task.
3. Data structures and algorithms together make a program.

### Complexity Analysis
There are two types of complexity we analyze when we design an algorithm  -
1. Time Complexity tells us how much time an algorithm takes to complete.
2. Space Complexity tells us how much storage does this algorithm need for completion.

#### Kinds of time complexity analysis -
##### 1. Worst case
- upper bound on running time for *any* input. 
- T(n) = maximum time of an algorithm on any input of size **n**.

##### 2. Average case
- Expected running time over *all* inputs.
- T(n) = expected running time of an algorithm over all inputs of size **n**.

##### 3. Best case
- lower bound on running time for *any* input.
- T(n) = minimum time of an algorithm on any input of size **n**.

### Asymptotic Notations
Asymptotic notations are a very important part of this course and it will really haunt you (>_<) if you don't understand them properly. Most of us face difficulties at first in understanding asymptotic notations, in my case, I read class notes, [stack overflow](https://stackoverflow.com/questions/1364444/difference-between-big-o-and-little-o-notation), and [this book](https://github.com/CodeClub-JU/Introduction-to-Algorithms-CLRS/blob/master/Introduction%20to%20Algorithms%20-%203rd%20Edition.pdf) before my mid-semester exam to understand them. The issue is as we move on to the o (little-oh) and w (little-omega) notations, we get confused. So, I have summarised all I have learned from the above resources to explain in the best way possible.  Pay attention y'all or maybe take a break and come back with a fresh mind?

The asymptotic notations are of the following five types -
#### 1. O (Big-Oh) notation
O-notation, pronounced "big-oh notation", is used to describe the asymptotic upper bound of an algorithm. Formally, it is defined as:

For a given function, g(n) , we denote by O(g(n)) the set of functions,
O(g(n)) = { f(n): there exist **positive constants c and n<sub>0</sub>** such that
**0 <= f(n) <= c.g(n) for all n >= n<sub>0</sub>** }.
![Big-O-notation-graph](https://dev-to-uploads.s3.amazonaws.com/i/m7acz08xwugmq2vh3gm7.png)

Some common O notations are -
1. O(1) - constant, independent of size n
2. O(log n) - logarithmic
3. O(n) - linear
4. O(nlogn) = O(logn!) - loglinear, quasilinear or linearithmic
5. O(n<sup>2</sup>) - quadratic
6. O(n<sup>c</sup>) - polynomial or algebraic
7. O(c<sup>n</sup>) where c > 1 - exponential
8. O(n!) - factorial

![Big O complexity chart](https://dev-to-uploads.s3.amazonaws.com/i/aixxzxil4rn7kr38nrn3.png)

#### 2. Ω (Big-Omega) notation
Ω-notation, pronounced "big-omega notation", is used to describe the asymptotic lower bound of an algorithm. Formally, it is defined as:

For a given function, g(n), we denote by Ω(g(n)) the set of functions,
Ω(g(n)) = { f(n): there exist **positive constants c and n<sub>0</sub>** such that 
**0 <= c.g(n) <= f(n) for all n >= n<sub>0</sub>** }. 

![Big Omega](https://dev-to-uploads.s3.amazonaws.com/i/vs3tlsw98c9ixq14uz0i.png)

#### 3. Θ (Theta) notation
We talked about O notation above. The disadvantage of describing the complexity of an algorithm in terms of O notation is that if we say that an algorithm runs in f(n)=O(n<sup>2</sup>), then that algorithm could actually run in n time.

Here comes the role of Θ notation. Usually, we want to be able to say that an algorithm runs no slower and no faster than a particular function. This is called a **tight bound**. Hence, we define Θ notation as -

For a given function, g(n), we denote by Θ(g(n)) the set of
functions
Θ(g(n)) = { f(n): there exist **positive constants c1 , c2 , and n<sub>0</sub>** such that **0 ≤ c1.g(n) <= f(n) <= c2.g(n) for all n >= n<sub>0</sub>** }.

![Theta-notation](https://dev-to-uploads.s3.amazonaws.com/i/gswj37ipze0qbdinr3tr.png)

#### 4. o (little-oh) notation

1. o-notation, pronounced little-oh notation, is used to denote a upper bound that is not **asymptotically tight**.
2. **Asymptotically tight**: We say a bound f(n) = O(g(n)) is asymptotically tight if f(n) = Θ(g(n)), that is, if also g(n) = O(f(n). The bound 2n<sup>2</sup> = O(n<sup>2</sup>) is asymptotically tight as n<sup>2</sup> = O(2n<sup>2</sup>) also hold, but the bound 2n = O(n<sup>2</sup>) is not as n<sup>2</sup> != O(2n) because there is no c for which c.2n >= n<sup>2</sup> for n>n<sub>o</sub>. So 2n = o(n<sup>2</sup>) but 2n<sup>2</sup> != o(n<sup>2</sup>).
3.  For a given function, g(n), we denote by o(g(n)) the set of functions
o(g(n)) = { f(n): for any positive constant **c > 0**, there exists a constant **n<sub>0</sub> > 0 such that 0 <= f(n) < c.g(n) for all n >= n<sub>0</sub>** }.
4. The implication of this is that g(n) becomes insignificant relative to f(n) as n approaches infinity: 
![limit for little oh](https://dev-to-uploads.s3.amazonaws.com/i/b2n7wi9zwkzwciisogi3.png)

So the main differences between Big O and small O are points 2 and 4 and the fact that there is no equality in the definition of little oh (in point 3, compare with the definition of Big O). Apart from these, some other differences (picked from [here](https://stackoverflow.com/questions/1364444/difference-between-big-o-and-little-o-notation)) are -
- In Big-O, it is only necessary that you find a particular multiplier c for which the inequality holds beyond some minimum n. In Little-o, it must be that there is a minimum x after which the inequality holds no matter how small you make c, as long as it is not negative or zero.
- Although somewhat counter-intuitively, Little-oh is the stronger statement. There is a much larger gap between the growth rates of f and g if f ∈ o(g) than if f ∈ O(g).
- One illustration of the disparity is this: f ∈ O(f) is true, but f ∈ o(f) is false.
- Therefore, Big-Oh can be read as "f ∈ O(g) means that f's asymptotic growth is no faster than g's", whereas little-o can be read as "f ∈ o(g) means that f's asymptotic growth is strictly slower than g's". It's like <= versus <.

#### 5. ω (little-omega) notation
1. ω-notation, pronounced little-omega notation, is used to denote a lower bound that is not asymptotically tight.
2. For a given function, g(n), we denote by ω(g(n)) the set of functions
ω(g(n)) = { f(n): for any positive constant **c > 0**, there exists a constant **n<sub>0</sub> > 0 such that 0 <= c.g(n) < f(n) for all n >= n<sub>0</sub>** }.
3. The implication of this is that g(n) becomes insignificant relative to f(n) as n approaches infinity:
![limit for small omega](https://dev-to-uploads.s3.amazonaws.com/i/mwof78w8th740wiuvnwz.png)

We can analyze the differences between little and big omega in a similar manner as done above.

Some relational properties of the notations are given below -
![Transitivity](https://dev-to-uploads.s3.amazonaws.com/i/bliombyq2d56saqoj6k8.png)

![Reflexivity](https://dev-to-uploads.s3.amazonaws.com/i/24b25nqi3obt0s8ujs7g.png)

![Symmetry](https://dev-to-uploads.s3.amazonaws.com/i/g6ouyqv0f6p8kzm3actm.png)

Thanks for bearing me, this was a long one for all of us. I hope you understood. If you have any doubts/suggestions/reviews, please let me know in the comment section. Your one single praise can go a long way in motivating me xD. In the coming articles, we will use the notations described above, so if you are lost about what the use of these notations is, read the next article.