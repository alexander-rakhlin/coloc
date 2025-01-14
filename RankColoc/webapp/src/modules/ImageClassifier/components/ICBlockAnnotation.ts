import gql from 'graphql-tag';

export interface MzImage {
  url: string;
  totalIntensity: number;
  minIntensity: number;
  maxIntensity: number;
}

export const ICBlockAnnotationsQuery = gql`query AllAnnotations($filter: AnnotationFilter, $datasetFilter: DatasetFilter) {
    allAnnotations(filter: $filter, datasetFilter: $datasetFilter,
                   offset: 0, limit: 500, orderBy: ORDER_BY_MZ, sortingOrder: ASCENDING) {
        id
        sumFormula
        adduct
        dataset {
          id
          name
        }
        isotopeImages {
          url
          totalIntensity
          minIntensity
          maxIntensity
        }
      }
  }`;

export interface ICBlockAnnotation {
  id: string;
  sumFormula: string;
  adduct: string;
  pixelFillRatio: number;
  dataset: { id: string, name: string },
  isotopeImages: MzImage[];
}

export interface ColocItem {
  otherAnnotationId: string;
  otherSf: string;
  otherAdduct: string;
  otherIonImageUrl: string;
  otherPixelFillRatio: number;
  otherOriginalIdx: number;
  rank: number | null;
}

export interface ColocSet {
  datasetId: string;
  dsName: string;
  isIncomplete: boolean | null;
  setIdx: number;
  source: string;
  user: string;
  pixelFillRatioThreshold: number;
  baseAnnotationId: string;
  baseSf: string;
  baseAdduct: string;
  baseIonImageUrl: string;
  basePixelFillRatio: number;
  otherAnnotations: ColocItem[];
}
