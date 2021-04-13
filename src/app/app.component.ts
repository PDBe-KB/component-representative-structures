import {Component} from '@angular/core';
import {SegmentGallery} from "./representative-structures/representative-structures.models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentAccession: string;
  gallery: SegmentGallery;

  constructor() {
    this.gallery = {
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
    }
  }
}
