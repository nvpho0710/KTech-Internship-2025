
import React, { useState } from 'react';
import type { ReactNode } from 'react';
import styles from './buttontabs.module.css';

export interface TabItem {
  label: string;
  content: ReactNode;
}

const demoTabs: TabItem[] = [
  {
    label: 'HISTORY',
    content: (
      <>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.
      </>
    ),
  },
  {
    label: 'APPROACH',
    content: (
      <>
        Contenido de tabNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
      </>
    ),
  },
  {
    label: 'CULTURE',
    content: (
      <>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.
      </>
    ),
  },
  {
    label: 'METHOD',
    content: (
      <>
        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
      </>
    ),
  },
];

interface ButtonTabsProps {
  tabs: TabItem[];
  initialIndex?: number;
}

const ButtonTabs: React.FC<ButtonTabsProps> = ({ tabs, initialIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            className={idx === activeIndex ? `${styles.tab} ${styles.tabActive}` : styles.tab}
            onClick={() => setActiveIndex(idx)}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.content}>{tabs[activeIndex].content}</div>
    </div>
  );
};




// Export both the component and a default demo usage
const ButtonTabsDemo = () => (
  <>
    <h1 style={{marginLeft: 12, marginTop: 24}}>Button Tabs</h1>
    <ButtonTabs tabs={demoTabs} initialIndex={1} />
  </>
);

export default ButtonTabsDemo;
export { ButtonTabs };
// Do NOT re-export TabItem as a type, just use the interface above for type checking
