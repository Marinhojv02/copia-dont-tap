import { OnInit } from '@angular/core';
import { DoCheck } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss']
})
export class TilesComponent implements DoCheck, OnInit{

  public pontuacao:number = 0
  public tempo:number = 30
  public highScore:number = Number(localStorage.getItem('pontuacao')) | 0

  public tiles:string[] = []

  constructor() {

  }

  ngDoCheck(): void {

  }

  ngOnInit(): void {
    this.handleStart()
  }

  public handleClick(pos: number){
    if(this.tiles[pos] == 'preto'){
      this.pontuacao += 1
      this.handleSwitchPosition(pos)
    }else{
      if(Number(localStorage.getItem('pontuacao')) < this.pontuacao){
        localStorage.setItem('pontuacao', this.pontuacao.toString())
        this.highScore = Number(localStorage.getItem('pontuacao'))
      }
      this.pontuacao = 0
    }
  }

  public handleSwitchPosition(pos: number){
    let newPos = Math.floor(Math.random() * 16)
    while(this.tiles[newPos] == 'preto'){
      newPos = Math.floor(Math.random() * 16)
    }
    this.tiles[pos] = 'branco'
    this.tiles[newPos] = 'preto'
  }

  public handleStart(): void{
    this.tiles = []
    this.pontuacao = 0

    for (let index = 0; index < 16; index++) {
      this.tiles.push('branco')
    }

    let pos: number[] = []
    while(pos.length < 3){

      const nextPos = Math.floor(Math.random() * 16)

      if( !pos.includes(nextPos)){
        pos.push(nextPos)
      }

    }

    for (let index = 0; index < pos.length; index++) {
      this.tiles[pos[index]] = 'preto'
    }
  }

}
