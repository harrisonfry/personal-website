// Single source of truth for site content. Edit here, not in the components.
export const site = {
  name: 'Harrison Fry',
  role: 'Information Technology professional',
  description:
    'Harrison Fry is an Information Technology professional and long-time homelabber.',
  email: 'harrison@harrisonafry.com',
  github: 'https://github.com/harrisonfry/',
  linkedin: 'https://www.linkedin.com/in/harrisonafry',
} as const;

export interface EducationEntry {
  degree: string;
  start: string;
  end: string;
}

export const education: EducationEntry[] = [
  {
    degree: 'Associate in Networking Systems and Technology',
    start: 'Aug 2022',
    end: 'Aug 2026',
  },
];

export interface ExperienceEntry {
  title: string;
  organization: string;
  start: string;
  end: string;
  highlights: string[];
  skills: string[];
}

export const experience: ExperienceEntry[] = [
  {
    title: 'Assistant to Head of IT',
    organization: 'J. Reuben Clark Law School, BYU',
    start: 'Jan 2014',
    end: 'Aug 2016',
    highlights: [
      'Assisted in day-to-day IT tasks',
      'Programmatically compiled thousands of samples for a legal corpus database',
    ],
    skills: ['Perl', 'Microsoft Access'],
  },
];
