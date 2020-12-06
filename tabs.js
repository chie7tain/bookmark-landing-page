function tabbing(){
  const tabs = [...document.querySelectorAll(".tab-link")];
  tabs.forEach(function(tab){
    const span = tab.querySelector(".tab-heading");
    span.addEventListener("click",()=>{
      tabs.forEach((item)=>{
        if(item !== tab){
          item.classList.remove("tab-style");
        }
      });
      tab.classList.toggle("tab-style");
    })
    })
}
tabbing();
function changeContent(){
  const tabItems = [...document.querySelectorAll(".tab-item")];
  
}
changeContent();