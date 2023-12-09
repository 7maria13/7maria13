// Récupere la case "masquer les paroles"
const checkboxParoles = document.querySelector("#masquer-paroles") // à compléter, ce code ne fonctionne pas

// Récupère le div contenant les paroles
const divParoles = document.querySelector("#paroles"); //
const line =  document.querySelector("hr")

// Attache une fonction à l'évènement "click" sur checkboxParoles
checkboxParoles.addEventListener('click', function (event) {
  // cette fonction est executée lorsque l'utilisateur clique sur checkboxParoles

  // event.target contient l'élément cliqué (ici checkboxParoles dans notre cas)
  if (event.target.checked) {
    // la case vient d'être cochée
divParoles.style.display="none"
line.style.display="none"
checkboxParoles.nextSibling.textContent = "afficher les paroles"
  } 
  else {
    // la case vient d'être decochée
    divParoles.style.display="block"
    line.style.display="block"
    checkboxParoles.nextSibling.textContent = "Masquer les paroles"
  }
});
//*Sélection des éléments HTML:*
const checkboxRefrains = document.getElementById('masquer-refrains');
const refrains = document.querySelectorAll('.refrain:not(:first-of-type)');

//  Ajouter un écouteur d'événement pour surveiller les changements de l'état de la case à cocher
 checkboxRefrains.addEventListener('click', function () {
  if (checkboxRefrains.checked) {
    refrains.forEach(refrain => {
    refrain.querySelector('.definition').classList.remove('hidden');
      refrain.querySelector('.contenu').classList.add('hidden');})
      // Parcours chaque élément refrain et modifie les classes
      //pour masquer la partie contenu et afficher la partie définition.
      //Modifie le texte du nœud suivant de la case à cocher pour indiquer
      // 'afficher les refrains'.
      checkboxRefrains.nextSibling.textContent = 'afficher les refrains';
    ;
    //
} else {
    refrains.forEach(refrain => {
      refrain.querySelector('.definition').classList.add('hidden');
      refrain.querySelector('.contenu').classList.remove('hidden');})
// Parcours à nouveau chaque élément refrain, 
//mais cette fois-ci, inverse les modifications 
// pour afficher le contenu et masquer la définition.
//Modifie le texte du nœud suivant de la case à cocher pour indiquer 'Masquer les refrains'.
      checkboxRefrains.nextSibling.textContent = 'Masquer les refrains';
    }
   });
 