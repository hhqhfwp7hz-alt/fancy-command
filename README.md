# Fancy Command

## Section 1 — Command Description

### What the tool does

Fancy Command combines the basic ideas of the Linux `cat` and `wc` commands. It displays the contents of a file and then shows the number of lines in the file.

### How to run it

Run the program in the terminal with a filename:

node fancyCat.js test.txt

The program uses process.argv to receive the filename and the Node.js fs module to read the file.
### What commands it combines
- cat — displays the contents of a file.
- wc -l — counts the number of lines in a file.
## Section 2 — AI-Assisted Programming
### What I asked AI
I asked AI to explain how the cat and wc Linux commands work and how they could be combined into a simple Node.js command. I also asked for help understanding how process.argv and the fs module work.
### Where AI helped
AI helped me understand how process.argv allows the program to receive a filename from the terminal. It also helped explain how Node.js can read a file and count its lines.
### Where I had to think independently
I decided to combine cat and wc into one Fancy Command that displays the file contents and then gives the line count. I also tested the program in the terminal and compared its results with the Linux wc -l command.
### What AI got wrong or missed
The first version of the line-counting code used split('\n').length. When I tested it, my program reported 4 lines while wc -l reported 3 lines. Testing showed that a final newline was being counted as an extra line. I changed the code and tested it again, and the program then produced the same line count as wc -l.
