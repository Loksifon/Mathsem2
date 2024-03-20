import React from 'react';
import styles from './Sidebar.module.css'; // Импорт CSS-модуля для стилизации
import { Link } from '@tanstack/react-router';

const sections = [
  { title: 'Введение', href: '/help' },
  { title: 'Установка', href: '/help/installation' },
  { title: 'Множества', href: '/help/sets' },
];

interface SidebarProps {
  sections: { title: string; href: string }[];
}



export const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <nav className={styles.sidebar}>
      <ul className={styles.navList}>
        {sections.map((section, index) => (
          <li key={index} className={styles.navItem}>
            <Link to={section.href} className={styles.navLink}>
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    
  );
};
