let input=document.querySelector('input');
let btn=document.querySelector('button');
let list=document.querySelector('#list');

btn.addEventListener('click',function(){
    let st=input.value;
    let data=takeapi(st);
    input.value='';
})
function takeapi(st){
    axios.get(`https://api.tvmaze.com/search/shows?q=${st}`)
    .then(function(resp){
    create(resp.data);


    })
    

}
function create(reps){
    while(list.firstChild){
        list.firstChild.remove();
    }
    for(let data of reps){
        let figure=document.createElement('figure');
        if(data.show.image){
            figure.innerHTML=`
            <img src="${data.show.image.original}"/>
            <h2>${data.show.name}</h2>
            
            
            `
            list.appendChild(figure);
        }
    }

}
