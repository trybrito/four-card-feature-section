import styles from "./styles.module.scss";

type CardProps = {
  cardColor: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  altText: string;
};

export default function Card({
  cardColor,
  title,
  subtitle,
  imageUrl,
  altText,
}: CardProps) {
  return (
    <section className={styles[`${cardColor}-card`]}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <img src={imageUrl} alt={altText} />
    </section>
  );
}
