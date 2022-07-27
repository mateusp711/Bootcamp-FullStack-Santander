#include <stdio.h>

#include <string.h>

main()

{

int cont = 0, x=1;

char apelido[10];

strcpy (apelido, "martelo");

cont = strlen(apelido);

while (x < cont)

{

     printf ("%d", x + 1);

     x = x + 1;

}

}