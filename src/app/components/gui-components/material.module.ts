import { NgModule } from '@angular/core';

/* Import material modules as needed */
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material';
import { MatRadioModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatIconRegistry} from '@angular/material';
import { MatSidenavModule} from '@angular/material';
import { MatGridListModule } from '@angular/material';

@NgModule({
    imports: [
        MatIconModule,
        MatMenuModule,
        MatPaginatorModule,
        MatTableModule,
        MatExpansionModule,
        MatDatepickerModule,
        MatRadioModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatTabsModule,
        MatButtonModule,
        MatInputModule,
        MatCheckboxModule,
        MatGridListModule
    ],
    exports: [
        MatIconModule,
        MatMenuModule,
        MatPaginatorModule,
        MatTableModule,
        MatExpansionModule,
        MatDatepickerModule,
        MatRadioModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatTabsModule,
        MatButtonModule,
        MatInputModule,
        MatCheckboxModule,
        MatGridListModule
      ]
  })
export class MaterialModule {

}
