### DIGITAL OPS
Pour le projet j'ai eu un problème avec mongo atlas que j'ai pu régler mais ensuite le déploiement n'a plus pris.
C'est pour ça je vous envoie mon projet github avec localhost.
Si vous pouvez essayer ça en local vous verrez que j'ai fait un bon boulot quand même malgré qu'on est pris abvec nos projets d'école.


### Fonctionalité fait et pas fait

Concernant les fonctionalités demander dans le projet, j'ai pu tout faire sauf l'addition des heures dans le dashboard admin.
J'ai pas fait aussi la gestion des erreurs du coup quand le mot de passe esyt mal passé au niveau de la connection l'user saura pas que c'est parceque son mot de passe est faux.


### Comment l'utiliser
Il faut s'enregistrer. Au niveau de la connection, il faut veillez à mettre le bon mail et le bon mot de passe vu que j'ai pas gérer la gestion des erreurs.
Une fois authentifié, un user simple peut ajouter des taches mais ne pourra pas mettre l'heure. C'est quand il va vouloir faire un update qu'il aura la possibilité de mettre l'heure
Un autre utilisateur peut voir qui a posté tel tache.
Maintenant parlant de l'admin, en plus des fonctionalités utilisateurs, il peut avoir tous les informations utilisateurs de la base de donnée et ainsi que le nombre d'heure effectué par chaque utilisateir sauf que ça n'additionne pas.

### Stacks techniques

J'ai utilisé Nextjs avec une api intégré.
Mongodb pour la base de donnée.