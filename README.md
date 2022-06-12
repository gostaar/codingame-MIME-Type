<h1>Objectif</h1>
Le type MIME est utilisé dans de nombreux protocoles internet pour associer un type de média (html, image, vidéo, ...) avec le contenu envoyé. Ce type MIME est généralement déduit de l'extension du fichier à transférer.

Vous devez écrire un programme qui permet de détecter le type MIME d'un fichier à partir de son nom.
<h1>Règles</h1>
Une table qui associe un type MIME avec une extension de fichier vous est fournie. Une liste de noms de fichier à transférer vous sera aussi fournie et vous devrez déduire pour chacun d'eux, le type MIME à utiliser.

L'extension d'un fichier se définit par la partie du nom qui se trouve après le dernier point qui le compose.
Si l'extension du fichier est présente dans la table d'association (la casse ne compte pas. ex : TXT est équivalent à txt), alors affichez le type MIME correspondant . S'il n'est pas possible de trouver le type MIME associé à un fichier, ou si le fichier n'a pas d'extensions, affichez UNKNOWN.
<h1>Entrées du jeu</h1>
<h2>Entrée</h2>
Ligne 1: Nombre N d’éléments composant la table d'association. 

Ligne 2 : Nombre Q de noms de fichiers à analyser.

N lignes suivantes : Une extension de fichier par ligne et son type MIME correspondant (séparé par un espace).

Q lignes suivantes : Un nom de fichier par ligne.

<h2>Sortie</h2>
Pour chacun des Q noms de fichiers, afficher sur une ligne le type MIME associé. S'il n'y a pas de correspondance, afficher UNKNOWN.
<h2>Contraintes</h2>
0 < N < 10000
0 < Q < 10000
Les extensions de fichiers sont composées d'un maximum de 10 caractères ascii alphanumériques.
Les type MIME sont composés d'un maximum de 50 caractères ascii alphanumérique et de ponctuations.
Les noms de fichiers sont composés d'un maximum de 256 caractères ascii alphanumériques et points.
Il n'y a pas d'espaces dans les noms de fichiers, les extensions et les types MIME.
<h2>Exemple</h2>
Entrée
2
4
html text/html
png image/png
test.html
noextension
portrait.png
doc.TXT
Sortie
text/html
UNKNOWN
image/png
UNKNOWN
