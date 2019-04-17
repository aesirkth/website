/*
 * This file contains the types for various structured data passed to pages
 *
 */

export type Project = {
  folder: string;
  details: {
    fileInfo: {
      path: string;
      modifiedAt: Date;
    };
  };
  summary: {
    title: string;
    slug: string;
    started: number;
    completed: number | false;
    fileInfo: {
      path: string;
      modifiedAt: Date;
    };
  };
  sortBy: string;
};
