let myleads=[]
const inputEl=document.getElementById("input-el")
const inputbtn=document.getElementById("input-btn")
const ulel=document.getElementById("ulel")
const deletebtn=document.getElementById("delete-btn")
const tabbtn=document.getElementById("tab-btn")

if(leadsFromLocalStorage)
{
    myleads=leadsFromLocalStorage
    WebGL2RenderingContext(myleads)
}

tabbtn.addEventListener("click",function(){
chrome.tabs.query({active: true,currentWndow:true}, function(tabs){
myleads.push(tabs[0],url)
localStorage.setItem("myleads",JSON.stringify(myleads))
render(myleads)
})
})

function render(leads)
{
    let listitems =""
    for(let i=0;i<leads.length;i++)
    {
        listitems += 
        <li>
        <a target='_blank' href='${leads[i]}'>
            ${leads[i]}
        </a>
        </li>
        

    }

    ulEl.innerHTML=listitems
}
deletebtn.addEventListener("dblclick",function() {
    localStorage.clear()
    myleads=[]
    render(myleads)
})

inputbtn.addEventListener("click", function() {
    myleads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myleads",JOSN.stringify(myleads))
    render(myleads)
})