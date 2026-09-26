import { iconSpreadsheet, iconDocument, iconQa, iconTable, iconPython, iconAutomation, iconCrm, iconCatalog, project1, project2, project3, project4, project5, techExcel, techSheets, techPython, techVba, techAirtable, techAi } from '../assets';

export const navLinks = [
  { id: 'about', title: 'About' },
  { id: 'projects', title: 'Projects' },
  { id: 'contact', title: 'Contact' },
];

export const services = [
  { title: 'Data Entry & Excel', icon: iconSpreadsheet },
  { title: 'Data Cleaning & QA', icon: iconQa },
  { title: 'Document Processing', icon: iconDocument },
  { title: 'CRM & Reconciliation', icon: iconCrm },
];

export const technologies = [
  { name: 'Excel', icon: techExcel },
  { name: 'Google Sheets', icon: techSheets },
  { name: 'Python', icon: techPython },
  { name: 'Excel VBA', icon: techVba },
  { name: 'Airtable', icon: techAirtable },
  { name: 'AI Automation', icon: techAi },
];

export const experiences = [];

export const projects = [
  { id: 'project-1', name: 'E-commerce Order Data Cleaning', description: 'Cleaned and standardized order records by checking duplicates, missing values, inconsistent formats, and category consistency. The workbook includes the processed output and QA evidence.', tags: [{ name: 'Excel', color: 'blue-text-gradient' }, { name: 'data-cleaning', color: 'green-text-gradient' }, { name: 'QA', color: 'pink-text-gradient' }], image: project1, repo: 'https://drive.google.com/drive/folders/1aD6BB_n7RnkCkttqiq-7_xEhtHng21QP', demo: 'https://drive.google.com/drive/folders/1aD6BB_n7RnkCkttqiq-7_xEhtHng21QP' },
  { id: 'project-2', name: 'Product Catalog Management', description: 'Standardized product names, categories, and catalog fields. The raw catalog, normalized output, lookup reference, and QA result remain available as evidence.', tags: [{ name: 'catalog', color: 'blue-text-gradient' }, { name: 'Excel', color: 'green-text-gradient' }, { name: 'validation', color: 'pink-text-gradient' }], image: project2, repo: 'https://drive.google.com/drive/folders/1avrAMTdjkwLUOz_ZrUyXXW1JWh6AJ03G', demo: 'https://drive.google.com/drive/folders/1avrAMTdjkwLUOz_ZrUyXXW1JWh6AJ03G' },
  { id: 'project-3', name: 'PDF-to-Excel Data Entry', description: 'Transcribed a labeled synthetic invoice into a structured Excel sheet, then checked the fields, totals, and entry accuracy against the source document.', tags: [{ name: 'PDF-entry', color: 'blue-text-gradient' }, { name: 'Excel', color: 'green-text-gradient' }, { name: 'QA', color: 'pink-text-gradient' }], image: project3, repo: 'https://drive.google.com/drive/folders/1lj-Mbw4jddMxv_nF_g3ex4lUY7PRLuFt', demo: 'https://drive.google.com/drive/folders/1lj-Mbw4jddMxv_nF_g3ex4lUY7PRLuFt' },
  { id: 'project-4', name: 'CRM Data Consolidation', description: 'Consolidated CRM records into a consistent structure, reviewed source fields, standardized values, and recorded the QA result.', tags: [{ name: 'CRM', color: 'blue-text-gradient' }, { name: 'CSV', color: 'green-text-gradient' }, { name: 'documentation', color: 'pink-text-gradient' }], image: project4, repo: 'https://drive.google.com/drive/folders/1u9bWunNNIImioNLhIQG8VvddYqNjdr2B', demo: 'https://drive.google.com/drive/folders/1u9bWunNNIImioNLhIQG8VvddYqNjdr2B' },
  { id: 'project-5', name: 'Marketplace Order & Payment Reconciliation', description: 'Compared order and payment details, reviewed matching and exception cases, and recorded the reconciliation checks. This is a portfolio simulation, not an official financial audit.', tags: [{ name: 'reconciliation', color: 'blue-text-gradient' }, { name: 'orders', color: 'green-text-gradient' }, { name: 'QA', color: 'pink-text-gradient' }], image: project5, repo: 'https://drive.google.com/drive/folders/1g-zRvRgCJfp6gxiM4sdjKKP1P454AvlJ', demo: 'https://drive.google.com/drive/folders/1g-zRvRgCJfp6gxiM4sdjKKP1P454AvlJ' },
];