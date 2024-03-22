import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { BarranavegacionComponent } from "../barranavegacion/barranavegacion.component";
import { NgFor } from '@angular/common';
import { ActivatedRoute, Params} from '@angular/router';
import { Paquete} from '../Models/Ipaquete';
import { MyApiService } from '../Services/my-api.service';
import { HttpParams } from '@angular/common/http';

@Component({
    selector: 'app-detail-version1',
    standalone: true,
    templateUrl: './detail-version1.component.html',
    styleUrl: './detail-version1.component.css',
    imports: [
        FooterComponent,
        BarranavegacionComponent,
        NgFor,
    ]
})
export class DetailVersion1Component implements OnInit {

    constructor(private _route:ActivatedRoute, private _apiService:MyApiService, private changeDetectorRef: ChangeDetectorRef){}

    //estrellasArray?: number[] = [];
    paquete?: Paquete;
    estrellas: number[] = []
/*
    ngOnInit():void{
        this._route.params.subscribe(params => {
            this.paquete?.id == params['paqueteId']
            this._apiService.obtenerProducto(this.paquete?.id).subscribe((data:Paquete) => {
            this.paquete = data;
            console.log(data);})
        });
      }
      */

      ngOnInit():void{
        this._route.params.subscribe({
            next:(params: Params) =>{
            this._apiService.obtenerProducto(Number(params['paqueteId'])).subscribe({
                next:(data:Paquete) =>{
                    this.paquete = data
                    this.estrellas = String(this.paquete.estrellas).split("").map(Number);

                    //let estrellas1 = numeroToArray(this.paquete.estrellas)
                    //console.log(this.paquete.estrellas.length)
                    /*
                    for (let index = 0; index < this.paquete.estrellas; index++) {
                        this.estrellas = new Array(this.paquete.estrellas).fill(null);
                        this.estrellas.push(index);
                        console.log(index);
                    }  
                    */
                    this.changeDetectorRef.detectChanges(); 
                  //  console.log(this.estrellas)             
                }    
            })
        }
        })
    }
}

    /*
    listaPaquetes: Paquete[] = listaPaquetes;
    
    ngOnInit():void{
        this._route.params.subscribe(params => {
            this.paquete = this.listaPaquetes.find(paquete => paquete.id == params['paqueteId']);
        });
    }
    */
/*
opcion: number[] = [1,1,1,1,1];
nombre_paquete: String = "Entradas a Parques Temáticos Disney Orlando";
ref_1: String = "../../assets/img/disney2.avif";
ref_2: String = "../../assets/img/disney-1.jpeg";
ref_3: String = "../../assets/img/disney.jpeg";
ref_4: String = "../../assets/img/disney-2.jpg";
descripcion_ubicacion: String = "Orlando, Florida, Estados Unidos a 25 minutos del centro.";

referencia_img_1: String = "../../assets/img/disney.jpeg";

text_descrip: String = "Prepárate para divertirte en atracciones con mucha música, fuegos artificiales destellantes y toda la magia de este mundo donde reina la fantasía.¡Vas a poder abrazar a Mickey, Minnie y otros personajes queridos!Descubre los parques <br><br>• En Magic Kingdom podrás disfrutar de las atracciones clásicas de Disney, destellantes fuegos artificiales, espectáculos musicales y de la compañía de los personajes más queridos de Disney World. <br><br>• En Epcot, descubrirás las culturas del mundo en sus increíbles pabellones internacionales, te divertirás en sus emocionantes atracciones y vivirás un día diferente junto a la mejor tecnología. <br><br>•En Disney’s Hollywood Studios, conocerás un poco más sobre las películas y series de TV de Disney y disfrutarás de increíbles espectáculos. <br><br>•Ya en Disney’s Animal Kingdom, podrás conocer a los animales de distintos lugares del mundo en áreas como Asia y Africa, además de disfrutar del mundo submarino y del prehistórico.";
*/