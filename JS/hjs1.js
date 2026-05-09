const unorderElement = document.getElementById("listing");
const fragment = document.createDocumentFragment();
for(let food of arr){
    const list = document.createElement("li");
    list.textContent = food;
    fragment.append(list);
}
unorderElement.append(fragment);
const s1 = document.getElementById("first");
s1.remove();
// const month = document.getElementById("ten");
// const lister = document.createElementId("li");
// lister.textContent = "<img src='https:"
