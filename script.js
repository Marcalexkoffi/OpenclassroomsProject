let listeMots  = ["Cachalot","Pétunia","Serviette"] 
let listePhrases = ["Pas de panique !","La vie, l’univers et le reste","Merci pour le poisson"]
let i 
let score = 0
let reponse = prompt("Voulez-vous la liste de mots ou la liste de phrase ?")
while (reponse !== "mots" && reponse !== "phrases"  )
    {
        reponse = prompt("Voulez-vous la liste de mots ou la liste de phrases ?")
    }
switch (reponse){
    case "mots" : 
            
        for (i=0;i<3;i++){
            let motUtilisateur = prompt("Entrez le mot : " + listeMots[i])
            if (motUtilisateur === listeMots[i]){
                console.log("Le mot est correct")
                score++
            }else{
                console.log("Le mot est incorrect")
            }
        }
        console.log("Votre Score est : ",score)
    break
    case "phrases" : 
        for (i=0;i<3;i++){
            let phraseUtilisateur = prompt("Entrez la phrase : " + listePhrases[i])
            if (phraseUtilisateur === listePhrases[i]){
                console.log("La phrase est correct")
                score++
            }else{
                console.log("La phrase est incorrect")
            }
            console.log("Votre Score est : ",score)
        }
    break 
    
}
