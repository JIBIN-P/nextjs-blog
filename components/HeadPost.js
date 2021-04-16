import styles from '../styles/HeadPost.module.scss';

export const HeadPost = ({ meta, isBlogPost }) => {
  const h1 = styles.H1;
  const h1GreatTitle = [h1, styles.greatTitle].join(' ')
  return (<>
    <h1 className={isBlogPost ? h1GreatTitle : h1} >{meta.title}</h1>
    <div className={styles.details}>
      {
          isBlogPost ? null: <p>{meta.description}</p>
      }
      <span>{meta.date}</span>
      <span role='img' aria-label='one coffee'>
        ☕ {meta.readTime + ' min read'}
      </span>
    </div>
  </>)

}
