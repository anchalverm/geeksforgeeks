const button=document.getElementById("addAlbumButton");
const albums=document.getElementsByClassName("Albums")[0];

button.addEventListener("click",function()
{
const image=document.getElementById("ImageURL").value;
const description=document.getElementById("description").value;
const time=document.getElementById("time").value;

const album=createNewAlbum(image,description,time);
albums.appendChild(album);

})

function createNewAlbum(ImageURL,description,time)
{
    const albumDiv=document.createElement('Div');
    albumDiv.className="album";

    const thumbnailsDiv=document.createElement('Div');
    thumbnailsDiv.className="thumbnails";
    const image=document.createElement('img');
    image.setAttribute('src',ImageURL);
    thumbnailsDiv.appendChild(image);

    const details=document.createElement('div');
    details.className="details";

    const para=document.createElement('p');
    para.textContent=description;

    const detailsfooter=document.createElement('div');
    detailsfooter.className="details-footer";

    const buttonsDiv=document.createElement('div');
    const button1=document.createElement('button');
    button1.textContent="view";
    const button2=document.createElement('button');
    button2.textContent="Edit";

    buttonsDiv.appendChild(button1);
    buttonsDiv.appendChild(button2);

    const timeElement=document.createElement('span');
    timeElement.textContent=time + "min";
     detailsfooter.appendChild(buttonsDiv);
     detailsfooter.appendChild(timeElement);

     details.appendChild(para);
     details.appendChild(detailsfooter);

     albumDiv.appendChild(thumbnailsDiv);
     albumDiv.appendChild(details);

     return albumDiv;


}