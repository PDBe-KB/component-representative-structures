import {Component, Input} from '@angular/core';
import {SegmentGallery, SegmentGalleryItem} from './representative-structures.models';
import {MatDialog} from '@angular/material';
import {MolstarDialogComponent} from '../molstar-dialog/molstar-dialog.component';

@Component({
  selector: 'app-representative-structures',
  templateUrl: './representative-structures.component.html',
  styleUrls: ['./representative-structures.component.css']
})
export class RepresentativeStructuresComponent {

  @Input() data: SegmentGallery;
  @Input() parentAccession: any;

  getSuperposeData(item: SegmentGalleryItem) {
    /*
     * Get data to be passed to the superpose component
     *
     * @param item - SegmentGalleryItem
     *
     * @returns an object for the superpose component
     */
    let superposeData = {
      accession: this.data.accession,
      superposition: true,
      superpositionParams: { segment: item.segment_id }
    };
    if(this.parentAccession){
      superposeData.superpositionParams['matrixAccession'] = this.parentAccession;
    }
    return superposeData;
  }

  getStyle(index: number) {
    const style = {
      'width': ((this.data.gallery_items[index].end - this.data.gallery_items[index].start) / this.data.length * 100) + '%',
      'margin-left': this.data.gallery_items[index].start / this.data.length * 100 + '%',
      'background-color': this.data.inactive_color + '70',
      'text-align': 'center'
    };
    if (index === this.data.start_index) {
      style['background-color'] = this.data.active_color + '70';
      style['height'] = '15px';
    }
    return style;
  }

  getObservedStyle(index: number, subIndex: number) {
    const style = {
      'width': ((this.data.gallery_items[index].observed[subIndex].unp_end
        - this.data.gallery_items[index].observed[subIndex].unp_start) / this.data.length * 100) + '%',
      'margin-left': this.data.gallery_items[index].observed[subIndex].unp_start / this.data.length * 100 + '%',
      'text-align': 'center',
      'background-color': this.data.inactive_color
    };
    if (index === this.data.start_index) {
      style['background-color'] = this.data.active_color;
      style['height'] = '20px';
    }
    return style;
  }

  getMarkerStyle(index: number) {
    const style = {
      'position': 'relative',
      'top': '-25px',
      'color': 'white',
      'font-size': 'large'
    };
    if (index === this.data.start_index) {
      style['color'] = this.data.active_color;
    }
    if (this.data.gallery_items[index].end - this.data.gallery_items[index].start < 25) {
      const offset = (this.data.gallery_items[index].end - this.data.gallery_items[index].start) / 4;
      style['left'] = '-' + offset + 'px';
    }
    return style;
  }

  showCoverage(data: any) {
    if (data.coverage) {
      return 'Coverage: ' + Math.ceil((data.coverage * 100)) + '%';
    }
  }

  nextItem() {
    if (this.data.start_index + 1 === this.data.gallery_items.length) {
      this.data.start_index = 0;
    } else {
      this.data.start_index++;
    }
  }

  previousItem() {
    if (this.data.start_index - 1 < 0) {
      this.data.start_index = this.data.gallery_items.length - 1;
    } else {
      this.data.start_index--;
    }
  }

  setCurrentItem(index: number) {
    this.data.start_index = index;
  }

  openMolstarDialog(selectedIndex) {

    const entries = [];

    this.data.gallery_items.forEach(rec => {
      entries.push({pdbId: rec.main_id, chainId: rec.sub_id, chainColor: [50, 130, 255], assemblyId: rec.opt_id});
    });

    const entryData = {
      entryList: entries,
      current: selectedIndex
    };

    this.dialog.open(MolstarDialogComponent,
      {
        disableClose: false,
        panelClass: 'molstarDialog',
        data: entryData
      }
    );

    return entryData;
  }

  constructor(public dialog: MatDialog) {
  }

}
