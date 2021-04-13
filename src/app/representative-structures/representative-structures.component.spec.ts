import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RepresentativeStructuresComponent} from './representative-structures.component';
import {SegmentGallery, SegmentGalleryItem} from './representative-structures.models';
import {MatDialog} from '@angular/material';
import {SuperposeComponent} from '../superpose/superpose.component';
import {MolstarDialogComponent} from '../molstar-dialog/molstar-dialog.component';

const MOCKDATA = {
  accession: 'P123456',
  length: 10,
  inactive_color: 'white',
  active_color: 'black',
  start_index: 0,
  main_label: 'foo',
  sub_label: 'foo',
  gallery_items: [
    {
      observed: [
        {
          unp_start: 1,
          unp_end: 10,
        }
      ],
      image_url: '',
      image_alt: '',
      label: '',
      start: 1,
      end: 10,
      target_url: '',
      main_id: '',
      sub_id: '',
      opt_id: '',
      coverage: 0
    },
    {
      observed: [
        {
          unp_start: 1,
          unp_end: 5
        }
      ],
      image_url: '',
      image_alt: '',
      label: '',
      start: 1,
      end: 10,
      target_url: '',
      main_id: '',
      sub_id: '',
      opt_id: '',
      coverage: 0
    }
  ]
};

const TEST_GALLERY_ITEMS: SegmentGalleryItem[] = [
  {
    image_url: 'url',
    image_alt: 'img alt',
    label: 'label',
    start: 1,
    end: 5,
    target_url: 'url',
    main_id: '1abc',
    sub_id: 'A',
    opt_id: 'x',
    observed: [],
    coverage: 0
  }
];

export const TEST_SEGMENT_GALLERY: SegmentGallery = {
  accession: 'P123456',
  main_label: 'main label',
  sub_label: 'sub-label',
  length: 10,
  active_color: 'royalblue',
  inactive_color: 'dimgrey',
  start_index: 0,
  gallery_items: TEST_GALLERY_ITEMS
};


describe('RepresentativeStructuresComponent', () => {
  let component: RepresentativeStructuresComponent;
  let fixture: ComponentFixture<RepresentativeStructuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RepresentativeStructuresComponent, SuperposeComponent, MolstarDialogComponent],
      providers: [
        {provide: MatDialog, useValue: {}}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepresentativeStructuresComponent);
    component = fixture.componentInstance;
    component.data = TEST_SEGMENT_GALLERY;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get coverage string', () => {
    const data = {
      coverage: 0
    };
    expect(component.showCoverage(data)).toBeFalsy();
    data.coverage = 0.5;
    expect(component.showCoverage(data)).toEqual('Coverage: 50%');
  });

  it('should increase the start index', () => {
    component.data = MOCKDATA;
    component.data.start_index = 0;
    expect(component.data.start_index).toEqual(0);
    component.nextItem();
    expect(component.data.start_index).toEqual(1);
    component.nextItem();
    expect(component.data.start_index).toEqual(0);
  });

  it('should decrease the start index', () => {
    component.data = MOCKDATA;
    component.data.start_index = 0;
    expect(component.data.start_index).toEqual(0);
    component.previousItem();
    expect(component.data.start_index).toEqual(1);
    component.previousItem();
    expect(component.data.start_index).toEqual(0);
  });

  it('should set the start index', () => {
    component.data = MOCKDATA;
    component.data.start_index = 0;
    expect(component.data.start_index).toEqual(0);
    component.setCurrentItem(1);
    expect(component.data.start_index).toEqual(1);
  });

  it('should get style object', () => {
    component.data = MOCKDATA;
    component.data.start_index = 0;

    // Return style object of active item
    const expectedActive = {
      'width': '90%',
      'margin-left': '10%',
      'background-color': 'black',
      'text-align': 'center',
      'height': '20px'
    };
    expect(component.getObservedStyle(0, 0)).toEqual(expectedActive);

    // Return style object of inactive item
    const expectedInactive = {
      'width': '40%',
      'margin-left': '10%',
      'text-align': 'center',
      'background-color': 'white'
    };
    expect(component.getObservedStyle(1, 0)).toEqual(expectedInactive);
  });

  it('should get style object', () => {
    component.data = MOCKDATA;
    component.data.start_index = 0;

    // Return style object of active item
    const expectedActive = {
      'position': 'relative',
      'top': '-25px',
      'color': 'black',
      'font-size': 'large',
      'left': '-2.25px'
    };
    expect(component.getMarkerStyle(0)).toEqual(expectedActive);

    // Return style object of inactive item
    const expectedInactive = {
      'position': 'relative',
      'top': '-25px',
      'color': 'white',
      'font-size': 'large',
      'left': '-2.25px'
    };
    expect(component.getMarkerStyle(1)).toEqual(expectedInactive);

    component.data.gallery_items[0].end = 100;
    const expectedNoOffset = {
      'position': 'relative',
      'top': '-25px',
      'color': 'black',
      'font-size': 'large'
    };
    expect(component.getMarkerStyle(0)).toEqual(expectedNoOffset);
  });

  it('should set the Mol* parameters', () => {
    // Set parameters for opening a Mol* dialog

    const expected = {
      entryList: [
        {
          pdbId: '1abc',
          chainId: 'A',
          chainColor: [50, 130, 255],
          assemblyId: 'x'
        }
      ],
      current: 0
    };
    component.dialog.open = function () {
      return null;
    };
    expect(component.openMolstarDialog(0)).toEqual(expected);

  });
});
