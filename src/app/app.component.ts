import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'first-app';
  selectedFeature = 'recipe';
  serverElements = [{type:'blueprint',name:'testserver',content:'jsut a content'}];
  evenComponents:number[]= [];
  oddComponents:number[] = [];
  onServerAdded(serverData:{serverName:string,serverContent:string}){
  this.serverElements.push({
    type:'server',
    name:serverData.serverName,
    content:serverData.serverContent
  });
  }
  onBlueprintAdded(blueprintData:{serverName:string,serverContent:string}){
    this.serverElements.push({
      type:'blueprint',
      name:blueprintData.serverName,
      content:blueprintData.serverContent
    });
    }
    onCountEmit(count:number){
    if(count%2 === 0)
    {
      this.evenComponents.push(count);
      console.log(this.evenComponents);
    }
    else
    {
      this.oddComponents.push(count)
      console.log(this.oddComponents);

    }
    }
    // navigateFeature(feature:string){
    //   this.selectedFeature=feature;
    // }
}
