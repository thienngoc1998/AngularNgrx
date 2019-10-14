
import {MatButtonModule} from '@angular/material/button';
import  {NgModule} from "@angular/core";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule,  MatInputModule} from "@angular/material";
import {MatDatepickerModule} from "@angular/material";
import {MatNativeDateModule} from "@angular/material";
import {MatCheckboxModule} from "@angular/material";

@NgModule({
        imports: [
            MatButtonModule,
            MatFormFieldModule,
            MatInputModule,
            MatIconModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatCheckboxModule
        ],
        exports:[
            MatButtonModule,
            MatFormFieldModule,
            MatInputModule,
            MatIconModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatCheckboxModule
        ],
        providers: [
        MatDatepickerModule,
                   ],
})
export class MaterialModule { }