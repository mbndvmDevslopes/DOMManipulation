/**
 * SORTING NODES WITHIN A CONTAINER
 * Please, make sure to read the following files in the exercises-info folder before you start
 * * "02 SortingNode.md"
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
 * Select all sort buttons by class of "sortBtn" as a NodeList.
 * Store them in the sortBtn variable
 * Example: const sortBtn = <Your code>;
 */

const sortButtons = document.querySelectorAll('[data-sortdir]');
/**
 * @task
 * Create a sortData function that follows the list of requirements:
 * * Takes an argument of the direction to sort as a string of 'asc' or 'desc'
 * * Defines a container variable to get the node by id of 'main'
 * * Uses the allItems variable as a source for the array of items to sort
 * * Sorts the items by id and appends them back to the main container in the sorted order.
 * Example: sortData('desc') => <reversed order of items in the main container>
 * Example: sortData('asc') => <a-z order of items in the main container>
 */

const sortData = (direction) => {
  const container = document.getElementById('main');
  const newArray = Array.from(allItems);
  if (direction === 'desc') {
    newArray.sort(sortAsc);
  } else {
    newArray.sort(sortDesc);
  }
  newArray.forEach((item) => {
    container.append(item);
  });
};

const sortAsc = (a, b) => {
  if (a.id < b.id) return 1;
  else if (a.id > b.id) return -1;
  else return 0;
};
const sortDesc = (a, b) => {
  if (a.id > b.id) return 1;
  else if (a.id < b.id) return -1;
  else return 0;
};

/**
 * @task
 * Iterate through the every item in sortBtn NodeList and apply the
 * addEventListener click event to each item.
 * The item click must execute/call the following:
 * * Make the sortData function call, assign the item's dataset sortdir property
 */

const callbackFn = (e) => {
  const item = e.target;
  if (Array.from(item.classList).includes('sortBtn')) {
    const direction = item.getAttribute('data-sortdir');
    sortData(direction);
  }
};
const sort = document.querySelector('.sort');
sort.addEventListener('click', callbackFn);
