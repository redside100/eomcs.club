import sys

with open('gnp.drowssap', 'rb') as f:
    with open('password.png', 'wb') as g:
        g.write(f.read()[::-1])

