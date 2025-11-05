# Stacks and Assembly

## What and Where is the STACK
The stack is a section of **RAM** that is used by the ALU to
store **return addresses** from subroutines.

Starts at address=RAMEND 

Stack expands towards lower addresses (decrementing)

![memorymap](/support/1memory_map.png)

Special stack pointer register in the CPU keeps track of the top of the stack.

How big: 2KBytes internal SRAM is max, but need space for global variables, static variables, and heap (if used).

## Why do we need “The Stack”?

**Subroutines** and **Interrupts**

I think the stack can also store values of the current registers.

The region in the stack that holds incoming parameters, the subroutine return address, local variables, and saved registers.

## Stack & Heap

- Stack holds functions and variables
- Heap holds dynamically allocated memory (think malloc)
- bss section holds uninitialized global variables a. Block Starting Symbol
-  data section holds initialized global variables & initial values

## Assembly

RISC - Reduced Instruction Set Computer
CISC - Complex Instruction Set Computer

# Execution Time
The 328PB has a 16MHz clock so its clock period is (1/16M) = 62.5ns

Use the sequence of instructions to count for time when you can not use delay.h
