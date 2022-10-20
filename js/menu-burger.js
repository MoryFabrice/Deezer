// 1ere façon de faire avec les noms de fonction dans le html a la place de handleMenu
//function openMenu() {
//     openBtn.classList.add('inactive')
//     closeBtn.classList.remove('inactive')
//     menuVisible.classList.remove('inactive')
//     menuInvisible.classList.add('inactive')
// }                                                    On a 2 façons de faire la 2eme est plus utilisé en milieu pro
// function closeMenu() {
//     closeBtn.classList.add('inactive')
//     openBtn.classList.remove('inactive')
//     menuVisible.classList.add('inactive')
//     menuInvisible.classList.remove('inactive')
// }

// 2e açon de faire, beaucoup plus repandue
function handleMenu(value) {
    if (value === true) {
        openBtn.classList.add('inactive')
        closeBtn.classList.remove('inactive')
        menuVisible.classList.remove('inactive')
        menuInvisible.classList.add('inactive')
    } else {
        openBtn.classList.remove('inactive')
        closeBtn.classList.add('inactive')
        menuVisible.classList.add('inactive')
        menuInvisible.classList.remove('inactive')
    }
}

// 3eme façon de faire
// function handleMenu(value) {
//     value === true
//       ? (openBtn.classList.add('inactive'), closeBtn.classList.remove('inactive'), menuVisible.classList.remove('inactive'), menuInvisible.classList.add('inactive'))
//       : (openBtn.classList.remove('inactive'), closeBtn.classList.add('inactive'), menuVisible.classList.add('inactive'), menuInvisible.classList.remove('inactive'))
//   }

// Ici une boucle switch qui permet de vérifier dans N cas
// function handleMenu(value) {
//   switch (value) {
//     case true:
//      openBtn.classList.add('inactive')
//      closeBtn.classList.remove('inactive')
//      menuVisible.classList.remove('inactive')
//      menuInvisible.classList.add('inactive')
//       break
//     case false:
//       openBtn.classList.remove('inactive')
//       closeBtn.classList.add('inactive')
//       menuVisible.classList.add('inactive')
//       menuInvisible.classList.remove('inactive')
//       break
//     default:
//       console.log("pas d'inspiration")
//   }
//   console.log('j execute une fonction en complément du switch quoi qu il arrive ')
// }
