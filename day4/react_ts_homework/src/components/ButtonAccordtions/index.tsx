
import React, { useState } from 'react';
import styles from './buttonaccordtions.module.css';

export type AccordionItem = {
  label: string;
  content: React.ReactNode;
};

interface ButtonAccordtionsProps {
  items: AccordionItem[];
  initialIndex?: number;
}

const demoItems: AccordionItem[] = [
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

const ButtonAccordtionsDemo = () => <ButtonAccordtions items={demoItems} initialIndex={0} />;

const ButtonAccordtions: React.FC<ButtonAccordtionsProps> = ({ items, initialIndex = 0 }) => {
  const [openIdx, setOpenIdx] = useState(initialIndex);
  return (
    <div className={styles.accordionsContainer}>
      <div className={styles.accordionTitle}>Button Accordtions</div>
      <div className={styles.accordionSub}>Single Accordions</div>
      {items.map((item, idx) => (
        <div className={styles.accordionItem} key={item.label}>
          <button
            className={
              openIdx === idx
                ? `${styles.accordionBtn} ${styles.active}`
                : styles.accordionBtn
            }
            onClick={() => setOpenIdx(idx)}
            type="button"
          >
            {item.label}
          </button>
          {openIdx === idx && (
            <div className={styles.accordionContent}>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};



export default ButtonAccordtionsDemo;
export { ButtonAccordtions };
