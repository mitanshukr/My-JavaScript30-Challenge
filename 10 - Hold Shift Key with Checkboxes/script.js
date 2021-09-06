const inbox = document.querySelector('.inbox');

const checkboxes = document.getElementsByTagName('input');
// const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//getsElementsBy... method provides live dom elements, queryselector does not.
//That means, after excecuting above command, if we add something more in checkboxes,
//it will be reflected in output later, if selected using getElementsBy... method.

const addItemBtn = document.getElementById('addItemBtn');
const addItemModal = document.getElementById('addItemModal');
const inputText = document.querySelector('input[type="text"]');
const modalAddItemBtn = document.querySelector('input[type="submit"]');
const modalCloseBtn = document.querySelector('#addItemModal button');

const deleteIcons = document.getElementsByClassName('deleteIcon');
// const deleteIcons = document.querySelectorAll('.deleteIcon');
//Same reason as above.
//We need to have live and updated dom elements in both the cases in this project.

const backdrop = document.querySelector('.backdrop');

let lastChecked;
let checkInBetween = false;
function checklistHandler(e) {
    console.log(this, 123);
    if (e.shiftKey && this.checked && lastChecked) {
        console.log(this);
        Array.from(checkboxes).forEach((checkbox) => {
            if (checkbox === this || checkbox === lastChecked)
                checkInBetween = !checkInBetween;

            if (checkInBetween)
                checkbox.checked = true;
        });
    }
    if (this.checked)
        lastChecked = this;
    else
        lastChecked = null;
}

function addItemToList() {
    if (inputText.value == '') {
        alert('Please add a task in the Input.');
        return;
    }

    //This command will check and remove the Section tag when we add first Item.
    //section tag should be added if no items are present in the task.
    //console.log(inbox.firstElementChild.nodeName);
    if (inbox.firstElementChild.nodeName == 'SECTION')
        inbox.firstElementChild.remove();

    const newItem = document.createElement('div');
    newItem.classList.add('item');  //newItem.className = 'item';
    newItem.innerHTML = `
      <input type="checkbox">
      <p>${inputText.value}</p>
      <i class="fa fa-trash deleteIcon display-None" aria-hidden="true"></i>`;

    inbox.appendChild(newItem);

    eventCall();
    //This should call the eventCall() function [See below],
    // which will iterate the checkboxes nodes and add eventlistners to newly added element.
    //also, this function will overwrite the previous eventlistners on the elements.
    
    //Alternatively, we can run below commands to add eventlistners to newly added elements only.
    //But this will break the flow of main functionality of the project: HOLD SHIFT KEY TO CHECK MULTIPLE CHECKBOXES.
    // newItem.querySelector('input[type="checkbox"]').addEventListener('click', checklistHandler);
    // newItem.querySelector('i').addEventListener('click', deleteListItem);

    inputText.value = '';   //To clear the input section.
    toggleModal();
}

function deleteListItem() {
    const grandParent = this.parentElement.parentElement;
    //Storing the Grandparent to check later, if the list became empty or not. Watch this: //**//

    this.parentElement.remove();

    if (grandParent.children.length == 0)   //**//
        grandParent.innerHTML = `
      <section>
      <h2>Hurray!! No Pending tasks.</h2>
      <p>Or, Add new Tasks.</p>
      </section>
      `;
}

function toggleModal() {
    addItemModal.classList.toggle('display-None');
    backdrop.classList.toggle('display-None');
    inputText.value = '';
}

function eventCall() {
    Array.from(deleteIcons).forEach((deleteIcon) => deleteIcon.addEventListener('click', deleteListItem));
    //deleteIcons is an HTML Collection. forEach cannot iterate over that. Hence changing that to Array.
    //Alternatively, you can use for..of.
    // for(deleteIcon of deleteIcons){
    //   deleteIcon.addEventListener('click', deleteListItem);
    // }

    Array.from(checkboxes).forEach((checkbox) => {
        if (checkbox.getAttribute('type') == 'checkbox')
            checkbox.addEventListener('click', checklistHandler);
    });
    //We don't have an option to select input[type='checkbox'] using getElementsByTagName.
    //Hence, we used getElementsByTagName('input'), and later filtered out the checkbox type input.
    //Please let me know if you know the better way of doing it.
    //P.s: we could not use querySelector because we needed live sync of elements.
}
eventCall();

addItemBtn.addEventListener('click', toggleModal);
modalCloseBtn.addEventListener('click', toggleModal);
modalAddItemBtn.addEventListener('click', addItemToList);

/*********
 * Thank you so much! Hope you learned something today.
 * Please let me know if you notice anything wrong.
 * https://linkedin.com/in/mitanshukr/
 * 
 * Design Credit: https://javascript30.com/
 *
 *********/
