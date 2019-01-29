# Number System

## Background
The most used number system is the deciaml system. The Binary Number systems differs in that
it is in base 2 and only uses `0` and `1`.

## Terminology
**Least Significant Bit (LSB):** The right most bit of a binary number.

**Most Significant Bit (MSB):** The left most bit of a binary number.

## Conversion Examples

### Binary to Decimal

```text
 1     0     1     1     1     1     0     1
---   ---   ---   ---   ---   ---   ---   ---
128 + 064 + 032 + 016 + 008 + 004 + 002 + 001 = 189

10111101 -> 189
```
### Decimal to Binary

#### Conversion Steps:
1. Divide the number by 2.
2. Get the integer quotient for the next iteration.
3. Get the remainder for the binary digit.
4. Get the remainder for the binary digit.

```text
218 / 2
        109 0 ^
        054 1 |
        027 0 |
        013 1 |
        006 1 |
        003 0 |
        001 1 |
        000 1 |

218 -> 11011010

```


## Arithmetic


Last updated:570418475.286449