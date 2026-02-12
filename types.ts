import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface PainPoint {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface SyllabusItem {
  week: string;
  title: string;
  details: string[];
}

export interface InstructorDetails {
  name: string;
  title: string;
  bio: string;
  achievements: string[];
  imageUrl: string;
}