
import {MatButtonModule} from '@angular/material/button';
import  {NgModule} from "@angular/core";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule,  MatInputModule} from "@angular/material";



@NgModule({
        imports: [MatButtonModule,MatFormFieldModule,MatInputModule,MatIconModule],
        exports: [MatButtonModule,MatFormFieldModule,MatInputModule,MatIconModule]
})
export class MaterialModule { }