import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-detail-version1',
    standalone: true,
    templateUrl: './detail-version1.component.html',
    styleUrl: './detail-version1.component.css',
    imports: [
        FooterComponent
    ]
})
export class DetailVersion1Component {

text_descrip: String = "Prepárate para divertirte en atracciones con mucha música, fuegos artificiales destellantes y toda la magia de este mundo donde reina la fantasía.¡Vas a poder abrazar a Mickey, Minnie y otros personajes queridos!Descubre los parques <br><br>• En Magic Kingdom podrás disfrutar de las atracciones clásicas de Disney, destellantes fuegos artificiales, espectáculos musicales y de la compañía de los personajes más queridos de Disney World. <br><br>• En Epcot, descubrirás las culturas del mundo en sus increíbles pabellones internacionales, te divertirás en sus emocionantes atracciones y vivirás un día diferente junto a la mejor tecnología. <br><br>•En Disney’s Hollywood Studios, conocerás un poco más sobre las películas y series de TV de Disney y disfrutarás de increíbles espectáculos. <br><br>•Ya en Disney’s Animal Kingdom, podrás conocer a los animales de distintos lugares del mundo en áreas como Asia y Africa, además de disfrutar del mundo submarino y del prehistórico.";
}
