import styles from "./styles.module.scss";

type CardProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
  altText: string;
  color: string;
};

export default function Card({
  title,
  subtitle,
  imageUrl,
  altText,
  color,
}: CardProps) {
  return (
    <section className={styles[`${color}-card`]}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <img src={imageUrl} alt={altText} />
    </section>
  );
}
