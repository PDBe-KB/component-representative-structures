/*
These classes store information on a gallery of images

On the protein pages, its usage is to display the best representative PDB
structures associated with a UniProt accession
 */

export class SegmentGalleryItem {
  image_url: string; // URL to an image file
  image_alt: string; // Text to be shown if the image is not rendered
  label: string; // Label of the image
  start: number; // Offset from 0 to the right, where the segment should start, in percentage, e.g. 30
  end: number; // Width of the segment, in percentage, e.g. 10
  target_url: string; // URL to be opened on (click)
  main_id: string; // Main ID (i.e. PDB id)
  sub_id: string; // Sub ID (i.e. chain id)
  opt_id: string; // Optional ID, for example assembly ID
  segment_id?: string; // Optional identifier of a superposed segment
  observed: ObservedRegion[];
  coverage: number;
}

export class SegmentGallery {
  accession: string; // UniProt accession identifier
  main_label: string; // Main label of the component, e.g. 'Representative structures'
  sub_label: string; // Sub-label
  length: number; // Length of the main segment track, e.g. 400
  active_color: string; // color name, or hex code for selected segment, e.g. 'royalblue'
  inactive_color: string; // color name, or hex code for not selected segment, e.g. 'royalblue',
  start_index: number;
  gallery_items: SegmentGalleryItem[];
}

export class ObservedRegion {
  unp_start: number;
  unp_end: number;
}
