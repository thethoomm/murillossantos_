import { Project } from "./project.type";

export type Event = {
  name: string;
  subname: string;
  image: string;
  type: string;
  totalProjects: number;
  projects: Project[],
}