PDBe-KB Representative Structures Component
=

[![Build Status](https://www.travis-ci.com/PDBe-KB/component-representative-structures.svg?branch=main)](https://www.travis-ci.com/PDBe-KB/component-representative-structures)
[![codecov](https://codecov.io/gh/PDBe-KB/component-representative-structures/branch/main/graph/badge.svg?token=3ZCLLYC7fJ)](https://codecov.io/gh/PDBe-KB/component-representative-structures)
[![Maintainability](https://api.codeclimate.com/v1/badges/d755f853ff8e067d0eb9/maintainability)](https://codeclimate.com/github/PDBe-KB/component-representative-structures/maintainability)

This repository is for the codebase of a lightweight Angular v7 web component that displays a carousel of images with labels and tooltips.

This web component is used on PDBe-KB Aggregated Views of Proteins and Aggregated Views of Ligands to display the best representative structures for a UniProt accessions, and various highlights of a small molecule, respectively.

Note: This component uses the "molstar-dialog" web component available at [https://github.com/PDBe-KB/component-molstar-dialog](https://github.com/PDBe-KB/component-molstar-dialog) and the superpose component available at [https://github.com/PDBe-KB/component-superpose](https://github.com/PDBe-KB/component-superpose)

### Example:

<img src="https://raw.githubusercontent.com/PDBe-KB/component-representative-structures/main/pdbe-kb-representative-structures.png">

## Quick Start

Get the code and install dependencies
```
git clone https://github.com/PDBe-KB/component-representative-structures.git
cd component-representative-structures
npm i
```

Running the app
```
ng serve
```

Running tests
```
ng test
```

## Dependencies

This web component embeds two other PDBe-KB web components: [https://github.com/PDBe-KB/component-superpose](https://github.com/PDBe-KB/component-superpose) and [https://github.com/PDBe-KB/component-molstar-dialog](https://github.com/PDBe-KB/component-molstar-dialog)

In order to use all the features of this web component, retrieve the "molstar-dialog" and "superpose" components and replace the contents of the `src/app/molstar-dialog` and `src/app/superpose` folders with those files.


The main template (i.e. `index.html` by default) should also have the following CSS imports:
```angular2html
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.3/css/ebi-global.css" type="text/css" media="all"/>
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Icon-fonts/v1.3/fonts.css" type="text/css" media="all"/>
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.3/css/theme-pdbe-green.css" type="text/css" media="all"/>
```

## Basic usage

The component can be added to any Angular v7 apps.

#### 1.) Import the component:

Import the component in `app.module.ts` by default.
```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MolstarDialogComponent } from './molstar-dialog/molstar-dialog.component';
import { SuperposeComponent } from './superpose/superpose.component';
import { RepresentativeStructuresComponent } from './representative-structures/representative-structures.component';
import {MatDialogModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    MolstarDialogComponent,
    SuperposeComponent,
    RepresentativeStructuresComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

#### 2.) Add the component to a template:
```angular2html
<app-representative-structures [data]="gallery" [parentAccession]="parentAccession"></app-representative-structures>
```

The data model for the input data is described in 
`src/app/representative-structures/representative-structures.models.ts`

##### Example input data

```angular2html
data = {
   "accession": "P31800",
   "main_label": "Representative structure for UniProt P31800",
   "sub_label": "PDB chain with highest data quality, coverage and best resolution",
   "length": 480,
   "active_color": "#4169e1",
   "inactive_color": "#696964",
   "start_index": 0,
   "gallery_items": [
     {
       "image_url": "https://www.ebi.ac.uk/pdbe/static/entry/1qcr_single_entity_1_image-400x400.png",
       "image_alt": "1qcr chain A",
       "label": "PDB chain shown: 1qcr A",
       "start": 35,
       "end": 480,
       "target_url": "http://www.ebi.ac.uk/pdbe/entry/pdb/1qcr",
       "main_id": "1qcr",
       "sub_id": "A",
       "opt_id": "1",
       "observed": [
         {
           "unp_start": 35,
           "unp_end": 480
         }
       ],
       "coverage": 0.93,
       "segment_id": "1"
     }
   ]
 };
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/PDBe-KB/component-representative-structures/tags).

## Authors

* **Mihaly Varadi** - *Initial Implementation* - [mvaradi](https://github.com/mvaradi)
* **Lukas Pravda** - [lpravda](https://github.com/lpravda)
* **Nurul Nadzirin** - [nurulnad](https://github.com/nurulnad)

See also the list of [contributors](https://github.com/PDBe-KB/component-representative-structures/contributors) who participated in this project.

## License

This project is licensed under the EMBL-EBI License - see the [LICENSE](LICENSE) file for details

## Acknowledgements

We would like to thank the [PDBe team](https://www.pdbe.org) and the [PDBe-KB partner resources](https://github.com/PDBe-KB/pdbe-kb-manual/wiki/PDBe-KB-Annotations) for their feedback and contributions.
