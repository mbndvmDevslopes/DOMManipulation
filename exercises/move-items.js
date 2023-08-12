/**
 * SORTING NODES WITHIN A CONTAINER
 * Please, make sure to read the following files in the exercises-info folder before you start
 * * 01 SelectNodes.md
 */

/**
 * @task
 * Select all elements that have class of "item" as a NodeList.
 * Store them in the allItems variable
 * Example: const allItems = <Your code>;
 */

const allItems = document.querySelectorAll('.item');

/**
 * @task
 * Select the main container by the id of "main"
 * Store it in the main constant
 * Example: const main = <Your code>
 * */

const mainContainer = document.getElementById('main');
//console.log('Main items: ', mainItems);

/**
 * @task
 * Select the favorites container by id of "favs"
 * Store it in the favs constant
 * Example: const favs = <Your code>;
 */
// Your code goes here
/* const favContainer = document.getElementById('favs');
const favItems = favContainer.querySelectorAll('.item'); */
//console.log('Fav items', favItems);
/**
 * @task
 * Create the updateCollections(id, direction) function that follows the list of requirements:
 * Takes an argument of the item id (number)
 * Take an argument of direction as a string value of 'toMain' or 'toFavs'
 * Moves the element from the current parent to the new parent (from main to favs or vice versa)
 * Changes the icon of the element: fa-heart-circle-plus for main, fa-heart-crack for favs items.
 */

const favContainer = document.getElementById('favs');

const updateCollections = (id, direction) => {
  const mainItems = mainContainer.querySelectorAll('.item');
  const favItems = favContainer.querySelectorAll('.item');
  const mainArray = Array.from(mainItems);
  const favArray = Array.from(favItems);

  if (direction === 'toMain') {
    const idNum = favArray.findIndex((item) => item.id === id);
    const amended = favArray.splice(idNum, 1);

    amended[0].innerHTML = `<i class="fa-solid fa-heart-circle-plus"></i> Card Title ${id}`;
    mainArray.push(amended[0]);
    mainArray.forEach((item) => {
      mainContainer.appendChild(item);
    });
  } else {
    const idNum = mainArray.findIndex((item) => item.id === id);
    const amended = mainArray.splice(idNum, 1);
    amended[0].innerHTML = `<i class="fas fa-heart-broken"></i> Card Title ${id}`;

    favArray.push(amended[0]);
    favArray.forEach((item) => {
      favContainer.appendChild(item);
    });
  }
};
//<i class="fas fa-heart-broken" style="color: #e01b24;"></i>
//if direction toFavs..add to favs and remove from main
//if direction toMain...add to main and remove from favs
//add heart icons depending on location and remove old icon
/**
 * @task
 * Iterate through the every item in allItems NodeList and apply the
 * addEventListener click event to each item.
 * The item click must execute/call the following:
 * * Get the current item's parent id ('main' or 'favs')
 * * Get the current item id (a number value)
 * * Set the direction constant to be equal to 'toFavs' or 'toMain', based off the current location
 * * The direction means the collection to move the item into, when the item is clicked
 * * If the correct item's location is the parent of id 'main' -> the direction is 'toFavs'
 * * If the correct item's location is the parent of id 'favs' -> the direction is 'toMain'
 * * Make the updateCollections function call, assign the item Id and the direction defined above
 */

const callbackFn = (e) => {
  const item = e.target;

  if (Array.from(item.classList).includes('item')) {
    const id = item.id;
    const parentID = item.parentElement.id;

    direction = parentID === 'main' ? 'toFavs' : 'toMain';
    updateCollections(id, direction);
  }
};

mainContainer.addEventListener('click', callbackFn);
favContainer.addEventListener('click', callbackFn);
