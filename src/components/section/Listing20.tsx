'use client';

import { project1 } from '@/data/product';
import type { ProjectInterface } from '@/interface/project.interface';
import listingStore from '@/store/listingStore';
import priceStore from '@/store/priceStore';

import ProjectCard1 from '../card/ProjectCard1';
import ProjectCard2 from '../card/ProjectCard2';
import ProjectCard3 from '../card/ProjectCard3';
import ProjectCard4 from '../card/ProjectCard4';
import ListingOption2 from '../element/ListingOption2';
import ListingSidebarModal2 from '../modal/ListingSidebarModal2';
import ListingSidebar2 from '../sidebar/ListingSidebar2';
import ListingSidebar6 from '../sidebar/ListingSidebar6';
import ListingSideber7 from '../sidebar/ListingSideber7';
import Pagination1 from './Pagination1';

export default function Listing20() {
  const getCategory = listingStore((state) => state.getCategory);
  const getProjectType = listingStore((state) => state.getProjectType);
  const getPrice = priceStore((state) => state.priceRange);
  const getDesignTool = listingStore((state) => state.getDesignTool);
  const getLocation = listingStore((state) => state.getLocation);
  const getSearch = listingStore((state) => state.getSearch);
  const getSpeak = listingStore((state) => state.getSpeak);
  const getBestSeller = listingStore((state) => state.getBestSeller);
  const getEnglishLevel = listingStore((state) => state.getEnglishLevel);

  // category filter
  const categoryFilter = (item: ProjectInterface) =>
    getCategory?.length !== 0 ? getCategory.includes(item.category) : item;

  // project-type filter
  const projectTypeFilter = (item: ProjectInterface) =>
    getProjectType?.length !== 0
      ? getProjectType.includes(item.projectType)
      : item;

  // price filter
  const priceFilter = (item: ProjectInterface) =>
    item.price !== undefined &&
    getPrice.min <= item.price.min &&
    getPrice.max >= item.price.max;

  // skill filter
  const skillFilter = (item: ProjectInterface) =>
    getDesignTool?.length !== 0
      ? getDesignTool.includes(item.skills.split(' ').join('-').toLowerCase())
      : item;

  // location filter
  const locationFilter = (item: ProjectInterface) =>
    getLocation?.length !== 0 && item.location
      ? getLocation.includes(item.location.split(' ').join('-').toLowerCase())
      : item;

  // location filter
  const searchFilter = (item: ProjectInterface) =>
    getSearch !== '' && item.location
      ? item.location
          .split('-')
          .join(' ')
          .toLowerCase()
          .includes(getSearch.toLowerCase())
      : item;

  // speak filter
  const speakFilter = (item: ProjectInterface) =>
    getSpeak?.length !== 0
      ? getSpeak.includes(item.language.split(' ').join('-').toLowerCase())
      : item;

  // english level filter
  const englishLevelFilter = (item: ProjectInterface) =>
    getEnglishLevel?.length !== 0
      ? getEnglishLevel.includes(item.englishLevel)
      : item;

  // sort by filter
  const sortByFilter = (item: ProjectInterface) =>
    getBestSeller === 'best-seller' ? item : item.sort === getBestSeller;

  // content
  const content = project1
    .slice(0, 8)
    .filter(categoryFilter)
    .filter(projectTypeFilter)
    .filter(priceFilter)
    .filter(skillFilter)
    .filter(locationFilter)
    .filter(searchFilter)
    .filter(speakFilter)
    .filter(englishLevelFilter)
    .filter(sortByFilter)
    .map((item, i) => (
      <div key={i} className="col-md-6 col-xl-3">
        <ProjectCard4 data={item} />
      </div>
    ));
  return (
    <>
      <section className="pt30 pb90">
        <div className="container">
          <ListingSideber7 />

          <div className="row">
            <div className="row">{content}</div>
            <div className="mt30">
              <Pagination1 />
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
      <ListingSidebarModal2 />
    </>
  );
}
