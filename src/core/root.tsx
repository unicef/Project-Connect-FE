import './init';

import { useStore } from 'effector-react';
import React, { useEffect, Suspense, lazy } from 'react';

import {
  fetchCountriesFx,
  fetchCountriesGeometryFx,
  fetchGlobalStatsFx,
  fetchSchoolsGlobal,
} from '~/api/project-connect';
import { map, mapCountry, project, router } from '~/core/routes';
import { useRoute } from '~/lib/router';

import { changeCountryCode } from '@/country/model';

//import { MapPage } from '@/map/ui';
//import { ProjectPage } from '@/project/ui';

const MapPage = lazy(() => import('@/map/ui/map-page'));
const ProjectPage = lazy(() => import('@/project/ui/project-page'));

const NotFound = () => (
  <figure style={{ color: '#000' }}>404: Not Found</figure>
);

export const Root = () => {
  const { code = '' } = useStore(mapCountry.params) ?? {};

  useEffect(() => {
    void fetchCountriesFx();
    void fetchCountriesGeometryFx();
    void fetchGlobalStatsFx();
    void fetchSchoolsGlobal();

    if (code) {
      changeCountryCode(code);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {useRoute(map) && <MapPage />}
        {useRoute(project) && <ProjectPage />}
        {useStore(router.noMatches) && <NotFound />}
      </Suspense>
    </>
  );
};
