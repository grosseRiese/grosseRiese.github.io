# Harry Potter API - Övning

I denna övning ska du använda dig av Harry Potter API för att söka på ett hus (Gryffindor, Hufflepuff, Ravenclaw, Slytherin) och få fram alla karaktärer som visas i en lista för användaren.

**API dokumentation:** https://www.potterapi.com/

**API key:** $2a$10$gEu0O5jmtD2VgySMbVDGOebtftLbfyB0Z5qDpmMhW0Ds4fcfh6cRm

**API endpoint:** https://www.potterapi.com/v1/characters?key=

**Example:**  https://www.potterapi.com/v1/characters?key=$2a$10$gEu0O5jmtD2VgySMbVDGOebtftLbfyB0Z5qDpmMhW0Ds4fcfh6cRm&house=Gryffindor&orderOfThePhoenix=true

## Instruktioner

1. Börja med att göra ett anrop mot https://www.potterapi.com/v1/characters med API key (se ovan).

2. Lägg till ett sökfält där du kan skriva in ett hus och använd dig av URL parametern ```house```.

3. Visa upp alla namnen som du får från API:et för användaren i en lista.

### Level 2

Visa på varje karatärer följande egenskaper:
* namn
* house
* orderOfThePhoenix
* species
* school

### Level 3

Kombinera sökningar exempelvis att det går att söka på både orderOfThePhoenix och ministryOfMagic.
Level 3 är att jag kan kombinera sökningar exempelvis ge mig alla karaktärer som tillhör Gryffindor och order of phoenix