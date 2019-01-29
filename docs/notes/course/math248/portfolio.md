# Portfolio
Professor J. Hallam
12/14/2018

## Reflection

<p style="line-height:2;">
Proofs in math are important for a multitude of reasons. I think, in particular proofs are important because they establish absolute certainty that a theorem is factual or factious. If you have written a sound proof no one is able to disprove the theorem. Said theorem is now something that is universally agreed upon. On top of this, once a theorem has been proved it can now be used as a building block to prove other theorems. Proofs allow us to question everything, it provides a critical lens for all theorems or statements. Only once we have completely broken down a theorem and built it back up to prove its result can we take the theorem for fact.</p>

<p style="line-height:2;">
Prior to this course, the only type of "proof" exposure I had was from high school geometry. On the first day of class Professor Hallam said the proofs in this class would be of paragraph form and are unrelated to the types of proofs we may have done in geometry class. That being said, I essentially entered this class not knowing what or how to write a proof. After laying down the foundation of logic we would dive into our first proof technique, Direct Proofs. Through many lectures, notes, homework assignments, and two exams, I have now developed a toolset encompassing multiple proof techniques which will be displayed below. Overtime I have been able to improve my ability to determine what proof technique I should use to validate a theorem. I now know how to write proofs for theorems I have utilized for many years and just assumed their truth. For example, I now know how to prove an integer must either be odd or even, an odd integer plus an odd integer is always even, or how every real number has a decimal representation. These are only a few examples of ideas that I have known for years but did not necessarily understand to why they were true. Things have now changed, as over the course of this class I have learnt how to write their proofs and truly understand to why they are fact.</p>

<p style="line-height:2;">
Although I have learnt a lot through this course, one area where this is still room for improvement would be on the subject of Set Equality. On my second exam I lost a considerable amount of point related to Set Equality. In addition to this, when writing proofs, I sometimes struggle to see the train of thought required to show sets are equal. This being said, I am still working on this weakness and hope to perform better on the final exam.></p>

## Examples of Proof Writing

### Direct Proof

<u>Theorem:</u> The sum of two odd numbers is even.
Proof: Let `a` and `b` be odd numbers. By definition of an odd number `a = 2k + 1` and `b = 2j + 1` where `k, j ∈ ℤ`. Then,
```text
a + b = (2k + 1) + (2j + 1)
      = 2k + 2j + 2
      = 2(k + j + 2)
```
Since `k, j, 1 ∈ ℤ`, `k + j + 1 ∈ ℤ` by closure. By definition of even `2(k + j + 1)` is even. Thus `a + b` is even, and the theorem holds.

---

<u>Theorem:</u> The sum of an odd number and an even number is odd.
Proof: Let `a` be odd and `b` be even. By their definitions `a = 2k` `b = 2j + 1` where `k, j ∈ ℤ`. Then,
```text
a + b = 2k + 2j + 1
      = 2(k + j) + 1
```
Since `k, j ∈ ℤ`, `k + j ∈ ℤ` by closure. By definition of odd `2(k + j) + 1` is odd. Thus `a + b` is odd, and the theorem holds.

---

### Proof by Contradiction

<u>Theorem:</u> There is no integer that is both even and odd.
Proof: Suppose on the contrary, that there is a integer which is both even and odd. Let `a` be such an integer. Since `a` is odd `a = 2(k) + 1` for some `k ∈ ℤ` by definition of odd. Since `a` is even `a = 2(j)` for some `j ∈ ℤ` by definition of even. Then,
```text
2k + 1 = 2j
     1 = 2j - 2k
     1 = 2(j - k)
   ¹/₂ = j - k
```
Since `j, k ∈ ℤ`, `j - k ∈ ℤ` by closure. `¹/₂ ∉ ℤ`, `j - k ∉ ℤ`. Thus `j - k ∈ ℤ` and `j - k ∉ ℤ` which is a contradiction.

---

<u>Theorem:</u> There is no smallest positive rational number.
Proof: Suppose on the contrary, there is a smallest positive rational number. Call it `a`. Then `a > 0`, by a previous theorem<sup>1</sup> `∃x ∈ ℚ` such that `0 < x < a`. Thus `a` is not the smallest rational number which is a contradiction.
><sup>1</sup>_Between any two rational numbers, there is a rational number._

---

### Induction Proof

<u>Theorem:</u> For all integers n > 1, 2ⁿ < (n + 1)!.
Proof: We will prove the result using induction.
Base Case: When `n = 2`, `2ⁿ = 2² = 4` also `(2 + 1)! = 3! = 6`. Since `4 < 6` the base case holds.
Now suppose for some `k ≥ 2`, `2ᵏ < (k + 1)!` we will show `2ᵏ⁺¹ < (k + 2)!`.
```text
2ᵏ⁺¹ = 2ᵏ · 2
     < (k + 1)! · 2
     < (k + 1)! (k + 2)
     < (k + 2)!
```
Thus the result holds by induction.

---

<u>Theorem:</u> For all integers n ≥ 0, 9ⁿ - 1 is a multiple of 8.
Proof: We will prove the result using induction.
Base Case: When `n = 0` `9⁰ - 1 = 0` since `0 = 0 · 8`, `0` is a multiple of `8` by definition of a multiple. Thus the base case holds.
Now suppose for some `k ≥ 0`, `9ᵏ - 1` is a multiple of `8`. We will show `9ᵏ⁺¹ - 1` is a multiple of `8`. Then,
```text
9ᵏ⁺¹ - 1 = 9 · 9ᵏ - 1
         = (8 + 1) 9ᵏ - 1
         = 8 · 9ᵏ + 9ᵏ - 1
```
By the inductive hypothesis , `9ᵏ - 1` is a multiple of `8`. Thus, `9ᵏ - 1 = 8a` where `a ∈ ℤ` by definition of a multiple. Then,
```text
9ᵏ⁺¹ - 1 = 8 · 9ᵏ + 8a
	     = 8(9ᵏ + a)
```
By closure `9ᵏ + a ∈ ℤ` thus `9ᵏ⁺¹ - 1` is a multiple of `8` by definition of multiple. Thus the result holds by induction.

---

### Set Equality Proof

<u>Theorem:</u> Let A and B be sets. If A ⊆ B, then A ∪ B = B
Proof: First we show `A ∪ B ⊆ B` let `x ∈ A ∪ B`. Then `x ∈ A` or `x ∈ B`. If `x ∈ A`, then `x ∈ B`. Thus `A ∪ B ⊆ B`. Now we will show `B = A ∪ B`. Let `x ∈ B` then `x ∈ A ∪ B` thus `B ⊆ A ∪ B`. Hence `A ∪ B = B`.

---

<u>Theorem:</u> Let A = {n ∈ ℤ | n = 7k + 1 for some k ∈ ℤ} and B = {n ∈ ℤ | n = 7k + 5 for some k ∈ ℤ}. Then A ∩ B = ∅
Proof: Suppose on the contrary `A ∩ B ≠ ∅`. Then `∃x ∈ A ∩ B`. So `x ∈ A` and `x ∈ B`. Since `x ∈ A` `x = 7k + 1` where `k ∈ ℤ`. Since `x ∈ B` `x = 7j + 5` where `j ∈ ℤ`.
```text
7j + 5 = 7k + 1
     4 = 7k - 7j
     4 = 7(k - j)
   ⁴/₇ = k - j
```
Thus `k - j ∉ ℤ`, but by closure `k - j ∈ ℤ`. Thus we have a contradiction.

---


Last updated:570422093.630318