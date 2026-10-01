import styles from "./faq.module.css";

export default function FaqList({ items }: { items: readonly { question: string; answer: string }[] }) {
  return <div className={styles.list}>
    {items.map(item => <details key={item.question} className={styles.item}>
      <summary className={styles.question}>
        <span>{item.question}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
      </summary>
      <div className={styles.answer}><p>{item.answer}</p></div>
    </details>)}
  </div>;
}
