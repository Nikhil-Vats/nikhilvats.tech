---
id: 5
title: Merge Sort - Algorithm Analysis
date: March 28, 2020
series: Data Structures and Algorithms - A complete course
articleNo: 4
description: In this article, we will learn the algorithm for Merge Sort, one of the most popular algorithms for sorting. We will also analyze its performance and compare it with Insertion Sort.
featuredImage: merge-sort.jpg
---
#### Recap -
1. **Insertion Sort** is one of the simplest algorithms for sorting. It sorts a list/array by looping through it and placing each element at its correct position in the sorted array which starts from *0th element* and ends at *current_position-1*.

2. **Pseudocode** is an informal way of writing programs that do not require any strict programming language syntax.

3. Insertion Sort takes **linear time** to run in the best case (sorted) and **quadratic time** in the worst (reverse sorted) and average case.

In this article, we will learn about some of the common ways of designing algorithms before moving on to merge sort, its running time and its comparison with insertion sort.

### Designing Algorithms

Some of the common ways of designing algorithms are - 

1. **Incremental approach**: Building the solution one component at a time. Ex - Insertion Sort

2. **Divide and Conquer approach**: Breaking the problem into several sub-problems of smaller size (unit size), solving them recursively and finally, combining their solutions to find the solution for the original problem. Ex - Merge Sort

### Merge Sort

Merge Sort, being a divide and conquer algorithm includes the following steps - 
1. **Divide**: Split the **n** element sequence into two subsequences of n/2 elements each.

2. **Conquer**: Recursively, sort the two subsequences by dividing them further into smaller subsequences until we reach atomic subsequences (subsequences containing one element each).

3. **Combine**: Merge the two sorted sequences into one sorted sequence repeatedly to find the solution.

Note - In the above steps, sequence means an array/list/etc., we will use these terms interchangeably from now on.

#### Merge Sort Algorithm

Merge sort algorithm is illustrated below -

<iframe width="560" height="315" src="https://www.youtube.com/embed/JSceec-wEyw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    MERGE-SORT (A, p, r) 
    1.   if p < r                      //check for base case
    2.        q ← ⌊(p + r) / 2⌋        //divide
    3.        MERGE-SORT (A, p, q)     //conquer
    4.        MERGE-SORT (A, q + 1, r) //conquer
    5.        MERGE (A, p, q, r)       //combine
 
Note - For any real number x, we denote the greatest integer less than or equal to x by ⌊x⌋ (read “the floor of x”) and the least integer greater than or equal to x by ⌈x⌉ (read “the ceiling of x”).  

**Step 1** checks for the base case i.e. checks that the array doesn't contain only one element (p = r) and proceeds only if that's not the case.

**Step 2** divides the array into two parts p...q and q+1...r.

**Step 3** recursively calls the function MERGE-SORT on the first array (p...q).

**Step 4** recursively calls the function MERGE-SORT on the second array (q+1...r).

**Step 5** combines the two arrays by calling another function MERGE. The pseudocode for MERGE(A, p, q, r) is given below.

```
MERGE(A, p, q, r)
    n1 = q - p + 1
    n2 = r - q

    /* create temporary arrays */
    Let L[n1] and R[n2] be new arrays.

    /* Copy data to temporary arrays L[] and R[] */
    for i = 1 to n1
        L[i] = A[p + i]

    for j = 1 to n2
        R[j] = A[q + 1 + j]; 

    /* Merge the temp arrays back into A[p..r]*/
    i = 0; // Initial index of first subarray 
    j = 0; // Initial index of second subarray 
    k = p; // Initial index of merged subarray
    while i < n1 && j < n2  
        if L[i] <= R[j]
            A[k] = L[i]; 
            i++;  
        else
            A[k] = R[j]; 
            j++;  
        k++; 

    /* Copy the remaining elements of L[], if any */
    while i < n1
        A[k] = L[i]; 
        i++; 
        k++; 

    /* Copy the remaining elements of R[], if any */
    while j < n2
        A[k] = R[j]; 
        j++; 
        k++; 
```

#### Merge Sort Analysis

Analyzing divide and conquer algorithms results in recurrences relation, for example in merge sort -

1. Divide: D(n) = Θ(1) as dividing takes constant time.
2. Conquer: solve two subproblems, each of size n/2, which contributes 2T(n/2) to the running time.
3. Combine: the MERGE procedure on an n-element subarray takes time Θ(n) because we only loop through elements of different arrays, so C(n) = Θ(n).

Hence T(n) = Θ(1) if n = 1 (already sorted so, constant time) and T(n) = 2T(n/2) + Θ(n) if n > 1

Solving this, we get T(n) = Θ(nlogn) i.e. a quasilinear function. Hence, merge sort takes linearithmic/quasilinear running time in the best, average and worst case. We will discuss the different ways of solving it in the next article, for now, just focus on the result. 

#### Merge Sort vs Insertion Sort

Now, let's see why running time is important by comparing insertion sort (running time = c1.n<sup>2</sup>) with merge sort (running time = c2.nlogn) . Take two computers A and B sorting 10<sup>7</sup> numbers -
1. Computer A performs Insertion sort and executes 10-billion instructions per second
Computer A is 1000 times faster than B.
Suppose c1 = 2.
It takes c1.n<sup>2</sup>/execution speed = 2.(10<sup>7</sup>)<sup>2</sup> instructions / 10<sup>10</sup> instructions per second
= 20000 seconds
= more than 5.5 hours
If rather we sort 100 million numbers than computer A would take more than 23 days.

2. Computer B performs Merge sort and executes 10 million instructions per second
Suppose c2 = 50
It takes c2.nlogn/execution speed = 50.10<sup>7</sup> log 10<sup>7</sup> instructions / 10<sup>7</sup> instructions per second
= 1163 seconds
= less than 20 minutes
If rather we sort 100 million numbers than computer B would take less than 4 hours.

Hence, even when the computer performing Insertion sort was 1000 times faster and the constant c1 was also less for Insertion sort, the computer performing Merge sort takes much less time when the number of elements is very large. 

That's it for this one. Please tell me on [Twitter](https://twitter.com/NikhilVatss) if there are any mistakes, doubts or suggestions. As I said, we will discuss various ways of solving recurrence relations in the next article to see how we got the running time for merge sort.