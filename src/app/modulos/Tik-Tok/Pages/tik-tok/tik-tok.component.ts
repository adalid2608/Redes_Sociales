import { Component } from '@angular/core';
import { IChat } from 'src/app/core/interfaces/IChat';
import { IStory } from 'src/app/core/interfaces/IStory';

@Component({
  selector: 'app-tik-tok',
  templateUrl: './tik-tok.component.html',
  styleUrls: ['./tik-tok.component.scss']
})
export class TikTokComponent {
  message: IChat [] = [
    {userImage:"https://robohash.org/pariaturanimiut.png?size=50x50&set=set1", userName:"bcartmael0",message:"Maecenas leo od",status:false, fecha:"Justo ahora", numMensajes: 0},
    {userImage:"https://robohash.org/voluptatumconsequaturvero.png?size=50x50&set=set1",userName:"mniess1",message:"Morbi a ipsum. ",status:true, fecha:"Justo ahora", numMensajes: 3},
    {userImage:"https://robohash.org/sequiquorepellat.png?size=50x50&set=set1",userName:"hkittow2",message:"Vivamus in felis eu sap",status:false, fecha:"5 min", numMensajes: 0},
    {userImage:"https://robohash.org/delectuscupiditatepossimus.png?size=50x50&set=set1",userName:"nriggs4",message:"Nulla mollis molestie",status:false, fecha:"5 h", numMensajes: 0},
    {userImage:"https://robohash.org/inperferendisnobis.png?size=50x50&set=set1",userName:"nhartnup3",message:"Vivamus metus arcu",status:false, fecha:"18 min", numMensajes: 0},
    {userImage:"https://robohash.org/velitautemquaerat.png?size=50x50&set=set1",userName:"ediviny5",message:"Sed sagittis",status:false, fecha:"02/03", numMensajes: 0},
    {userImage:"https://robohash.org/harumenimrepellendus.png?size=50x50&set=set1",userName:"swoodes6",message:"Nulla suscipit",status:true, fecha:"", numMensajes: 2},
    {userImage:"https://robohash.org/omnispraesentiumsoluta.png?size=50x50&set=set1",userName:"ttarbox7",message:"Vestibulum ante",status:true, fecha:"05/04", numMensajes: 4},
    {userImage:"https://robohash.org/doloresquidemlaudantium.png?size=50x50&set=set1",userName:"ratyeo8",message:"Duis consequat dui",status:true, fecha:"03/05", numMensajes: 1},
    {userImage:"https://robohash.org/voluptasautemdeleniti.png?size=50x50&set=set1",userName:"aarniz9",message:"Aenean fermentum.",status:true, fecha:"10/07", numMensajes: 4},
    {userImage:"https://robohash.org/veniamsuscipitaut.png?size=50x50&set=set1",userName:"mcaramusciaa",message:"Pellentesque ultrices",status:false, fecha:"11/08", numMensajes: 0},
    {userImage:"https://robohash.org/aspernaturassumendacorporis.png?size=50x50&set=set1",userName:"grounsivallb",message:"Nulla tellus",status:true, fecha:"12/09", numMensajes: 2},
    {userImage:"https://robohash.org/quilaborumrepellat.png?size=50x50&set=set1",userName:"bkemmeyc",message:"Morbi quis torto",status:false, fecha:"10/10", numMensajes: 0},
    {userImage:"https://robohash.org/seddictaconsequatur.png?size=50x50&set=set1",userName:"ngammaged",message:"Pellentesque ultri",status:true, fecha:"01/11", numMensajes: 6},
    {userImage:"https://robohash.org/nisinamaccusamus.png?size=50x50&set=set1",userName:"zbeardmoree",message:"Etiam vel augue",status:false, fecha:"15/10", numMensajes: 0}
  ];

  story: IStory [] = [
    {
    userImage: "https://robohash.org/occaecatiipsamqui.png?size=50x50&set=set1",
    userName: "Ada26",
    status: false
  }, {
    userImage: "https://robohash.org/minimamolestiaererum.png?size=50x50&set=set1",
    userName: "Noe13",
    status: true
  }, {
    userImage: "https://robohash.org/remnumquamlibero.png?size=50x50&set=set1",
    userName: "Lore13",
    status: false
  }, {
    userImage: "https://robohash.org/minimaharumsunt.png?size=50x50&set=set1",
    userName: "Ar@",
    status: true
  }, {
    userImage: "https://robohash.org/magniculpasint.png?size=50x50&set=set1",
    userName: "Les06",
    status: true
  }, {
    userImage: "https://robohash.org/cumqueofficiisfugiat.png?size=50x50&set=set1",
    userName: "viney5",
    status: false
  }
];

  Mensaje(event : any) : void{
    if (event.numMensajes == 0) {
      alert(`Le escribiste a:  ${event.userName}`)
    } else {
      alert(`Te escribio: ${event.userName}`)
    }
  }

  StorySeen(event : any) : void{
    if (event.status == false) {
      alert(`Viste el estado de:  ${event.userName}`)
    } else {
      alert(`No has visto el estado de: ${event.userName}`)
    }
    }
}